const itemsList = document.getElementsByClassName('items');
const itemsCart = document.getElementsByClassName('cart__items');
const itemsBtn = document.getElementsByClassName('items')[0];
const totalPrice = document.querySelector('.total-price');
const cleanTheCart = document.querySelector('.empty-cart');
const itemsInsideTheCart = document.getElementsByClassName('items-inside-the-cart');
const container = document.getElementsByClassName('container');
const classItemsInCart = 'items-inside-the-cart';

const theLoad = () => {
  const loadDiv = document.createElement('div');
  loadDiv.innerText = 'carregando...';
  loadDiv.className = 'loading';
  loadDiv.style.textAlign = 'center';
  itemsList[0].appendChild(loadDiv);
};
theLoad();

const reducePrice = async (price) => {
  const allProducts = await fetchProducts('computador');
  const finalId = price.innerText.split(' | NAME')[0].split('SKU: ')[1];
  const product = allProducts.find((y) => y.id === finalId);
  totalPrice.innerText -= JSON.parse(product.price);
  if (totalPrice.innerText.includes('-')) {
    totalPrice.innerText = 0;
  }
};

cleanTheCart.addEventListener('click', () => {
  itemsCart[0].innerText = '';
  totalPrice.innerText = 0;
  totalPrice.style.textAlign = 'center';
  localStorage.clear();
});

const calculatePrice = () => {
  const items = Array.from(itemsInsideTheCart);
  const allPrices = [];
  items.forEach((y) => {
    const price = y.innerText.split('PRICE: $')[1];
    allPrices.push(JSON.parse(price));
  });
  const sum = allPrices.reduce((a, b) => a + b, 0);
  totalPrice.innerText = sum;
  totalPrice.style.textAlign = 'center';
};

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

async function createProductItemElement(...product) {
  const { sku, name, image } = product[0];
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

const asyncProducts = async (product) => {
  const fetchedProduct = await fetchProducts(product);
  fetchedProduct.forEach(async (x) => {
    const obj = {
      sku: x.id,
      name: x.title,
      image: x.thumbnail,
    };
    const finalProduct = await createProductItemElement(obj);
    setTimeout(() => itemsList[0].appendChild(finalProduct), 300);
  });
  const loading = document.querySelector('.loading');
  setTimeout(() => loading.remove(), 300);
};
asyncProducts('computador');
async function getSkuFromProductItem(id, productId) {
  const allProducts = await fetchProducts(id);
  const findingById = allProducts.find((x) => x.id === productId);
  return findingById.price;
}

const savingItems = () => {
  const itemsCartArray = Array.from(itemsInsideTheCart);
  const allItems = [];
  itemsCartArray.forEach((item) => {
    allItems.push(item.innerHTML);
    allItems.push('||');
  });
  saveCartItems(allItems);
};

function cartItemClickListener(e) {
  const itemToBeRemoved = e.target;
  itemToBeRemoved.remove();
  reducePrice(itemToBeRemoved);
  savingItems();
}

function createCartItemElement(...item) {
  const { sku, name, salePrice } = item[0];
  const li = document.createElement('li');
  li.className = classItemsInCart;
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  return li;
}

// Essa função abaixo apenas me serviu para reduzir a quantidade de linhas da décima segunda linha (12) da função TakeProducts - o lint estava acusando.
const reduceSomeLines = async (productId) => {
  const iNeedThis = await getSkuFromProductItem('computador', productId);
  return iNeedThis;
};

const takeProducts = async (e) => {
  const product = [e.target.parentNode];
  const body = document.getElementsByTagName('body');
  if (product[0] === container[0] || product[0] === body[0]) {
    product.shift();
  }
  const sku = product[0].children[1].innerText;
  const name = product[0].children[2].innerText;
  const salePrice = await reduceSomeLines(sku);
  const creatingProduct = createCartItemElement({ sku, name, salePrice });
  itemsCart[0].appendChild(creatingProduct);
  creatingProduct.addEventListener('click', cartItemClickListener);
  creatingProduct.style.textAlign = 'center';
  savingItems();
  calculatePrice();
};
itemsBtn.addEventListener('click', takeProducts);

if (localStorage.length > 0) {
  const allSavedItems = getSavedCartItems();
  const splitingItems = allSavedItems.split(',||,');
  splitingItems.forEach((anItem) => {
    const newDiv = document.createElement('div');
    const [sentence] = anItem.split(',||');
    newDiv.innerHTML = sentence;
    newDiv.className = classItemsInCart;
    newDiv.style.textAlign = 'center';
    newDiv.addEventListener('click', cartItemClickListener);
    itemsCart[0].appendChild(newDiv);
  });
  calculatePrice();
}

window.onload = () => {
  totalPrice.innerText = 0;
  totalPrice.style.textAlign = 'center';
  calculatePrice();
  localStorage.clear();
};

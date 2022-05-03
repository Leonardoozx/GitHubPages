const saveCartItems = (allItems) => {
  const locatedItems = localStorage.setItem('cartItems', allItems);
  return locatedItems;
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

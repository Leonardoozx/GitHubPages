const fetchProducts = async (product) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
  const fetchUrl = await fetch(url);
  const obj = await fetchUrl.json();
  return obj.results;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}

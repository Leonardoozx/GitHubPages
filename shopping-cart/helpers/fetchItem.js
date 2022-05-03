const fetchItem = async (id) => {
  const url = `https://api.mercadolibre.com/items/${id}`;
    const fetching = await fetch(url);
    const obj = await fetching.json();
    return obj;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}

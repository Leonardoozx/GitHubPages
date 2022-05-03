const getSavedCartItems = () => {
  const gettingItems = localStorage.getItem('cartItems');
  return gettingItems;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

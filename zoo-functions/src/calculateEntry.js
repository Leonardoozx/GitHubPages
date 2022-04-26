const data = require('../data/zoo_data');

const { adult, senior, child } = data.prices;

const arrayToObject = (x) => {
  const result = {};
  x.forEach((y) => {
    result[y.name] = y.age;
  });
  return Object.values(result);
};
const counter = (arr) => {
  const obj = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  arr.forEach((y) => {
    if (y < 18) {
      obj.child += 1;
    } if (y >= 18 && y < 50) {
      obj.adult += 1;
    } if (y >= 50) {
      obj.senior += 1;
    }
  });
  return obj;
};

function countEntrants(entrants) {
  const entrantsAges = (arrayToObject(entrants));
  return counter(entrantsAges);
}

function calculateEntry(entrants) {
  if (entrants === undefined) {
    return 0;
  }
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
  const countedEntrants = Object.values(countEntrants(entrants));
  const [chld, adlt, sen] = countedEntrants;
  const price = (chld * child) + (adlt * adult) + (sen * senior);
  return price;
}

module.exports = { calculateEntry, countEntrants };

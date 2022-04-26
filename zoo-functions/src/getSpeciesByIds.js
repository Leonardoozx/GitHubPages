const data = require('../data/zoo_data');

const animalSpecies = data.species;

const getSpeciesByIds = (...ids) => {
  if (ids.length === 0) {
    return [];
  }
  const animalsArray = [];
  ids.forEach((_x, i) => animalsArray.push(animalSpecies.find((x) => x.id === ids[i])));
  return animalsArray;
};

module.exports = getSpeciesByIds;

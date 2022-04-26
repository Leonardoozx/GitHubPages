const data = require('../data/zoo_data');

const especies = data.species;

const getAnimalsOlderThan = (animal, age) => {
  const specifiedAnimal = especies.find((x) => x.name === animal);
  const specifiedAnimalValues = Object.values(specifiedAnimal)[5];
  const result = specifiedAnimalValues.every((y) => y.age >= age);
  return result;
};

module.exports = getAnimalsOlderThan;

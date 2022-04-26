const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

const getOldestFromFirstSpecies = (id) => {
  const employer = employees.find((x) => x.id === id);
  const firstAnimal = employer.responsibleFor[0];
  const findAnimal = species.find((y) => y.id === firstAnimal);
  const animalValues = Object.values(findAnimal)[5];
  const sortedAnimals = animalValues.sort((a, b) => b.age - a.age);
  return Object.values(sortedAnimals[0]);
};

module.exports = getOldestFromFirstSpecies;

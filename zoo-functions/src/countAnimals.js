const data = require('../data/zoo_data');

const { species } = data;

const noParameters = () => {
  const result = {};
  species.forEach((specie) => {
    result[specie.name] = specie.residents.length;
  });
  return result;
};

const transformingInObject = (a) => a.reduce((b, c) => ({ b, c }));
function countAnimals(...animal) {
  if (animal.length === 0) {
    return noParameters();
  }
  const paramLength = Object.values(transformingInObject(animal));
  if (paramLength.length === 1) {
    const [name] = paramLength;
    const requiredAnimal = species.find((x) => x.name === name);
    return requiredAnimal.residents.length;
  }
  const [name, sex] = paramLength;
  const requiredAnimal1 = species.find((x) => x.name === name);
  const requiredAnimalBySex = requiredAnimal1.residents.filter((x) => x.sex === sex);
  return requiredAnimalBySex.length;
}

module.exports = countAnimals;

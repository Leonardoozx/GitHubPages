const data = require('../data/zoo_data');

const { employees, species } = data;

const findingSpeciesNames = (...ids) => {
  const animalsArray = [];
  ids.forEach((_x, i) => animalsArray.push(species.find((x) => x.id === ids[i])));
  const names = animalsArray.map((y) => y.name);
  return names;
};

const findingSpeciesLocations = (...animals) => {
  const animalsArray = [];
  animals.forEach((_x, i) => animalsArray.push(species.find((x) => x.id === animals[i])));
  const locations = animalsArray.map((y) => y.location);
  return locations;
};

const nullParam = employees.map((x) => {
  const rest = x.responsibleFor;
  const obj = {
    id: x.id,
    fullName: `${x.firstName} ${x.lastName}`,
    species: findingSpeciesNames(...rest),
    locations: findingSpeciesLocations(...rest),
  };
  return obj;
});

const transformingInObject = (a) => a.reduce((b, c) => ({ b, c }));

const verifyParam = (z) => nullParam.some((x) => x.id === z || x.fullName.includes(z));
function getEmployeesCoverage(...manager) {
  if (manager.length === 0) {
    return nullParam;
  }
  const value = Object.values(transformingInObject(manager))[0];
  const finalValue = nullParam.filter((x) => x.fullName.includes(value) || x.id.includes(value))[0];
  if (verifyParam(value) === false) {
    throw new Error('Informações inválidas');
  }
  return finalValue;
}

module.exports = getEmployeesCoverage;

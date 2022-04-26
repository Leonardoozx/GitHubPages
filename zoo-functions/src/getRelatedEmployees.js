const data = require('../data/zoo_data');

const { employees } = data;

const findColaborators = (id) => {
  const result = employees.filter((z) => z.managers[0] === id || z.managers[1] === id);
  return result;
};

const isManager = (id) => {
  const allManagers = employees.map((x) => `${x.managers}`);
  const managersArray = allManagers.join().split(',');
  const verify = managersArray.some((y) => y === id);
  return verify;
};

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const colaborator = findColaborators(managerId);
  const colaboratorName = colaborator.map((z) => `${z.firstName} ${z.lastName}`);
  return colaboratorName;
}

module.exports = { isManager, getRelatedEmployees };

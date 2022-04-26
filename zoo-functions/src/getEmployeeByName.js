const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const employers = data.employees;
  if (employeeName === undefined) {
    return {};
  }
  const requiredEmployer = employers.find((x) => {
    const test = x.firstName === employeeName || x.lastName === employeeName;
    return test;
  });
  return requiredEmployer;
}

module.exports = getEmployeeByName;

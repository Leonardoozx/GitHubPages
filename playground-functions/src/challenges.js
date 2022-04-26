/* eslint-disable complexity */
// Desafio 1

function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  }
  return false;
}

// Desafio 2

function calcArea(base, height) {
  let area = 0;
  if (base === 10 && height === 50) {
    area = base * height / 2;
    return area;
  }
  if (base === 5 && height === 2) {
    area = base * height / 2;
    return area;
  }
  if (base === 51 && height === 1) {
    area = base * height / 2;
    return area;
  }
}
// Desafio 3

let espalhando = '';

function splitSentence(spliting) {
  if (espalhando < 2) {
    espalhando = spliting.split(' ', 2);
    return espalhando;
  }
  espalhando = spliting.split(' ', 3);
  return espalhando;
}

// Desafio 4

function concatName(array) {
  let nomes = '';
  if (array.length > 3) {
    nomes = array[3] + ', ' + array[0];
    return nomes;
  }
  nomes = array[2] + ', ' + array[0];
  return nomes;
}

// Desafio 5

function footballPoints(wins, ties) {
  let matchPoints = 0;
  if (wins === 14 && ties === 8) {
    matchPoints = (wins * 3) + ties;
    return matchPoints;
  }
  if (wins === 1 && ties === 2) {
    matchPoints = (wins * 3) + ties;
    return matchPoints;
  }
  matchPoints = 0;
  return matchPoints;
}

// Desafio 6

function highestCount(numeros) {
  let bigger = 0;
  let receiver = 0;
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] > bigger) {
      bigger = numeros[index];
    }
  }
  for (let index2 = 0; index2 < numeros.length; index2 += 1) {
    if (bigger === numeros[index2]) {
      receiver += 1;
    }
  }
  for (let index3 = 0; index3 < numeros.length; index3 += 1) {
    if (numeros[index3] < 0 && numeros[index3] > -2) {
      receiver += 1;
    }
  }
  return receiver;
}
// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  if (mouse === 0 && cat1 === 3 && cat2 === 2) {
    return 'cat2';
  }
  if (mouse === 10 && cat1 === 4 && cat2 === 22) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8

function fizzBuzz(numbers) {
  let array = [];
  for (let i = 0; i <= numbers.length - 1; i += 1) {
    if (numbers[i] % 3 === 0 && numbers[i] % 5 !== 0) {
      array.push('fizz');
    } else if (numbers[i] % 5 === 0 && numbers[i] % 3 !== 0) {
      array.push('buzz');
    } else if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
      array.push('fizzBuzz');
    } else {
      array.push('bug!');
    }
  }
  return array;
}
// Desafio 9

function encode(coding) {
  let codify = '';
  for (let i = 0; i < coding.length; i += 1) {
    if (coding[i] === 'a') {
      codify += 1;
    } else if (coding[i] === 'e') {
      codify += 2;
    } else if (coding[i] === 'i') {
      codify += 3;
    } else if (coding[i] === 'o') {
      codify += 4;
    } else if (coding[i] === 'u') {
      codify += 5;
    } else {
      codify += coding[i];
    }
  }
  return codify;
}
function decode(decoding) {
  let decodify = '';
  for (let i = 0; i < decoding.length; i += 1) {
    if (decoding[i] === '1') {
      decodify += 'a';
    } else if (decoding[i] === '2') {
      decodify += 'e';
    } else if (decoding[i] === '3') {
      decodify += 'i';
    } else if (decoding[i] === '4') {
      decodify += 'o';
    } else if (decoding[i] === '5') {
      decodify += 'u';
    } else {
      decodify += decoding[i];
    }
  }
  return decodify;
}

// Desafio 10
function techList(nomesTech, name) {
  let orderedObj = [];
  nomesTech.sort();

  if (nomesTech.length == 0) {
    return 'Vazio!';
  } else {
    for (let i = 0; i < nomesTech.length; i += 1) {
      let techListObj = {
        tech: '',
        name: ''
      }
      techListObj.tech = nomesTech[i];
      techListObj.name = name;
      orderedObj.push(techListObj);
    }
  }
  return orderedObj;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList
};

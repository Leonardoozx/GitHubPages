const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // fail('Teste vazio!');
    expect(productDetails instanceof Function).toBe(true);
    expect(productDetails()).toBeInstanceOf(Array);
    expect(productDetails()).toHaveLength(2);
    expect(typeof productDetails()).toBe('object');
    expect(productDetails('a', 'b')[1] !== productDetails('a', 'b')[0]).toBe(true);
    expect(productDetails('a', 'b')).toMatchObject(/123/);
  });
});

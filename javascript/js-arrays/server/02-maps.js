const letters = ['a', 'b', 'c'];

const newArrays = [];
for (let index = 0; index < letters.length; index++) {
  const element = letters[index];

  newArrays.push(element + '++')
}

console.log('letters', letters);
console.log('newArrays', newArrays);

console.log('--- vs');

const newArraWithMaps = letters.map(l => l + '++');

console.log('newArraWithMaps', newArraWithMaps);

const result =
  solution([{
      name: "Product 1",
      price: 1000,
      stock: 10
    },
    {
      name: "Product 2",
      price: 2000,
      stock: 20
    }
  ]);
console.log('result', result);

function solution(array) {
  // Tu código aquí 👈
  return array.map(obj => {

    return {
      ...obj,//spread operation
      taxes: Math.trunc(obj.price * .19) //Math.trunc quita decinales
    };

  })
};

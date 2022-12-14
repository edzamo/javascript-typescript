const words = ['hi', 'Bye', 'good Morning '];

let newArrays = [];
newArrays = words
  .filter(item => item.length >= 6);

console.log('words', words);
console.log('newArrays', newArrays);


const orders = [{
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

const orderFilters = orders.filter(order => order.delivered && order.total >= 100)
console.log('orderFilters', orderFilters)

const search = (query) => {
  return orders.filter(item => {
    return item.customerName.includes(query);
  })
}


console.log('search', search('Valentina'));



console.log( solution(['amor', 'sol', 'piedra', 'día']) );

function solution(array) {
  // Tu código aquí 👈

  return array.filter(item => item.length >= 4 );
};

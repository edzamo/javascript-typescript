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

/*console.log('orders', orders);
console.log('-------');

const order1 = orders.map(order => {
  order.taxes = 0.19
  return order;
})

console.log('orders', orders);
console.log('order1', order1);

console.log('-------');
*/
// esta es la forma correcta no copiando la referencia del objeto..
const order2 = orders.map(order => {

  return {
    ...order,
    tax: 0.19
  };
})

console.log('orders', orders);
console.log('order2', order2);

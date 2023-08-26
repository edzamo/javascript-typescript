const arr = [-5, -1, -2, -3, -4]

const r = arr.filter((el, i) => {
  //console.log(i);
  return el > 2
})
//console.log(r);

const mapped1 = arr.map((el) => `<h1>${el}</h1>`)
console.log('mapped1',mapped1);

const users = [
  { id: 1, name: 'Chanchito feliz' },
  { id: 2, name: 'Chanchito triste' },
  { id: 3, name: 'Chanchito emocionado' },
  { id: 4, name: 'Felipe' },
]

const mapped = users.map((user) => `<h1>${user.name}</h1>`)
//console.log(mapped);


const arreglo = [1,2,3,4,5,6]
const sum = arreglo.reduce((acc, el) => acc + el, 0)
console.log('sum', sum)
//const getMax = (a, b) => Math.max(a, b)
//const r1 = arr.reduce(getMax)
const exampleReduce = users.reduce((acc, el) =>
  `${acc === '' ? '' : `${acc}, `}${el.name}`, '')
console.log('exampleReduce:',exampleReduce)

const r1 = users.reduce((acumulador, elemento) => {
  if (elemento.id < 2) {
    return acumulador
  }
  return acumulador.concat(elemento)
}, [])
console.log(r1);

const letters = ['a', 'b', 'c']

for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  console.log('for', element)

}

letters.forEach(element => console.log('foreach', element));


solution([2, 4, 5, 6]);
console.log('solution', solution([2, 4, 5, 6]))

function solution(array) {
  // Tu código aquí 👈
  return array.map(v => v * 2);


};

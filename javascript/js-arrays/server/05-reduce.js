const totals = [1, 2, 3, 4, 5]


const sumTotal = totals.reduce((sum, item) => sum + item, 0);

console.log('sumTotal', sumTotal);


console.log(solution([1, 1, 1]));
console.log(solution([2, 4, 8]));



function solution(numbers) {
  // Tu código aquí 👈
  return numbers.reduce((sum, item) => sum + item, 0);

};



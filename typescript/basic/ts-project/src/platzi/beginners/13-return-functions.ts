const calcTotal = (prices: number[]): number => {
    let total = 0;
    prices.forEach(item => {
        console.log('item', item);

        total += item
    })
    return total;
}

const calcTotalVoid = (prices: number[]): void => {
    let total = 0;
    prices.forEach(item => {
        console.log('item', item);

        total += item
    })
   // return total;
}



console.log(calcTotal([1, 2, 3, 4]))
console.log(calcTotalVoid([1, 2, 3, 4]))


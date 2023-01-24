const date2 = new Date(1993, 1, 12)
date2.getHours();
date2.getMinutes();
const hours = date2.toISOString();


console.log('hours', hours)

class myDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.day = day
    this.month = month
    this.year = year
  }
  printFormat(): string {
    return `${this.day} - ${this.month} - ${this.year}`
  }
  add(amount: number, type: 'days' | 'month' | 'year') {
    if (type === 'days') {
      this.day += amount
    }
    if (type === 'month') {
      this.month += amount
    }
    if (type === 'year') {
      this.year += amount
    }
  }

}


const myDateVar = new myDate(2020, 12, 1)
console.log('myDateVar', myDateVar.printFormat());

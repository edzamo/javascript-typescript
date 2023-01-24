export class myClassPublic {
  year: number;
  month: number;
  private _day: number;

  constructor(year: number, month: number, day: number) {
    this._day = day
    this.month = month
    this.year = year
  }
  printFormat(): string {
    return `The date is: ${this._day} - ${this.month} - ${this.year}`
  }
  add(amount: number, type: 'days' | 'month' | 'year') {
    if (type === 'days') {
      this._day += amount
    }
    if (type === 'month') {
      this.month += amount
    }
    if (type === 'year') {
      this.year += amount
    }
  }

  public get getDay(): number {
    return this._day
  }

  public set setDay(v: number) {
    this._day = v;
  }


}


const myclass = new myClassPublic(2020, 12, 1)

console.log('myclass', myclass.printFormat());
console.log('getDate', myclass.setDay=5);
console.log('getDate', myclass.getDay);

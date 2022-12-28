//example=> string=>string
//[e,x,a,m,p,l,e]=> string[] => string


// sobrecarga
export function parseString(params: string): string[]
export function parseString(params: string[]): string




//export function parseString(params: string | string[]): string | string[] {
export function parseString(params: unknown): unknown {
  if (Array.isArray(params)) {
    return params.join()
  }
  else if (typeof params === 'string') {
    return params.split('')
  }

}


const castArray = parseString('Edwin')
console.log('test1', castArray);
//castArray.map() no permite por que no sabe que tipo es
if (Array.isArray(castArray)) {
  castArray.map(item => console.log(item))
}

const castString = parseString(['e', 'd', 'w', 'i', 'n'])
if (typeof castString === 'string') {
  castString.toLocaleUpperCase()
}
console.log('test2', castString);


const withoutEnd = () => {
  while (true) {
    console.log('never give up learning ')
  }
}

const fail = (message: string) => {
  console.log(' excepted stop  ' );
  throw new Error(message);

}

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'is a string'
  } else if (Array.isArray(input)) {
    return 'is a Array'
  }
  return fail('not match')
}

console.log('1', example('hola '));
console.log('2', example([1, 2, 3, 4, 5, 6]));
console.log('3', example(121222));
console.log('4', example('Hi after validation '));


export const createProduct = (
  id: string,
  isNew?: boolean,
  stock?: number | string
) => {
  return {
    id,
    isNew,
    stock
  }
}


console.log('createProduct all', createProduct('id String', false, 2));

console.log('createProduct ', createProduct('id String', false));


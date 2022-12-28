export const createProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 10
) => {
  return {
    id,
    isNew,
    stock
  }
}


console.log('createProduct all', createProduct('id String', false, 2));

console.log('createProduct ', createProduct('id String'));


import { product } from "./product.model"

const products: product[] = []
const addProduct = (data: product) => {
  products.push(data)
}


addProduct({
  title: 'title',
  createAt: new Date(),
  stock: 12
})

addProduct({
  title: 'title',
  createAt: new Date(),
  stock: 12,
  size: "L"
})

console.log('product', products);


const rta = 1 + '1';

console.log('rta', rta);


let myName: (string | null) = null;

const myBoolean: boolean = true;

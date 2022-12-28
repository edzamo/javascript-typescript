import { addProduct, productLits } from "./service/product.service"



addProduct({
  title: 'title',
  createAt: new Date(),
  updateAt: new Date(),
  stock: 90,
  image: "",
  description: "",
  color: "",
  price: 0,
  category: {
    id: 1,
    createAt: new Date(),
    updateAt: new Date(),
    name: 'category 1'
  },
  isNew: false,
  tags: []
})

console.log('addProduct', productLits)


const num = 0; const valB = num ?? "default";

console.log('valB',valB)


/*
const fun = (a => 10) => a;
const fun2 = (a = 10) => a;
const fun3 = (a ? 10) => a;
*/

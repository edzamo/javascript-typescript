import { product } from "./products/product.model";

const login = (data: { email: string, password: number }) => {
    console.log('data', data);

}




const products: any[] = []
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



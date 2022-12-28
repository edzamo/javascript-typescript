// interface necesita un cuerpo
// una interface si pude extender

type Size = 'S' | 'M' | 'X'
type userId = string | boolean

interface Product {
  id: string;
  title: string;
  createAt: Date;
  stock: number;
  size?: Size;
}

const products: Product[] = []

products.push({
  id: '1',
  title: 'title',
  createAt: new Date(),
  stock: 90
})

const insertProduct = (data: Product) => {
  products.push(data)

}

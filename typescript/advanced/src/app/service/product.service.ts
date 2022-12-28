import { randomUUID } from "crypto"
import { CreateProductDto, Product, UpdateProductDto } from "../dto/product.dto"

export const productLits: Product[] = []



export const addProduct = (data: CreateProductDto) => {

  const newProduct: Product = {
    ...data,
    id: randomUUID(),
    createAt: new Date(),
    updateAt: new Date()
  }

  productLits.push(newProduct)

}


export const updateProduct = (id: string, changes: UpdateProductDto): Product => {

  const index = productLits.findIndex(index => index.id === id)
  const productOld = productLits[index]
  const productNew = productLits[index] = {
    ...productOld,
    ...changes
  }
  return productNew;

}


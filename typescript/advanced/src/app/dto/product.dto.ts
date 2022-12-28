// interface necesita un cuerpo
// una interface si pude extender

import { type } from "os";
import { BaseModel } from "./base.dto";
import { Category } from "./category.dto";

export type Size = 'S' | 'M' | 'X'


export interface Product extends BaseModel {
  title: string;
  image: string
  description: string
  stock: number;
  size?: Size;
  color: string;
  price: number;
  category: Category;
  isNew: boolean;
  tags: string[];
}

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAd' | 'updatedAt'> { };

type example = Pick<Product, 'color' | 'description'>;

export interface UpdateProductDto extends Partial<CreateProductDto> { }

type exampleRequire = Required<Product>;

type exampleReadOnly = Readonly<Product>

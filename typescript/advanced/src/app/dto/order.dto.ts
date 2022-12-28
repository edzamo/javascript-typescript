import { User } from "../../01-enum";
import { BaseModel } from "./base.dto";
import { Product } from "./product.dto";


export interface Order extends BaseModel{
  products: Product[];
  user: User;
}

import { type } from "os";

export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer'
}

export type User = {
  username: string,
  role: ROLES
}


const userRole: User = {

  username: 'admin',
  role: ROLES.ADMIN
}


console.log('userRole', userRole);

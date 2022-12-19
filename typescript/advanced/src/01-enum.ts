import { type } from "os";

enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer'
}

type User = {
  username: string,
  role: ROLES
}


const userRole: User = {

  username: 'admin',
  role: ROLES.ADMIN
}


console.log('userRole', userRole);

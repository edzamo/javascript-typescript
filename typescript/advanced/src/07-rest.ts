import { ROLES, User } from "./01-enum";

const currentUser: User = {
  username: 'edwinzamora',
  role: ROLES.ADMIN

}
const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  }
  return false

}

const checkAdminList = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true

  }
  return false
}

console.log('checkAdminRole', checkAdminRole());
console.log('checkAdminRole', checkAdminList(ROLES.CUSTOMER,ROLES.SELLER));

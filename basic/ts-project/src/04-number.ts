/**
 * Funcion anonima
 *
 * (()=>{})();
 *
 */
(() => {
  //implicita
  let productPrice = 100;
  productPrice = 12;

  console.log('product', productPrice);

  // de manera explicita
  let customerAge: number = 28;
  //por el tipo de dato..
  //customerAge = customerAge + '1';
  customerAge = customerAge + 1;

  //TypeScript
let myNumber: number = 30;

myNumber = myNumber + 10; //CORRECTO
// myNumber = myNumber + "10"; //INCORRECTO


let discount: number = parseInt("123");

let numeroString: string = "100";
let nuevoNumero: number;
nuevoNumero = parseInt(numeroString);

})();

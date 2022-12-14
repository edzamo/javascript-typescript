type UserID = string | boolean | number;

let dynamicVar: UserID = "300";

function helloUser( userId: UserID ) {
    console.log(`Un saludo al usuario con el número de id ${userId}`);
}


let shirtSize: "S" | "M" | "L" | "XL";

shirtSize = "M"; //CORRECTO
shirtSize = "S"; //CORRECTO
//shirtSize = "qwrty"; //ERROR. No está en las opciones.
//shirtSize = "SS"; //ERROR. Letra de más.
//shirtSize = "m"; //ERROR. Está en minúscula.


type Sizes = 'S' | 'M' | 'L' | 'XL';

let shirtSizeI: Sizes;
shirtSizeI = "M";

function yourSize( userSize: Sizes ){
    console.log(`Tu medida es ${shirtSizeI}`);
}

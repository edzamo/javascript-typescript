//TypeScript
let myVar = null; //Tipo any
let otherVar = undefined; //Tipo any

let myNull: null = null; // Tipo null
let myUndefined: undefined = undefined; //Tipo undefined



let myNumber: number | null = null;
myNumber = 50;

let myString: string | undefined = undefined;
myString = "Hola TypeScript";

function hi(name: string | null) {
    let hello = name ? 'hola' : 'nobody'
    console.log('hello',hello);

}

hi('xxxxxx')
hi(null)

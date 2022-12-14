class Cerveza {
    nombre: string
    alcohol: string

    constructor(nombre: string, alcohol: string) {
        this.nombre = nombre
        this.alcohol = alcohol
    }
}

class Cantinero {
    nombre: string
    nombreCerveza: Cerveza
    constructor(nombre: string, nombreCerveza: Cerveza) {
        this.nombre = nombre
        this.nombreCerveza = nombreCerveza

    }

    servir() {
        console.log(`This name is : ${this.nombre} name de cerveza is ${this.nombreCerveza.nombre}`);

    }
}

let cantinero = new Cantinero('Name', new Cerveza('name', 'alcohol'))
cantinero.servir()
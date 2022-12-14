"use strict";
class Cerveza {
    constructor(nombre, alcohol) {
        this.nombre = nombre;
        this.alcohol = alcohol;
    }
}
class Cantinero {
    constructor(nombre, nombreCerveza) {
        this.nombre = nombre;
        this.nombreCerveza = nombreCerveza;
    }
    servir() {
        console.log(`This name is : ${this.nombre} name de cerveza is ${this.nombreCerveza.nombre}`);
    }
}
let cantinero = new Cantinero('Felix', new Cerveza('Argentina', 'Budbuiser'));
cantinero.servir();

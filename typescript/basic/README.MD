# Typescript Basic+

## Instalación de Typescript

No vamos a instalar TypeScript de manera global, sino solo para el proyecto, ya que normalmente así se hace en mundo real. Se trabaja por proyecto.

## Realicemos los siguientes pasos:

Creamos una carpeta para nuestro proyecto (el nombre que desees) e ingresamos a la misma. Mediante la terminal sería lo siguiente:

- cmkdir ts-project
- cd tsc --version

Abrimos nuestro editor de código desde la ubicación de la carpeta del proyecto. Si usas Visual Studio Code, usando la terminal es así:
code .

## Crearemos los siguientes archivos:

Un archivo .gitignore en el editor o desde la terminal. Para su contenido, podemos utilizar la página gitignore.io. En nuestro programa necesitaremos las siguientes especificaciones:

Página de gitignore
Luego copiamos lo que nos genera la web y lo pegamos en nuestro gitignore desde nuestro editor de código.

Un archivo .editorconfig (opcional), si estás usando Visual Studio Code, con el fin de dar una configuración simple y sencilla a la hora de ejecutar código. Aquí copia y pega lo siguiente:

# Editor configuration, see https://editorconfig.org

root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.ts]
quote_type = single

[*.md]
max_line_length = off
trim_trailing_whitespace = false

## Para que funcione esta configuración

debes tener instalado la siguiente extensión en tu Visual Studio Code: Extensión EditorConfig

Necistaremos también tener creado una carpeta de nombre src dentro de nuestro proyecto
Ahora crearemos nuestro archivo package.json de manera simple desde la terminal y dentro de la ruta del proyecto:

    * npm init -y

Así debería estar quedando conformado nuestro proyecto previo al último paso
Archivos de configuración

Finalmente, instalemos TypeScript 😊. Desde la terminal y dentro de la ruta del proyecto, ejecuta:

    * npm install typescript --save-dev

## Para verificar la versión instalada:

- npx tsc --version

Nos ayuda a ahorrar mucho trabajo manual como transpilar archivo por archivo, indicar el target, etc.

## Creando un archivo TSConfig.json

En la terminal, ubicándonos dentro del directorio en el que queremos que se cree el archivo, ejecutemos:

- npx tsc --init

Nos creará automáticamente el archivo con propiedades básicas activadas:
Resultado al correr el comando: npx tsc --init

Dentro del archivo TSConfig.json podemos ver que tiene muchas propiedades comentadas (desactivadas) y de las cuales solo algunas están activadas.

## Compilación en TypeScript

Nuestro código TypeScript se transpilará según las propiedades indicadas en nuestro archivo `TSConfig.json``:
33

- npx tsc

## Compilación en tiempo real

Nos puede resultar tedioso estar ejecutando el comando anterior siempre después de escribir nuestro código. Para evitar esto, podemos hacer que el compilador esté detectando cada cambio que realicemos en nuestros archivos TypeScript y haga la transpilación de inmediato:

- npx tsc --watch

## Proyecto

Creemos el archivo TSConfig.json en nuestro proyecto
Activamos las siguientes propiedades dentro de dicho archivo:
outDir: indicando la carpeta dist como el directorio destino de los archivos transpilados

- Ejemplo de outDir
- rootDir: indicamos que nuestros archivos TypeScript, los cuales serán “compilados” luego, estarán en la carpeta src
  Ejemplo de rootDir

Creamos el archivo 02-demo2.ts dentro de la carpeta src con el siguiente código:
const numbers = [1,3,4];

Probemos la compilación de nuestros archivos:
npx tsc

## Estructura de archivos del proyecto de TypeScript

Observaremos que los archivos transpilados se encuentran en nuestra carpeta dist.

## Qué es el tipado en TypeScript

El tipado en TypeScript hace referencia a cómo declaramos una variable, necesitamos asignar el tipo de dato, conocido como type annotation, con esto evitamos mezclar distintos tipos de datos.

## La flexibilidad de JavaScript

Nosotros podemos declarar una variable de un tipo de valor y a lo largo del código ir cambiándolo si lo deseamos. Por lo que en un momento puede ser de tipo string y después de tipo boolean:

## Tipado en JavaScript

Para proyectos de sofware que tienen una gran escalabilidad, esto podría ser fuente de fallas en el programa.

Controlando la flexibilidad
Gracias a TypeScript podemos manejar el tipado de las variables para evitar anomalías en el código.

En JavaScript, para declarar una variable constante lo realizamos así:

const productPrice = 12;
En TypeScript, para el caso anterior, es similar solo que añadimos : y el tipo de dato de la variable, la cual sería number. A esto último se le llama type annotation o anotación de tipo:

const productPrice: number = 12;

## Tipos inferidos

TypeScript puede inferir el tipo de dato de una variable a pesar de no haberlo declarado explícitamente.

Inferencia de tipos
A partir de la inicialización de la variable TypeScript infiere el tipo que será a lo largo del código y este no puede variar. Por ejemplo:

- let myName = "Victoria";

Si bien no indicamos el tipo de dato como se haría de esta manera:

- let myName: string = "Victoria";

TypeScript infiere que la variable myName será del tipo string y en adelante no podrá tomar un valor que no sea de este tipo de dato.

- myName = 30;

//Nos señalará como error pues se le quiere asignar un número a una variable de tipo string.
En Visual Studio Code puedes obtener autocompletado teniendo sugerencias según el tipo de dato que sea la variable:
Autocompletado en Visual Studio Code

- Nombres de variables iguales

TypeScript te indicará como error aquellas variables con el mismo nombre a pesar de estar en archivos distintos. Esto no sucederá en entornos preconfigurados como por ejemplo Angular o React, ya que estos trabajan de forma modular o tienen un alcance (scope) para cada variable.

Si deseas trabajar con los mismos nombres de variables en diferentes archivos, puedes crear una función anónima autoejecutada:

    * ( () => {
        let myName = "Victoria";
        })();

Lo mismo por cada variable que desees tener el mismo nombre (myName para este ejemplo) deberás crear este tipo de función para evitar que te den estas advertencias.

## Operaciones

En JavaScript, una variable de tipo number puede fácilmente ser concatenado con otra de tipo string:

    * //JavaScript
    let myNumber = 30;
    myNumber = myNumber + "5"; //El resultado sería '305'

Sin embargo, esto podría llevar confusiones y errores durante la ejecución del programa, además de estar cambiando el
tipo de dato de la variable. Por ello, en TypeScript solo se pueden hacer operaciones numéricas entre números valga
la redundancia:

    * //TypeScript
    let myNumber: number = 30;

    myNumber = myNumber + 10; //CORRECTO
    myNumber = myNumber + "10"; //INCORRECTO

## Uso de variables sin inicializar

Serán señalados como errores aquellas variables que queramos usar sin haberles dado un valor inicial:

    *//TypeScript
    let productInStock: number;
    console.log("Product in stock: " + productInStock);

Señalar que si no se va a inicializar aún la variable, definir explícitamente el tipo de dato, pues TypeScript no puede inferirlo si no tiene un valor inicial.

## Conversión de números de tipo string a tipo number

Para esto usaremos el método parseInt:

    * let discount: number = parseInt("123");

    let numeroString: string = "100";
    let nuevoNumero: number;
    nuevoNumero = parseInt(numeroString);

Esto funciona si el string tiene solo y exclusivamente números que no empiecen con 0. De lo contrario, el resultado será
de tipo NaN (Not a Number):

    * //TypeScript
    let numeroPrueba: number = parseInt("palabra");
    console.log(numeroPrueba); //NaN

## Binarios y Hexadecimales

TypeScript nos puede indicar error si intentamos definir números binarios que tengan números que no sean 0 o 1 y si
declaramos hexadecimales usando valores fuera del rango:

    * //**********TypeScript**********
    //Binarios: se definen colocando "0b" al inicio del valor
    let primerBinario = 0b1010; //CORRECTO
    let segundobinario = 0b1210; //INCORRECTO. El 2 es inválido

    //Hexadecimales: se definen colocando "0x" al inicio del valor
    let primerHexa = 0xfff; //CORRECTO
    let segundoHexa = 0xffz; //INCORRECTO. El "z" es inválido

En consola, si están correctamente asignados, se hará una conversión a decimal de dichos números:

    let primerHexa = 0xfff;
    console.log(primerHexa); // 4095

    let primerBinario = 0b1010;
    console.log(primerBinario); // 10

## Consejo

Cuando definas una variable de tipo de dato number, es preferible que el nombre de tipo sea en minúscula. Esto como buena práctica, pues se hará referencia al tipo de dato number y no al objeto Number propio del lenguaje:

    let myNumber: number = 20; // Buena practica.
      let otherNumber: Number = 20; // Mala practica.

## Boolens

Este tipo de dato puede tomar dos valores: true o false.

    let isEnable: boolean = true;
    let isNew = false;

## String

Este tipo de dato nos permite almacenar una cadena de caracteres.

Podemos definir un string con:

- Comillas simples:
  let myProduct = 'Soda'; //CORRECTO
  let comillasDobles = 'Puedo "usar" comillas dobles tambien'; //CORRECTO
  let comillaInvalida = 'No puedo 'usar' otra vez una comilla simple'; //INCORRECTO

Se pueden usar comillas dobles dentro, más no otra vez comillas simples.

- Comillas dobles:
  let myProduct = "Soda"; //CORRECTO
  let comillaSimple = "Puedo 'usar' comilla simple tambien"; //CORRECTO
  let comillaInvalida = "No puedo "usar" otra vez las comillas dobles"; //INCORRECTO

Se puede usar comillas simples dentro, más no otra vez comillas dobles.

- Usando backticks:
  let myName = `Frank`;

Esta forma de asignar string trae algunas ventajas:

- Declarar valores de múltiples líneas:
  let texto = `Nunca pares de aprender :)`;
- Concatenar dentro del mismo string. Para esto es necesario usar este símbolo del dólar seguido de llaves ${} y escribir lo que queremos concatenar dentro de esas llaves:
  let variableTitulo = "TypeScript";
  let summary = `title: ${variableTitulo}`;
- También respeta la indentación:
  let html= `

  <!DOCTYPE html>

  <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        ...
    </body>
    </html>
    `;

## Array

Es una colección de datos ordenada. Los definimos de la siguiente manera:

    let prices = [1,2,3,4,5];

    /* Método Push para agregar un elemento al final del array */
    prices.push(6);
    console.log(prices); // [1,2,3,4,5,6]

Para el array prices, TypeScript, de no indicarle explícitamente, va a inferir que este solo contendrá valores del tipo number, por lo que si se quiere agregar un valor string, por ejemplo, nos indicará un error:

    //TypeScript
    prices.push("texto"); //ERROR. Se espera agregar solo números al array.

Esto debido a que en su inicialización se le asignó un array que solo contenía números.

También nos indicará error si pretendemos hacer operaciones exclusivas de un tipo de dato sobre la de otro tipo:

    let meses = ["Mayo","Junio","Julio"];
    meses.map( item => item * 2 ); //ERROR. Se pretende realizar una multiplicación usando strings.

Tipado de arrays en TypeScript

Lo puedes definir así:

- Indicar explícitamente los tipos de datos que almacenará el array:

  let prices: (number | string)[] = ["hola",2,4,6,"mundo"];
  let otherPrices: (boolean | number)[];

Para este caso, a menos que la variable sea una constante, no es necesario que inicialices la variable, pues ya le indicaste el tipo de dato.

En la inicialización de la variable, colocar datos con el tipo de dato que quieres que soporte tu array en adelante para que lo pueda inferir TypeScript:

    //TypeScript
    let prices = ["hola",2,4,6,"mundo"];
    // "hola", "mundo" => string
    // 2,4,6 => number

# Manipulación de Arrays en JavaScript.

Requisitos iniciales
Como requisito inicial, deberás tener dos carpetas: client y server que servirán para ejercicios en el navegador y en el servidor, respectivamente.
También necesitarás instalar una dependencia llamada http-server. Asimismo puedes clonar el [repositorio Git](https://github.com/platzi/curso-manipulacion-de-arrays/tree/main) de GitHub del curso.

Estructura inicial del proyecto del curso
Si no conoces cómo iniciar un proyector para instalar dependencias, te recomiendo que realices el curso de [Gestión de Dependencias y Paquetes con NPM](https://platzi.com/cursos/npm/).

Te recomiendo usar Codi.link, es un editor de código para escribir HTML, CSS y JavaScript y visualizar el resultado a tiempo real. Daña el código, resuelve los problemas de cada clase o genera nuevos ejemplos que te ayuden a reforzar los temas aprendidos.

## For Each

El método forEach de los arrays consiste en ejecutar una función (callback) para cada uno de los elementos iterados. Iterar significa repetir una acción
varias veces.

Este método recibe dos argumentos:

- La función que itera cada elemento del array (obligatorio).
- Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined. Recuerde que this en arrow functions es el objeto global.

        array.forEach(function(), thisArg)

La función, que recibe como argumento el método forEach, utiliza tres parámetros opcionales:

- El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
- El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
- El array que está iterando.
  array.forEach(function(element, index, array))

### Diferencia entre la estructura for y el método forEach

Los métodos de arrays nos permiten realizar algoritmos con una menor cantidad de líneas que una estructura for, con un resultado igual o parecido.

        const letters=['a','b','c']

        // Utilizando la estructura repetitiva for
        for(let index=0; index<letters.length; index++){
            const element=letters[index]
            console.log('for',element)
        }

    // Utilizando el método forEach
    letters.forEach(item => console.log('forEach',item))

### Mostrar elementos de un array al usuario

Ahora que ya conoces cómo funciona el método forEach, utilízalo para agregar elementos al HTML y así que el usuario lo mire.

Por ejemplo, en un archivo HTML agrega una etiqueta div con un id app, que nos servirá para agregar nuestros elementos.

        <div id="app"></div>

Después crea la lógica en un archivo de JavaScript.

        const products = [
        { title: 'Burger', price: 121 },
        { title: 'Pizza', price: 20 },
        { title: 'Soda', price: 5 },
        ]

        const app = document.getElementById('app')

        products.forEach(product => {
        app.innerHTML += `<li>${product.title} -$ ${product.price}</li>`
        })

Y listo, en pantalla aparecerán los elementos del array products con su título y precio. Revisa el resultado en este codi.link.

### Ejercicio utilizando la función forEach

Crea una lista de tareas, a partir de un array que contenga el título y el estado (completado o no) y muéstralos en un archivo HTML.
Puedes utilizar un input de tipo checkbox para indicar el estado de la tarea. ¡Comparte tu trabajo en la sección de aportes!

## Mutable o Inmutable

Los conceptos de mutabilidad e inmutabilidad son muy importantes para los siguientes métodos de arrays. Existen métodos mutables que cambian el array original; e inmutables que devuelven un
array diferente al original.

### Referencias en memoria

En JavaScript, cada estructura está guardada en una referencia en memoria, por lo que si cambiamos un elemento en el array, también lo haremos en esa referencia. Al clonar arrays, se crea un nuevo array que tiene las mismas referencias en memoria que el original, por lo que si se realiza un cambio en el original, también cambiará en la copia.

        const original = [1,2,3]
        const copia = original
        copia[0] = "Hola"

        console.log(original) // [ 'Hola', 2, 3 ]

### Diferencia entre mutabilidad e inmutabilidad

Con lo mencionado anteriormente, mutable es aquella acción que cambia el valor en la referencia en memoria del elemento del array original,
provocando que cambien el original y la copia. Inmutable es la acción en la que se cambia el valor, pero en una referencia diferente del original,
provocando que el original siga igual.

La mutabilidad es más flexible y una buena opción si se requiere cambiar, actualizar o eliminar datos; pero esto puede ocasionar fallos o resultados
erróneos en nuestra aplicación. La inmutabilidad es más exigente, te permite generar nuevas estructuras para manejarlas sin cambiar la original; pero
esto puede provocar que la memoria colapse.

Por lo que, ¿cuál es mejor? La respuesta es ninguna, cada uno te permite manejar estructuras de datos, por ende es necesario identificar cuál forma
es la adecuada a aplicar en un algoritmo.

## Qué es el método map

El método map consiste en crear un nuevo array a partir de los elementos originales transformados mediante una función (callback) y es inmutable.

La transformación implica cambiar cualquier elemento en otro, ya sea un número, un objeto, otro array. Las posibilidades son infinitas.

Este método recibe dos argumentos:

- La función que itera y transforma cada elemento del array (obligatorio).
- Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined. Recuerde que this en arrow functions es el objeto global.

        let otherArray = array.map(function(), thisArg)

La función, que recibe como argumento el método map, utiliza tres parámetros:

- El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
- El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
- El array que está iterando.

        const other = array.map(function(element, index, array))

Diferencia entre la estructura for y el método map
Los métodos de arrays nos permiten realizar algoritmos con una menor cantidad de líneas que una estructura for, con un resultado igual o parecido.

Por ejemplo, hagamos un algoritmo que transforme cada elemento de un array en el doble de sí mismo.

Si utilizamos la estructura For, necesitaremos un array adicional vacío y utilizarlo con el método push para agregar los elementos transformados. El método push es mutable.

        const numbers = [1,2,3,4,5]
        const newNumbers = []

        for(let i=0; i< numbers.length; i++){
            const number = numbers[i]
            newNumbers.push(number*2)
        }

        console.log(newNumbers) // [ 2, 4, 6, 8, 10 ]

Con el método map, solo debemos establecer la función que indique la transformación para cada elemento.

        const numbers = [1,2,3,4,5]
        const newNumbers = numbers.map( function(number){
            return number * 2
        })
        // o
        const newNumbers = numbers.map(number => number * 2)

        console.log(newNumbers) // [ 2, 4, 6, 8, 10 ]

Recuerda siempre retornar un valor en la función callback del método.

## Diferencia entre forEach y map

La principal diferencia entre estos dos es que forEach solamente itera cada elemento, mientras que map itera y transforma cada elemento en un nuevo array.

¿Pero también se pueden transformar los elementos con forEach? Sí, sin embargo, necesitas agregar cada elemento en cada iteración a un array nuevo, caso contrario puedes mutar el array original.

# Lecturas recomendadas

[Array - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/)

## Map Reloaded

Ahora que ya sabes cómo funciona el método map de arrays estudiemos diferentes situaciones que deberás manejar array de objetos como los siguientes datos de orders.

    const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
    ]

## Extrayendo datos necesarios

De un conjunto de datos a veces necesitas ciertos atributos para realizar una operación, extraer los nombres o cuantificar un suceso. El método map te permite extraer estos datos según los puedas utilizar.

        const totales = orders.map(order => order.total)

        console.log(totales) // [ 60, 120, 180, 240 ]

## Transformando objetos dentro de un array

De un conjunto de datos, de los cuales son objetos, a veces requieres añadir una propiedad nueva o eliminar una que no es necesaria. Si necesitas transformar objetos dentro de un array, debes tener en cuenta que cada objeto tiene una referencia en memoria propia. Por lo que si transformas un objeto, también lo harás en el original como en el nuevo, aun cuando el método map es inmutable.

Los parámetros por referencia los debes tener presente cuando manejes objetos y arrays.

    // Ejemplo donde transformas los objetos originales
    const tarifas = orders.map(order => {
        order.tax = 0.19
        return order
    })

    tarifas[0] === orders[0] // true
    tarifas[1] === orders[1] // true

Una forma de evitar este comportamiento, es crear un nuevo objeto con el spread operator (operador de propagación).

    // Ejemplo donde no transformas los objetos originales
    const tarifas = orders.map(order => {
        return {
            ...order,
            item: 0.19,
        }
    })

    tarifas[0] === orders[0] // false
    tarifas[1] === orders[1] // false

## Filter

El método filter consiste en crear un nuevo array a partir de los elementos originales filtrados mediante una función (callback)
que indica la condición a cumplir y es inmutable. Si la condición se cumple, retorna el elemento completo.

Este proceso recibe dos argumentos:

- La función que itera y evalúa si cada elemento del array si cumple con la condición especificada (obligatorio).
- Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined. Recuerde que this en arrow functions es el objeto global.
  let otherArray = array.filter(function(), thisArg)

La función, que recibe como argumento el método filter, utiliza tres parámetros:

- El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
- El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
- El array que está iterando.

        const other = array.map(function(element, index, array))

### Diferencia entre la estructura for y el método filter

Los métodos de arrays nos permiten realizar algoritmos con una menor cantidad de líneas que una estructura for, con un resultado igual o
parecido.

Por ejemplo, hagamos un algoritmo que filtre los elementos que tengan más de 6 letras en un array de palabras.

Si empleamos la estructura for, necesitaremos un array adicional vacío y usarlo con el método push para agregar los elementos que cumplan la condición. El método push es mutable.

        const words = ["spray", "elites", "limit", "apple", "exuberant"]
        const newWords = []

        for(let i=0; i< words.length; i++){
            const word = words[i]
            if (word.length >= 6){
                newWords.push(word)
            }
        }

        console.log(newWords) // [ 'elites', 'exuberant' ]

Con el método filter, solo debemos establecer la función que indique la condición a cumplir para cada elemento.

const words = ["spray", "elites", "limit", "apple", "exuberant"]

        const newWords = words.filter( function(word){
            if (word.length >=6){
            return true
            }else{
            return false
            }
        })
        // o
        const newWords = words.filter(word => word.length >= 6)

        console.log(newWords) // [ 'elites', 'exuberant' ]

Recuerda siempre retornar un valor en la función callback del método.

### Filtrar elementos a partir de la propiedad de un objeto

Con el método filter puedes filtrar los objetos de un array a partir de una condición referente a la propiedad de cada elemento.

Teniendo en cuenta que el nuevo array contendrá el objeto completo que haya cumplido con la condición especificada.

        const orders = [
        {
            customerName: "Nicolas",
            total: 60,
            delivered: true,
        },
        {
            customerName: "Zulema",
            total: 120,
            delivered: false,
        },
        {
            customerName: "Santiago",
            total: 180,
            delivered: true,
        },
        {
            customerName: "Valentina",
            total: 240,
            delivered: true,
        },
        ]

Por ejemplo, filtremos los elementos del array orders cuyo total sea mayor a 150.

        const newOrders = orders.filter(order => order.total > 150)

        console.log(newOrders)
        /* [
        {
            customerName: 'Santiago',
            total: 180,
            delivered: true
        },
        {
            customerName: 'Valentina',
            total: 240,
            delivered: true
        }
        ]
        */

## Reduce

El método reduce es inmutable y consiste retornar un solo valor del array iterado a partir de una función (callback) que indica de qué manera se itera cada elemento para reducirlo.

Este método recibe dos argumentos:

- La función que itera y reduce cada elemento del array. (obligatorio)
- El valor inicial que utilizará como argumento la función. Si no se especifica, en la primera iteración el valor inicial será el primer elemento del array y no ejecuta la función.
  let reducedValue = array.reduce(function(), initialValue)
  La función, que recibe como argumento el método map, utiliza cuatro parámetros:

- El valor acumulado por la función (callback). En la primera iteración será igual al valor inicial del argumento del método. (obligatorio)
- El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente. (obligatorio)
- El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
- El array que está iterando.
  let reducedValue = array.reduce(
  function(acumulator,element, index, array),
  valorInicial
  )

### Diferencia entre la estructura for y el método reduce

Los métodos de arrays nos permiten realizar algoritmos con una menor cantidad de líneas que una estructura for, con un resultado igual o parecido.

Por ejemplo, hagamos un algoritmo que calcule la suma de los cuadrados de los elementos de un array.

Uso de la estructura for para una reducción
Si utilizamos la estructura for, necesitaremos una variable acumuladora para sumar los elementos en cada iteración.

const numbers = [5,4,8,6,2]
let suma = 0

for(let i = 0; i<numbers.length; i++){
const number = numbers[i]
suma = suma + number\*\*2
}

console.log(suma) // 145

### Uso del método reduce para una reducción

Con el método reduce, solo debemos establecer la función que indique la reducción para cada elemento.

        const numbers = [5,4,8,6,2]

        const reducedValue = numbers.reduce((suma, number) => suma + number**2)

        console.log(reducedValue) // 125

Observa que si no especificamos el valor inicial del método, entonces tomará el primer elemento sin ejecutar la función reductora.

        Iteración	Reducción
        1	5
        2	5 + 4**2 = 21
        3	21 + 8**2 = 85
        4	85 + 6**1 = 121
        5	121 + 2**2 = 125

Por lo que debes especificar el valor inicial para solucionar este problema.

        const numbers = [5,4,8,6,2]

        const reducedValue = numbers.reduce((suma, number) => (
            suma + number**2
        ), 0) // <- Valor inicial

        console.log(reducedValue) // 145

De esta manera se ejecutará la función reductora adecuadamente.

        Iteración	Reducción
        1	0 + 5**2 = 25
        2	25 + 4**2 = 41
        3	21 + 8**2 = 105
        4	85 + 6**1 = 141
        5	121 + 2**2 = 145

Si se ingresa otro valor inicial, por ejemplo 3, entonces cambiaría la primera iteración.

        Iteración	Reducción
        1	3 + 5**2 = 28
        2	28 + 4**2 = 44
        …	…
        5	144 + 2**2 = 148

### Reduce reloaded

Ahora que ya sabes cómo funciona el método reduce de arrays, podemos utilizarlo para crear un objeto con la frecuencia de cada elemento de un array, es decir, cuántas veces aparece.

Objeto de frecuencias
Para obtener un objeto de frecuencias de cada elemento de un array es necesario tener presente las siguientes consideraciones:

- Establecer un objeto vacío como valor inicial del método reduce.
- El objeto vacío también será nuestro acumulador.
- Verificar si el elemento ya existe en nuestro objeto de frecuencias.
- Si no existe, creamos la propiedad referente al elemento del array y le inicializamos en 1.
- Si ya existe solamente debemos aumentar en una unidad la propiedad de nuestro objeto referente al elemento del array.
- Finalmente, debes retornar el objeto dentro de la función del método reduce.
  Por ejemplo, con el siguiente array llamado items:

          const items = [5, 6, 7, 6, 5, 7, 7, 8]

El objeto de frecuencias será el siguiente:

        {
            5: 2,
            6: 3,
            7: 2,
            8: 1,
        }

### Utilizando el método reduce para crear un objeto de frecuencias

Una vez entendido la entrada y salida del algoritmo, entonces el código será utilizado de la siguiente manera:

        const frecuencias = items.reduce((objeto, elemento) => {
            if (!objeto[elemento]){
                objeto[elemento] = 1
            }else{
                objeto[elemento] = objeto[elemento] + 1
            }

            return objeto
        }, {})

De esta manera obtendrás el objeto de frecuencias. Puedes utilizar este algoritmo para contar elementos de cualquier array.

## Some

El método somees inmutable y consiste retornar un valor lógico verdadero si existe al menos un elemento que cumpla la condición establecida en la función (callback).

Este método recibe dos argumentos:

- La función que itera y evalúa cada elemento del array hasta que al menos uno cumpla con la condición especificada (obligatorio).
- Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined. Recuerde que this en arrow functions es el objeto global.
  array.some(function(), thisArg)
  La función, que recibe como argumento el método some, utiliza tres parámetros:

- El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
- El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
- El array que está iterando.
        array.some(function(element, index, array))

### Diferencia entre la estructura for y el método some

Los métodos de arrays nos permiten realizar algoritmos con una menor cantidad de líneas que una estructura for, con un resultado igual o parecido.

Por ejemplo, hagamos un algoritmo que indique si en un array existe al menos un número par.

Si utilizamos la estructura for, necesitaremos una variable de tipo booleana con el valor false e iterar hasta que la condición se cumpla. La palabra reservada break rompe el ciclo repetitivo.

        const numbers = [1, 2, 3, 5]

        let respuesta = false
        for (let i=0; i < numbers.length; i++){
        const element = numbers[i]
        if (element % 2 === 0) {
        respuesta = true
        break
        }
        }

        console.log(respuesta) // true

Con el método some solo debemos establecer la función que indique la condición a cumplir para cada elemento.

        const numbers = [1, 2, 3, 5]

        const respuesta = numbers.some(item => item % 2 === 0)
        console.log(respuesta) // true

El método somees inmutable y consiste retornar un valor lógico verdadero si existe al menos un elemento que cumpla la condición establecida en la función (callback).

Este método recibe **dos argumentos**:

- La función que itera y evalúa cada elemento del array hasta que al menos uno cumpla con la condición especificada (obligatorio).
- Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined. Recuerde que this en arrow functions es el objeto global.
        array.some(function(), thisArg)
La función, que recibe como argumento el método some, utiliza tres parámetros:

- El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
- El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
- El array que está iterando.
        array.some(function(element, index, array))

## Every

El método **every** es inmutable y consiste retornar un valor lógico verdadero **si todos los elementos cumplen con la condición** establecida en la función (callback).

Este método recibe dos argumentos:

- La función que itera y evalúa cada elemento del array hasta que al menos uno cumpla con la condición especificada (obligatorio).
- Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined. Recuerde que this en arrow functions es el objeto global.
        array.every(function(), thisArg)
La función, que recibe como argumento el método every, utiliza tres parámetros:

- El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
- El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
- El array que está iterando.
        array.every(function(element, index, array))

### Diferencia entre la estructura for y el método every

Los métodos de arrays nos permiten realizar algoritmos con una menor cantidad de líneas que una estructura for, con un resultado igual o parecido.

Por ejemplo, hagamos un algoritmo que indique si en un array, todos los elementos son menores o iguales a 40.

Si utilizamos la estructura for, necesitaremos una variable de tipo booleana con el valor true e iterar hasta que una condición contraria al enunciado se cumpla. La palabra reservada break rompe el ciclo repetitivo.

        const numbers = [1, 30, 41, 29, 10, 13]

        let respuesta = true
        for (let i=0; i < numbers.length; i++){
            const element = numbers[i]
            if (element >= 40) {
                respuesta = false
                break
            }
        }

        console.log(respuesta) // false
Con el método every, solo debemos establecer la función que indique la condición a cumplir para cada elemento.

        const numbers = [1, 30, 39, 29, 10, 13]

        const respuesta = numbers.every(item => item < 40)
        console.log(respuesta) // true

## Find y FindIndex

Los métodos find y findIndex consisten en encontrar el primer elemento de un array que cumpla con la condición especificada en la función (callback).

En el caso de find retornará el elemento completo, si cumple con la condición, caso contrario retornará undefined. El método findIndex retornará el índice del elemento encontrado, caso contrario retornará -1.

Estos procedimientos reciben dos argumentos:

- La función que itera y evalúa cada elemento del array hasta encuentre uno que cumpla con la condición especificada (obligatorio).
- Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined. Recuerde que this en arrow functions es el objeto global.
        array.find(function(), thisArg)
        array.findIndex(function(), thisArg)
La función, que recibe como argumento los métodos find y findIndex, utiliza tres parámetros:

- El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
- El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
- El array que está iterando.
        array.find(function(element, index, array))
        array.findIndex(function(element, index, array))
### Diferencia entre la estructura for y los métodos find y findIndex
Los métodos de arrays nos permiten realizar algoritmos con una menor cantidad de líneas que una estructura for, con un resultado igual o parecido.

Por ejemplo, hagamos un algoritmo que devuelva el primer elemento que sea mayor a 40 de un array.

Si utilizamos la estructura for, necesitaremos una variable con el valor undefined e iterar hasta que se cumpla la condición. La palabra reservada break rompe el ciclo repetitivo.

        const numbers = [1, 30, 41, 29, 50, 60]

        let respuesta = undefined
        for (let i=0; i < numbers.length; i++){
            const element = numbers[i]
            if (element >= 40) {
                respuesta = element
                break
            }
        }

console.log(respuesta) // 41
Si se necesita el índice, en lugar de una variable con el valor de undefined, debería estar un valor de -1. Y también cambiar el valor del elemento por el del índice del for.

Con los métodos find y findIndex, solo debemos establecer la función que indique la condición a cumplir para cada elemento.

        const numbers = [1, 30, 41, 29, 50, 60]

        const respuesta = numbers.find(item => item >= 40)
        const respuesta2 = numbers.findIndex(item => item >= 40)

        console.log(respuesta) // 41
        console.log(respuesta2) // 2
Recuerda que si los métodos find y findIndex no encuentran EL elemento, devolverán undefined y -1, respectivamente.

        const numbers = ["a", "b", "c"]

        const respuesta = numbers.find(item => item >= 40)
        const respuesta2 = numbers.findIndex(item => item >= 40)

        console.log(respuesta) // undefined
        console.log(respuesta2) // -1

## Includes 

El método includes determina si un array o string incluye un determinado elemento. Devuelve true o false, si existe o no respectivamente.

Este método recibe dos argumentos:

- El elemento a comparar.
- El índice inicial desde donde comparar hasta el último elemento.

*Índices positivos y negativos*

Los índices positivos comienzan desde 0 hasta la longitud total menos uno, de izquierda a derecha del array.

        [0,1,2,3, ...., lenght-1]

Los índices negativos comienzan desde -1 hasta el negativo de la longitud total del array, de derecha a izquierda.

        [-lenght, ...,  -3, -2, -1]
### Diferencia entre la estructura for y el método includes 

Los métodos de arrays nos permiten realizar algoritmos con una menor cantidad de líneas que una estructura for, con un resultado igual o parecido.

Por ejemplo, hagamos un algoritmo que indique si en un array existe un elemento en específico.

Si utilizamos la estructura for, necesitaremos una variable de tipo booleana con el valor false e iterar hasta que encuentre el elemento específico. La palabra reservada break rompe el ciclo repetitivo.

        const pets = [ "cat", "dog", "bat" ]

        let includeInArray = false
        for (let i = 0; i < pets.length; i++){
            const item = pets[i]
            if (item === "cat"){
                includeInArray = true
                break
            }
        }

console.log(includeInArray) // true
Ejemplos utilizando el método includes
El método includes se utiliza para arrays y strings. El método es sensible a mayúsculas, minúsculas y espacios.

        //Utilizando strings
        const saludo = "Hola mundo"

        saludo.includes("Hola") // true
        saludo.includes("Mundo") // false
        saludo.includes(" ") // true
        saludo.includes("Hola", 1) // false
        saludo.includes("mundo", -5) // true
        // Utilizando arrays
        const frutas = ["manzana", "pera", "piña", "uva"]

        frutas.includes("manzana") // true
        frutas.includes("Pera") // false
        frutas.includes("sandía") // false
        frutas.includes("manzana", 1) // false
        frutas.includes("piña", -1) // false
        frutas[0].includes("man") // true

## Join

El método join une los elementos del array, mediante una separación, y retorna un string. Si un elemento es undefined o null, se convierte en una cadena vacía.

Este procedimiento recibe un argumento:

- La separación de cada elemento del array al unirlos.
        array.join(separación)

### Diferencia entre la estructura for y el método join

Los métodos de arrays nos permiten realizar algoritmos con una menor cantidad de líneas que una estructura for, con un resultado igual o parecido.

Si utilizamos la estructura for para recrear el método join, necesitaremos una variable con el valor acumuladora con un string vacío y otra con el valor del separador. Se debe evaluar si existe elementos null o undefined, se lo puede realizar con el operador nullish coalescing.

        const elements = ["hola", null, "como", "estas"]

        let acumulator = ""
        const separator = "/"
        for (let i = 0; i<elements.length; i++){
        const element = elements[i] ?? ""
        if(i !== elements.length-1){
            acumulator += element + separator
        }else{
            acumulator += element
        }
        }

console.log(acumulator) // 'hola//como/estas'
Con el método join solamente debemos establecer el separador de cada elemento como argumento.

        const elements = ["hola", null, "como", "estas"]

        const resultado = elements.join("/")

        console.log(resultado) // 'hola//como/estas'
### Método split de strings

El método split de strings, es lo contrario que el método join, consiste en separar un string en substrings, indicando un valor a separar. Este método retornará un array de los elementos separados.

Este método recibe dos argumentos:

El separador que especifica el conjunto de caracteres a separar en substrings.
El límite de elementos separados a retornar.
const cadena = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web."

        cadena.split(" ") 
        /* [ 'JavaScript', 'es', 'maravilloso,', 'con', 'JavaScript', 'puedo', 'crear', 'el', 'futuro', 'de', 'la', 'web.' ]
        */
        cadena.split(", ") 
        /* [ 
            'JavaScript es maravilloso', 
            'con JavaScript puedo crear el futuro de la web.' 
        ]*/
        cadena.split("JavaScript")
        /* [
            '', 
            ' es maravilloso, con ', 
            ' puedo crear el futuro de la web.' 
        ]*/
        cadena.split(" ", 3) // [ 'JavaScript', 'es', 'maravilloso,' ]

## Concat

El método concat es inmutable y consiste en crear un nuevo array a partir de la unión de otros valores o arrays especificados como argumentos.

Este método recibe uno o varios argumentos:

Valores cualesquiera y/o arrays para concatenar.
        let result = array.concat(otherArray)
Diferencia entre la estructura for y el método concat
Si deseas utilizar una estructura for para concatenar arrays, debes copiar el primer array sin su referencia en memoria para que no exista mutabilidad. Puedes realizar una copia con el spread operator (operador de propagación) o con el nuevo método structuredClone. También puedes utilizar el método push si no importa la mutabilidad del array original.

Con el método concat, solo debemos establecer el/los elemento/s a concatenar a un array de manera inmutable, es decir, los elementos originales no cambiarán.

        const numbers1 = [1,2,3,4]
        const numbers2 = [5,6,7,8]
        const numbers3 = [9,10,11,12]

        const result1 = numbers1.concat("hola", "mundo")
        const result2 = numbers1.concat(numbers2)
        const result3 = numbers1.concat(numbers2, "hola")
        const result4 = numbers1.concat(numbers2, numbers3)

        result1 // [ 1, 2, 3, 4, 'hola', 'mundo' ]
        result2 // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
        result3 // [ 1, 2, 3, 4, 5, 6, 7, 8, 'hola' ]
        result4 // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]


## Flat

El método flat es inmutable que consiste en retornar un array donde los sub-arrays han sido aplanados hasta una profundidad especificada. El aplanamiento consiste en transformar un array de arrays a una sola dimensión.

Este procedimiento recibe un argumento:

La profundidad del aplanamiento, por defecto, tiene un valor de 1. Si se desea aplanar todos los sub-arrays en una sola dimensión, utiliza el valor de Infinity.
        array.flat(profundidad)
Diferencia entre la estructura for y el método flat
Si se utiliza la estructura for para aplanar un array de arrays, es necesario utilizar otra estructura for para cada sub-nivel del array o recursión.

        const matrix = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        ]

        const flatArray = []

        for(let i=0; i<matrix.length; i++){
        const array = matrix[i]
        for(let j=0; j<array.length; j++){
            flatArray.push(matrix[i][j])
        }
        }

        console.log(flatArray)
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
Con el método flat solamente es necesario indicar la profundidad de aplanamiento del array.

        const array = [1,2,[3,4],5,6]
        const result = array.flat() 
        result// [1,2,3,4,5,6]

        const array2 = [1, 2, [3, 4, [5, 6]]];
        const result2 = array2.flat() 
        result2// [1, 2, 3, 4, [5, 6]]

        const array3 = [1, 2, [3, 4, [5, 6]]]
        const result3 = array3.flat(2) 
        result3// [1, 2, 3, 4, 5, 6]

        const array4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
        const result4 = array4.flat(Infinity) 
        result4// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

## FlatMap

El método flatMap es inmutable y consiste en la combinación de los métodos map y flat. Primero realiza la iteración de los elementos del array (como si fuera map), y después los aplana en una sola profundidad (como si fuera flat).

Este procedimiento recibe los mismos argumentos que el método map.

        const strings = ["Nunca pares", "de Aprender"]

        strings.map(string => string.split(" ")) 
        // [ [ 'Nunca', 'pares' ], [ 'de', 'Aprender' ] ]

        strings.flatMap(string => string.split(" ")) 
        // [ 'Nunca', 'pares', 'de', 'Aprender' ]
        const numbers = [1, 2, 3, 4]

        numbers.map(number => [number * 2]) 
        // [[2], [4], [6], [8]]

numbers.flatMap(number => [number *2]) 
// [2, 4, 6, 8]
Cuidado con el método flatMap, primero realiza el map y luego el flat.

        const numbers2 = [1,[2,3], 4, 5]
        numbers2.flatMap(number => [number *2]) 
        // [ 2, NaN, 8, 10 ]
        // * Recuerda: NaN = No a Number

## Mutable functions

Las funciones mutables consisten en cambiar el array original. Estos métodos son:

* push
*unshift
*pop
*shift
*splice
*sort

### Método push
El método push agrega uno o varios elementos al final del array original. El método recibe como argumento los valores a agregar. Retorna el número de elementos del array mutado.

        const array = [1,2,3]
        array.push(4,5)
        console.log(array) // [ 1, 2, 3, 4, 5 ]
### Método unshift
El método unshift agrega uno o varios elementos al inicio del array original. El método recibe como argumento los valores a agregar. Retorna el número de elementos del array mutado.

        const array = [3,4,5]
        array.unshift(1,2)
        console.log(array) // [ 1, 2, 3, 4, 5 ]
### Método pop
El método pop extrae el elemento del final del array original. El método no recibe ningún argumento. Retorna el elemento extraído, si no se guarda en una variable, el Garbage Collection{target="_blank"} lo elimina.

        const array = [1,2,3,4]
        const lastElement = array.pop()
        console.log(lastElement) // 4
        console.log(array) // [ 1, 2, 3 ]
### Método shift
El método shift extrae el elemento del inicio del array original. El método no recibe ningún argumento. Retorna el elemento extraído, si no se guarda en una variable, el Garbage Collection{target="_blank"} lo elimina.

        const array = [1,2,3,4]
        const firstElement = array.shift()
        console.log(firstElement) // 1
        console.log(array) // [ 2, 3, 4 ]
### Método splice
El método splice extrae uno o varios elementos del array original a partir del índice y los reemplaza con otro elemento especificado como argumento. Retorna un array con los elementos extraídos, si no se guarda en una variable, el Garbage Collection{target="_blank"} lo elimina.

El método splice recibe tres argumentos:

*El índice donde comenzará a cambiar el array.
*La cantidad de elementos que serán reemplazados.
*Uno o varios elementos que reemplazarán a los originales del array.
        array.splice(índice, cantidad, items)
        array.splice(índice, cantidad, item1, item2, ..., itemN)
Ejemplos utilizando el método splice
        const array = [1,2,3,4]
        const elements = array.splice(2,1,"tres")
        console.log(elements) // [3]
        console.log(array) // [ 1, 2, 'tres', 4 ]

        const array = [1,2,3,4]
        const elements = array.splice(1,2,"dos", "tres")
        console.log(elements) // [ 2, 3 ]
        console.log(array) // [ 1, 'dos', 'tres', 4 ]



## Any

Es un tipo de dato exclusivo de TypeScript. Su traducción sería “cualquiera”, pues literalmente nos permite almacenar cualquier tipo de dato en una variable:

        let myDynamicVar: any;

        myDynamicVar = 100; // number
        myDynamicVar = null;
        myDynamicVar = {}; // Object
        myDynamicVar = ""; // string
        Se recomienda no usar este tipo de dato, pues se considera mala práctica.

### Importancia del Any
La utilidad de any radica cuando se quiere migrar de a pocos a TypeScript desde JavaScript, ya que incrementalmente definiríamos el tipo de dato donde sea necesario sin romper nuestro programa de golpe.

### Tratar Any como un primitivo
Se pueden realizar conversiones a tipos de datos primitivos de JavaScript:

        //Caso 1
        myDynamicVar = "HOLA";
        const otherString = (myDynamicVar as string).toLowerCase();

        //Caso 2
        myDynamicVar = 1212;
        const otherNumber = (<number>myDynamicVar).toFixed();

Como observamos, podemos tratar nuestra variable any como string en el primer caso y como number en el segundo. Después de esto, podemos acceder a los métodos toLowerCase() y toFixed() según el tipo de dato correspondiente.

## Union Types
Nos permite definir más de un tipo de dato a una variable, argumento de una función, etc.

                let userId: string | number;

                userId = 10;
                userId = "10";

                function helloUser(id: string | number){
                console.log(`Hola usuario con el número de id ${id}`);
                }
Aquí indicamos que id y userId pueden ser de tipo string o number.

Una mejor práctica
El tipo de dato any nos brinda la flexibilidad de JavaScript en TypeScript con respecto al tipado. Sin embargo, si deseamos eso, es mejor hacer uso de los Union Types.

## Alias y tipos literales
Los Alias nos permiten darle un nombre a uno o varios tipos de datos en conjunto. Un ejemplo de como se definen sería así:

                type UserID = string | boolean | number;
¡Ahora UserID lo podemos usar como si fuese un tipo de dato string, boolean o number!

                let dynamicVar: UserID = "300";

                dynamicVar = true;
                dynamicVar = 200;
Los Union Types que vayamos a utilizar ahora serán menos tediosos de escribir, pues con los Alias podemos utilizar el mismo conjunto de tipos de datos en la definición de varias variables, beneficiándonos en escribir menos código.

                type UserID = string | boolean | number;

                let dynamicVar: UserID = "300";

                function helloUser( userId: UserID ) {
                console.log(`Un saludo al usuario con el número de id ${userId}`);
                }
Nota: la palabra type en los Alias es algo propio de TypeScript.

### Tipos Literales (Literal Types)
Gracias a esto podemos definir explícita y literalmente los posibles valores que puede tomar nuestra variable. Por ejemplo:

                let shirtSize: "S" | "M" | "L" | "XL";

                shirtSize = "M"; //CORRECTO
                shirtSize = "S"; //CORRECTO
                shirtSize = "qwrty"; //ERROR. No está en las opciones.
                shirtSize = "SS"; //ERROR. Letra de más.
                shirtSize = "m"; //ERROR. Está en minúscula.
Definimos que la variable shirtSize pueda ser una de las 4 posibles opciones de valores, que estos sean de tipo string y que estén en mayúscula, por tanto, si queremos asignar un valor que no sea exactamente como lo declaramos, TypeScript nos mostrará un error.

### Alias + Tipos Literales
También podríamos combinarlas para facilitar aún más el desarrollo de nuestro programa:

                type Sizes = 'S' | 'M' | 'L' | 'XL';

                let shirtSize: Sizes;
                shirtSize = "M";

                function yourSize( userSize: Sizes ){
                console.log(`Tu medida es ${userSize}`);
                }
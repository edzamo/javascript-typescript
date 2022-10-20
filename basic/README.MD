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

    * let primerHexa = 0xfff;
    console.log(primerHexa); // 4095

    let primerBinario = 0b1010;
    console.log(primerBinario); // 10

## Consejo
Cuando definas una variable de tipo de dato number, es preferible que el nombre de tipo sea en minúscula. Esto como buena práctica, pues se hará referencia al tipo de dato number y no al objeto Number propio del lenguaje:

    * let myNumber: number = 20; // Buena practica.
      let otherNumber: Number = 20; // Mala practica.

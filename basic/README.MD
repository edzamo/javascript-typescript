
No vamos a instalar TypeScript de manera global, sino solo para el proyecto, ya que normalmente así se hace en mundo real. Se trabaja por proyecto.

Realicemos los siguientes pasos:

Creamos una carpeta para nuestro proyecto (el nombre que desees) e ingresamos a la misma. Mediante la terminal sería lo siguiente:
mkdir ts-project
cd tsc --version
Abrimos nuestro editor de código desde la ubicación de la carpeta del proyecto. Si usas Visual Studio Code, usando la terminal es así:
code .
Crearemos los siguientes archivos:
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

Para que funcione esta configuración debes tener instalado la siguiente extensión en tu Visual Studio Code:
Extensión EditorConfig

Necistaremos también tener creado una carpeta de nombre src dentro de nuestro proyecto
Ahora crearemos nuestro archivo package.json de manera simple desde la terminal y dentro de la ruta del proyecto:
npm init -y
Así debería estar quedando conformado nuestro proyecto previo al último paso
Archivos de configuración

Finalmente, instalemos TypeScript 😊. Desde la terminal y dentro de la ruta del proyecto, ejecuta:
npm install typescript --save-dev
Para verificar la versión instalada:

npx tsc --version


Nos ayuda a ahorrar mucho trabajo manual como transpilar archivo por archivo, indicar el target, etc.

Creando un archivo TSConfig.json
En la terminal, ubicándonos dentro del directorio en el que queremos que se cree el archivo, ejecutemos:

npx tsc --init
Nos creará automáticamente el archivo con propiedades básicas activadas:
Resultado al correr el comando: npx tsc --init

Dentro del archivo TSConfig.json podemos ver que tiene muchas propiedades comentadas (desactivadas) y de las cuales solo algunas están activadas.

Compilación en TypeScript
Nuestro código TypeScript se transpilará según las propiedades indicadas en nuestro archivo `TSConfig.json``:

npx tsc
Compilación en tiempo real
Nos puede resultar tedioso estar ejecutando el comando anterior siempre después de escribir nuestro código. Para evitar esto, podemos hacer que el compilador esté detectando cada cambio que realicemos en nuestros archivos TypeScript y haga la transpilación de inmediato:

npx tsc --watch
Proyecto
Creemos el archivo TSConfig.json en nuestro proyecto
Activamos las siguientes propiedades dentro de dicho archivo:
outDir: indicando la carpeta dist como el directorio destino de los archivos transpilados
Ejemplo de outDir

rootDir: indicamos que nuestros archivos TypeScript, los cuales serán “compilados” luego, estarán en la carpeta src
Ejemplo de rootDir

Creamos el archivo 02-demo2.ts dentro de la carpeta src con el siguiente código:
const numbers = [1,3,4];
Probemos la compilación de nuestros archivos:
npx tsc
Estructura de archivos del proyecto de TypeScript
Observaremos que los archivos transpilados se encuentran en nuestra carpeta dist.
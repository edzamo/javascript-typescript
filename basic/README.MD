
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
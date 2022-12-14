# Typescript Basic+

## Instalación de Typescript

        - cmkdir ts-project
        - cd tsc --version
        - .gitignore 
        - npm init
        - - npm init
        - npx tsc --init 
        -     "outDir": "./dist",   
        -     "rootDir": "./src",   
        - npx tsc  compila
        - npx tsc --watch

# Editor .git, 


        see https://editorconfig.org

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



Nos creará automáticamente el archivo con propiedades básicas activadas:
Resultado al correr el comando: npx tsc --init

Dentro del archivo TSConfig.json podemos ver que tiene muchas propiedades comentadas (desactivadas) y de las cuales solo algunas están activadas.


## Proyecto tsconfig

                "rootDir": "./src",    
                "outDir": "./dist",   

## Ejecution
- npx tsc --watch
-  node dist/name-ts.ts
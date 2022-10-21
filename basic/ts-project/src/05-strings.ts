(() => {
  let productTitle = 'My amazing';
  // productTitle= null=;
  productTitle = 'My amazing product changed';
  console.log('producTitle', productTitle);

  const producDescription: string = "Hola cuando uses texto y no necesites i'm";
  console.log('producDescription', producDescription);

  let variableTitulo = 'TypeScript';
  let summary = `
    title: ${variableTitulo}
    producTitle:${productTitle}
`;

console.log('summary',summary)

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

console.log('html',html)

})();

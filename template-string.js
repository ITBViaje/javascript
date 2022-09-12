const nombre = 'Leandro';
//const apellido = 'Pereira'

// Una forma de concatenar cadenas de caracteres es la siguiente:

//const nombreCompleto = nombre + ' ' + apellido;

// Utilizando el template string lo hacemos de la siguiente forma:

//const nombreCompleto1 = `${ nombre } ${ apellido }`;

//console.log (nombreCompleto);
//console.log (nombreCompleto1);

//strings multilínea
//let mensaje = `No importa quien eres en tu interior,
//tus actos son los que te definen...
//Batman`;
//console.log(mensaje);
/*
Imprime
No importa quien eres en tu interior,
tus actos son los que te definen...
Batman
*/
const operaciones = `${ 1 + 2} ' , ' ${ 5 * 7} ' , ' ${ 8/3 } ' . '`
console.log(operaciones);

function getSaludo (){
    return `Hola, ${ nombre }`
}
console.log (`Este es un texto:  ${ getSaludo(nombre) } `);
function saludar(nombre){
    return `Hola, ${ nombre }`;
}
//si comento esto: saludar = 'Fede' retorna una referencia a la función.
//console.log(saludar('Lucas'));
saludar = "Fede";
console.log(saludar);

//La forma correcta de hacerlo sería:
//const saludar1 = function (nombre){
 //   return `Hola, ${ nombre }`;
//}
// Ahora si da error porque tratamos de asignarle un nuevo valor a una constante.
//saludar1 = "Luisa"
//console.log(saludar1("Lucas"));
//console.log(saludar1);
//Funciones flecha
//const saludar2 = (nombre) {
  //  return `Hola, ${ nombre }`;
//}
//console.log(saludar2());
//const saludar2 = (nombre) => `Hola, ${ nombre }`
//console.log(saludar2('Lu'));
// Ejemplo de una función que no recibe ningún argumento sería:
//const saludar3 = () => `Hola Mundo`;
//console.log (saludar3());

const obtenerUsuario = () =>({
   idusuario: 'ABC123',
   username: 'lumar',
})
console.log(obtenerUsuario());

/*Ejercicio:
dada la siguiente función:
function obtenerUsuarioActivo(nombre){
    return {
        id: 'ABC578',
        empresa: 'Duermocracia'
    }
}*/
/*const obtenerUsuarioActivo = () => ({
    id: 'ABC578',
    empresa: 'Duermocracia'}
)

console.log(obtenerUsuarioActivo())*/
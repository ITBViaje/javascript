const persona = {
    nombre: 'Leandro',
    apellido: 'Diaz',
    edad: 35,
    direccion:{
        ciudad: 'San Martín',
        calle: 'Brasil',
        numero: 1300,
    }
}

console.log (persona);
//console.table (persona);
//console.log (persona.apellido);
//console.log (persona.direccion.numero);

const persona2 = persona;

console.log(persona2);
//Cuando hacemos esto no estamos clonando o sea haciendo una copia del objeto persona sino una 
//referencia al espacio en memoria de esta variable.
//Ejemplo:

persona2.nombre = 'Pedro';
console.log(persona2);
//Ahora imprimamos el objeto persona:
console.log(persona);
//Conclusión: esto NO se hace.
//Para crear un clon se hace con el operador SPREAD:
const persona3 = {...persona};

/*
    *Para poder obtener datos del localStorage
    *Se utiliza localStorage.getItem
*/
const nombre = localStorage.getItem( 'nombre' );
console.log( nombre );

//Para obtener un Objeto Guardado o un arreglo
const productoJSON = localStorage.getItem( 'producto' );

/*Para convertir una cadena de texto a un objeto
    *Para que esta sea exitosa
    *Tiene que tener forma de objeto o array
*/
console.log( JSON.parse( productoJSON ) );

const meses = localStorage.getItem( 'meses' );
const mesesArray = JSON.parse( meses );
console.log( mesesArray );
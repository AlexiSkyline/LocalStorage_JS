/*
    *Para poder Eliminar o Actualizar la infromacion del LocalStorage
*/
const meses = [ 'enero', 'Febrero', 'Marzo' ];
localStorage.setItem( 'meses', JSON.stringify( meses ) );

//Eliminar
localStorage.removeItem( 'nombre' );

/*
    *Actualizar un registro
    *1.-Definir lo que vamos a modificar
    *2.-Modificar La informacion
    *3.-Se vuelve autilizar setItems Para actualizarlo
*/
const mesesArray = JSON.parse( localStorage.getItem( 'meses' ) );
console.log( mesesArray );
//En este caso se modifico un array
mesesArray.push( 'Nuevo Mes' );
console.log( mesesArray );
//Actualizar la infromacion
localStorage.setItem( 'meses',JSON.stringify( mesesArray ) );

//Para limpiar todo el localStorage
// localStorage.clear();


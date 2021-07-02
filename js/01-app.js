/*
    *Para AGREGAR Infirmacion al LocalStorage
    *Se Utiliza LocalStorage.setItem
    *Para Agregar el de una sesion es *sessionStorage.setItem* 
*/
sessionStorage.setItem( 'nombre', 'Alexis' );

/*
    *Solo se puede almacenar cadenas de texto
    *Pero hay formas de gurdar objetos
*/
localStorage.setItem( 'nombre', 'Alexis' );


const producto = {
    nombre : "Monotor 24 Pulgados",
    precio : 300
}

//Para transformar un Objeto a una cadena de texto
const productoString = JSON.stringify( producto );
localStorage.setItem( 'producto', productoString );

// const meses = [ 'enero', 'Febrero', 'Marzo' ];
// const mesesString = JSON.stringify( meses );
// localStorage.setItem( 'meses', mesesString );


const meses = [ 'enero', 'Febrero', 'Marzo' ];
//Podemos tener todo en una linea
localStorage.setItem( 'meses', JSON.stringify( meses ) );

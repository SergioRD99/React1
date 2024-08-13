//Objetos - Manipulación

const producto = {
    /*key     value*/
    nombre : "Tablet",
    precio : 300,
    disponible : false
}
//no permite modificar nada 
// Object.freeze(producto)

//Permite modificar solo propiedades existentes no agregar o eliminar
Object.seal(producto)
//Rescribir un valor
producto.disponible = true

//si no existe una propiedad lo va añadir
producto.imagen = 'imagen.jpg'

// //Eliminar propiedad de un objeto
delete producto.precio

console.log(producto)
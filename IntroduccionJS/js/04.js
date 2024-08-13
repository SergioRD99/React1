//Objetos
const producto = {
    /*key     value*/
    nombre : "Tablet",
    precio : 300,
    disponible : false
}

//Distructuring a un objeto :
// const {nombre, precio, disponible} = producto
// console.log(nombre)
// console.log(precio)
// console.log(disponible)


//sin Distructuring a un objeto :
// const nombre = producto.nombre
// const precio = producto.precio
// const disponible = producto.disponible

// console.log(nombre)
// console.log(precio)
// console.log(disponible)

//Objeto Literal Enhacement: cuando se requiere retornar un objeto a otro
const Autenticado = true
const User = "Sergio"

const nuevoObjeto = {
    autenticado: Autenticado,
    usuario: User
}
console.log(nuevoObjeto)
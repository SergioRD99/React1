//Objetos - Destructuring de dos o mas objetos 
const producto = {
    /*key     value*/
    nombre : "Tablet",
    precio : 300,
    disponible : false
}

const cliente ={
    nombre :"Sergio",
    premium: true
}

//union de 2 objetos
// const carrito = {
//     cantidad : 1,
//     ...producto // spread operator
// }
// console.log(carrito)

//en este caso se une todo pero puede generar inconvenientes si las propiedades se llaman igual
const nueboObjeto ={
    ...producto,
    ...cliente 
}
console.log(nueboObjeto)

//la mejor forma de unirlos
const nuevoObjeto2 = Object.assign(producto,cliente)
// console.log(nuevoObjeto2)
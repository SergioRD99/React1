//Objetos - Destructuring de dos o mas objetos 
const producto = {
    /*key     value*/
    nombre : "Tablet",
    precio : 300,
    disponible : false
}

const cliente ={
    nombre :" Sergio",
    premium: true,
    direccion:{
        calle:"Calle Mexico"
    }
}

//para variables de objetos en las que son similiares se renombra o para ingresar a otro objeto dentro del mismo
const {nombre} = producto
const {nombre: nombreCliente, direccion: {calle} } = cliente

console.log(nombre)
console.log(nombreCliente)
console.log(calle)
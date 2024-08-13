//template string y concatenacion

const producto = "Tablet de 12 Pulgadas"
const precio = 400
const marca = "Orange"

console.log('EL producto es: '+ producto)

console.log(`El producto es: ${producto}`)

//dos formas template string mas ajustado para concatenar 
console.log(producto + "$" +precio + "Dolares, marca: "+ marca)
console.log(`${producto} $${precio} Dolares, Marca: ${marca}`)
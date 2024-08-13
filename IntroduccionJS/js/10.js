const tecnologias = ['HTML','CSS','JAVASCRIPT','REACT.JS','NODE.JS']

//Agregar datos a un arreglo
// tecnologias[5]='nest.js' no es tan bueno ya que lo puede asignar en cualquier posicion
tecnologias.push= 'Nest.js' //mejor


const nuevoArreglo = [...tecnologias,"Nest.js"]
// console.table(tecnologias)

// console.table(nuevoArreglo)

//Eliminar un dato del arreglo
// tecnologias.shift() //eliminara el primer dato siempre de un arreglo
// console.table(tecnologias)

//recorrer el arreglo y obtener ciertos datos
const tecnologias1 = tecnologias.filter(function(tech){
   if(tech !== 'HTML'){
    return tech
   }
})

// lo mismo que filter pero para modificar ciertos campos sin alterar a todo el arreglo
const tecnologias2 = tecnologias.map(function(tech){
    if(tech === 'NODE.JS'){
     return 'Nest.js'
    }
    else{
        return tech
    }
 })
 console.log(tecnologias1)
console.log(tecnologias2)

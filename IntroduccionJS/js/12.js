//Recorriendo con un for un arreglo
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js','Nest.js']

// for(let i =0; i<tecnologias.length; i++){
//     console.log(tecnologias[i])
// }

//itera sobre el mismo arreglo 
tecnologias.forEach(function(tech){
    console.log(tech)
})

// //map genera un arreglo nuevo
const arrayMap = tecnologias.map(function(tech){
    return tech
})

// console.log(arrayMap)

for(let tech of tecnologias){
    console.log(tech)
}



const tecnologias =['HTML','CSS', 'JavaScript','React.js','Node.js']
const numeros = [10,20,30]

//Arrow - Filter
// const ejemploFilter = (tech) => console.log(tech)
// const nuevoArray2 = tecnologias.filter(ejemploFilter)

// const nuevoArray2 = tecnologias.filter((tech) => tech !== 'HTML')
// const resultado = numeros.filter((tech) => tech !== 10)

// console.log(nuevoArray2)
// console.log(resultado)

//Includes
// const resultado2 = tecnologias.includes('CSS')
// console.log(resultado2)

//Filter
// const nuevoArray = tecnologias.filter(function (tech) {
//     console.log(tech)
// })

//Some - Devuelve si al menos uno cumple la condicion
// const resultado = numeros.some(numeros => numeros > 15)
// if(resultado){
//     console.log('Si hay elementos')
// }else{
//    console.log('No hay elementos') 
// }

//Find - Devuelve el primer elemento que cumple una cpndicion
// const resultado = numeros.find(numeros => numeros > 15)


//Every - Retorna true o false si todos cumplen la condicion
// const resultado = numeros.every(numeros => numeros >15)

//Reduce - Retorna un acumulado del total
const resultado = numeros.reduce((total, numero)=>{
    console.log(total)
    console.log(numero)

    return total +numero
},0)

console.log(resultado)
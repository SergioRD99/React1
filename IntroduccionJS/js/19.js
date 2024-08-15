const numero1 = 20
const numero2 = "20"

/**
 *  == (comparador no estricto)
 * === (Comparador estricto)
 */

//en estos casos va a marcar igual tanto el numero 1 y 2 en ciertos casos es mejor usarl el condicional estricto
//para que compare aparte el tipo de dato 
if(numero1 == numero2){
    console.log('Si son iguales')
}else{
    console.log('No son iguales')
}

if(numero1 === numero2){
    console.log('Si son iguales')
}else{
    console.log('No son iguales')
}
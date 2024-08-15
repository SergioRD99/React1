//Operador ternario
const Auth = true

const saldo = 1000
const pagar = 500
const tarjeta = true;


if(Auth){
    console.log('Usuario autenticado')
}else{
    console.log('No Autenticado ir a login')
}

Auth ? console.log('Usuario autenticado'):console.log('No Autenticado ir a login')

saldo > pagar ? console.log('Puedes pagar') : console.log('No puedes pagar')
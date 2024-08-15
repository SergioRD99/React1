//And y OR
const saldo = 1000
const pagar = 500
const tarjeta = true;

/*
Logical Or y Logical AND
|| OR - Al menos una se cumple
&& And - Revisa que todos se cumplan
 */

if(saldo > pagar && tarjeta){
    console.log('Puedes pagar')
}else{
    console.log('No tienes dinero')
}
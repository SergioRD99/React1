// Optional chaining ' ? '

const alumno = {
    nombre: 'Juan',
    clase: 'Progamacion 1',
    aporbado: true,
    examenes:{
        examen1: 90
    }
}

console.log(alumno.examenes?.examen1)

console.log('Despues de alumno')
// Nullish coalscing operator (??)
const pagina = 10 ?? 1
console.log(pagina)
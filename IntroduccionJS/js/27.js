//Performance y multuple Aync Await
const url = 'https://jsonplaceholder.typicode.com/comments'
const ur2 = 'https://jsonplaceholder.typicode.com/todos'

const consultarAPI = async () =>{
    try {
        const inicio = performance.now()

        const responese = await fetch(url)
        if(!responese.ok){
            throw new Error('Hubo un error')
        }
        const data = await responese.json();
        console.log(data)

        const fin = performance.now()   

        console.log(`El resultado es: ${fin - inicio} ms`)
    } catch (error) {
        console.log(error)
    }
  }

  const consultarAPI2 = async () =>{
    try {
        const inicio = performance.now()

       const [responese, responese2] = await Promise.all([fetch(url),fetch(ur2)])

       const [data, data2] = await Promise.all([responese.json(),responese2.json()])

       console.log(data)
       console.log(data2)

        const fin = performance.now()   

        console.log(`El resultado es: ${fin - inicio} ms`)
    } catch (error) {
        console.log(error)
    }
  }
//   consultarAPI()
  consultarAPI2()
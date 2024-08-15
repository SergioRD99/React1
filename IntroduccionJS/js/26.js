// Fetch API con Async / Await

const url = 'https://jsonplaceholder.typicode.com/comments'

// fetch(url)
//   .then((response)=>{
//     if(response.ok){
//         return response.json()
//     }
//     throw new Error('Hubo un error...')
//   })
//   .then(data => console.log(data))
//   .catch(error=> console.log(error.message))
  

  const consultarAPI = async () =>{
    try {
        const responese = await fetch(url)
        if(!responese.ok){
            throw new Error('Hubo un error')
        }
        const data = await responese.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
  }

  consultarAPI()
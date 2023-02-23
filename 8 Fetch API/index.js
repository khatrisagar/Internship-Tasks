// fetch("http://localhost:8999/")
// .then((response)=> response.json())
// .then((data)=>{
//     console.log(data.lName)
// })

const fn =  async() =>{
   let dt = await fetch("http://localhost:9999/")
   let data = await dt.json()
   console.log(data)
}
fn()


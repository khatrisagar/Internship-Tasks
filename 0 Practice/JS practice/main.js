// const pClick =document.querySelector('p')

// pClick.addEventListener('click', updateName)

// function updateName(){
//     const name = prompt("Enter Name: ")
//     pClick.textContent = `${name}`
// }



let val1 =  [ 'sawf', 'sawf2' ]
let val2 = "erthd"

// val2.forEach((data) =>{
//     console.log(data)
// })
console.log(typeof(val1))
if(typeof val2 != "string"){
    for(let i = 0; i<val2.length; i++){
        console.log( val2[i])
    }
}
else{
    console.log(val2)
}
// console.log(typeof val1)
// console.log(typeof val2)
let date =  new Date()
console.log(date)

console.log(date.toLocaleDateString())
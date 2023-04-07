// const pClick =document.querySelector('p')

// pClick.addEventListener('click', updateName)

// function updateName(){
//     const name = prompt("Enter Name: ")
//     pClick.textContent = `${name}`
// }



// let val1 =  [ 'sawf', 'sawf2' ]
// let val2 = "erthd"

// val2.forEach((data) =>{
//     console.log(data)
// })
// console.log(typeof(val1))
// if(typeof val2 != "string"){
//     for(let i = 0; i<val2.length; i++){
//         console.log( val2[i])
//     }
// }
// else{
//     console.log(val2)
// }
// // console.log(typeof val1)
// // console.log(typeof val2)
// let date =  new Date()
// console.log(date)

// console.log(date.toLocaleDateString())
// let jsMap = new Map()

// jsMap.set("a","aa")
// jsMap.set("b","bb")

// console.log(jsMap.get("b"))

// console.log(jsMap)
// console.log(jsMap.size)

// jsMap.clear()

// const jsSet = new Set()
// jsSet.add("a","aa")


// console.log(jsSet)


// let jsObj = {}

// jsObj.key1 = "Hello"
// jsObj.key2 = "Sagar"

// jsObj["key3"] = "SS"

// console.log(jsObj)

// let strName = "meet"
// let obj = {}

// for(ele of strName){
//     if(obj[ele]){
//         obj[ele]++;
//     }
//     else{
//         obj[ele] = 1;
//     }
// }

// console.log(obj)


// js promises


// function print(){
    
//  }

// let data =  new Promise(async(resolve,reject)=>{
    
//     console.log("hjello")
// })


// // sql parameterize query
// ('SELECT * FROM `basic_info` WHERE `fk_emp_id` = ?', [`${req.session.id}`])


function promiseFn() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
 


async function call(){
    let result = await promiseFn()
    console.log(result)
}
call()  



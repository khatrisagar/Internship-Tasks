let user = {"name": "sagar", "age": 10}

console.log(user.age)

// all the types in the lowercase
let s: string = "10"
 
console.log(s)

// number

let id: number = 1 

// boolean

let isActive: boolean = true


// type inference

// it automatically detect we Are try to assign number
let userId = 1
// userId = ""   error

//  it takes any default if we didn't define type
// any not checking type of that variable
let c : boolean

function check(){
    return true
}

c = check()



function addVal(n: number):number{
    return n+1;
}

addVal(5)


// type aliases 

// type User = {
//     name: string,
//     age: number,
//     isActive: boolean
// }

// function createUser(user: User){
//     return { name , age, isActive}
// }

// createUser({name: "sgjsakjd", age: 12, isActive: false})

// keyword :--> readonly
// ?
// usecase scenario of type

// if we used this readonly keyword we will decline it to change...
type User = {
    readonly _id: string
    name: string,
    age: number,
    isActive: boolean,
    creditcardDetails ?: number   // with using ? this makes this field optional
}

type cardNumber = {
    cardnumber:  number
}

type cardDate =  {
    carddate: string
}
// & is used to combining other objects 
//  created a new object type based on the existing once
type cardDetails = cardNumber & cardDate & {
    cvv: number
}



let myUser: User  = {
    _id : "232",
    name: "test",
    age: 21,
    isActive: true
}

// myUser._id = "49494"  // not able to change due to readonly property
myUser.name=  "test2"




export {}


















//  with the use of | create a combine datatype

let score: number | string;

// score = 10
// score = "10"

// score.toLocaleLowerCase()


type User =  {
    name:  string,
    id:    string | number
}

type Admin = {
    name: string
}

let userAccount : User | Admin = {name:  "hello" }

checkId(3)
checkId("3")

function checkId(id: number | string){
    if(typeof id === "string"){
        id.toLocaleString()
    }
    // id.toLocaleString()
}


const newArr: number[] = [1,2,3,4,5]
const newArr2: string[] = [ "4", "5", "6"]
const newArr3: (string | number)[]  = [1,2,3,4,5,"4","5","6"]



let pi:3.14

// pi = 3.11 // it throws an err







export {}
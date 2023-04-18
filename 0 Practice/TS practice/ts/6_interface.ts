interface User{
    id: number,
    name: string
    // startTrial: () => string
    startTrial(): string
}

const sagar:User = {id: 22, name:"abc", startTrial:() =>{
    return "this from trial"
}}

// inheritnce in interface
// interface Admin extends User{

// }


// adding more values is possible in interface

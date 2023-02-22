const express = require('express')
const app = express()
const PORT =  6999 
const connection = require('./connection')
const getData =  require('./getData')
const generateView = require('./generateView')


app.set('view engine', 'ejs')

let fnList = [
    { id:1 , type:"radio"},
    { id:2 , type:"checkbox"},
    { id:3 , type:"dropdown"},
    { id:4 , type:"dropdown"},
    { id:5 , type:"dropdown"},
    { id:6 , type:"dropdown"},
    { id:7 , type:"dropdown"},
    { id:8 , type:"dropdown"},
    { id:9 , type:"dropdown"},
    { id:10 , type:"checkbox"},
]
var abc;
var valArr = ""

// function make(id,type){
//     generateView(id,type).then(dataVal =>{
//         valArr += dataVal

//     })
// }
app.get('/', async (req,res)=>{


    await new Promise((resolve, reject)=>{
        let i = 1
        fnList.forEach(data=>{
            generateView(data.id,data.type).then(dataVal =>{
                valArr += dataVal
            })
        })
        resolve(valArr)
        abc=valArr;
        valArr =""
    })
res.render('index', {abc})
})



app.listen(PORT, ()=>[
    console.log(`Server Listening on PORT: ${PORT}`)
])

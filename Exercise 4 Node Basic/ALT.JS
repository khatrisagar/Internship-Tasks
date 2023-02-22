const mysql = require('mysql2')
const express = require('express')
const app = express()
const PORT  = 5000

app.use(express.json())
let connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'root',
    database: 'studentMaster'

});


app.get('/',(req,res)=>{
    
    connection.connect(function(err){
        if(err) throw err;
        console.log("connected with MySQL")
        connection.query("SELECT * FROM studentData", function(err,result){
            if(err) throw err;
            res.send(result)

        })
    })
})

app.post('/addstudent',(req,res) =>{
    connection.connect(function(err){
        if(err) throw err;
        console.log("Connection of Post MySQL")
        // console.log(req.body)
        connection.query(`Insert into studentData(FirstName,LastName,ContactNumber,Email,City,CollegeName)value("${req.body.FirstName}","${req.body.LastName}","${req.body.ContactNumber}","${req.body.Email}","${req.body.City}","${req.body.CollegeName}")`)
        res.send("Post called")
    })
})



app.listen(PORT, ()=>{
    console.log(`Listening on Port: ${PORT}`)
})




const express = require("express")
const PORT =  1999
const app = express()
const getData =  require("./getData")
const generateData =  require("./generatedata")

app.set('view engine', 'ejs')

app.get('/', function(req,res){
    tableName = "basic_info"
    tableFields = ["first_name", "last_name", "email","contact"]
    let tableData = generateData(tableName,tableFields)
    res.render('index', {tableData})
})







app.listen(PORT, ()=>{
    console.log(`Server Listening on PORT: ${PORT}`)
})
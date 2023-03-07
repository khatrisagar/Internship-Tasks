const express = require('express')
const app = express()
const PORT = 9999
const connection = require('./database')
const route = require('./routes/home')



app.use('/',route)
app.set('view engine', 'ejs')
app.use(express.static('public'))




app.listen(PORT, ()=>{
    console.log(`Server Listening on PORT : ${PORT}`)
})
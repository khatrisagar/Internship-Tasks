const express = require('express')
const app = express()
const PORT =  9999
const home =  require('./routes/home')


//app.method(path, handler)
app.use('/',home)
app.use(express.static('public'))

app.set('view engine', 'ejs');



app.listen(PORT, ()=>{
    console.log(`Listening on Port: ${PORT}`)
})
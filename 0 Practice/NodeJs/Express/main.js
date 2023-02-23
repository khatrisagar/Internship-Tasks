const express = require('express')
const app = express()
app.set('view engine', 'ejs')

app.get('/' ,function(req,res){
    res.render('template',{name: "Sagar"})

})

app.listen(5000,()=>{
    console.log("online")
})
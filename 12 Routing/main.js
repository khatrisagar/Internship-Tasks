const express = require('express')
const app = express()
const PORT =  9999
const home =  require('./routes/home')

//app.method(path, handler)
// app.use('/',home)

// global middleware
app.use(logger)
app.use(express.static('public'))

app.set('view engine', 'ejs');

// app.get('/main', (req,res)=>{
//     res.send("main page")
// })

// if we add a next in main we can accees a middleware inside a main page  
app.get('/main', (req,res, next)=>{
    res.send("main page")
    next()
})

// it runs line line we can't access it in main page
// app.use(logger)


app.get('/Test', (req,res)=>{
    res.send("Test page")
})
// pass with path and function in endpoint
app.get('/user', auth, (req,res)=>{
    res.send("User page")
})

function logger(req,res,next){
    next()
    console.log("Log for", req.originalUrl)
}

// single endpoint middleware
function auth(req,res,next){
    if(req.query.admin === 'true'){
        // pass variables to other sections from middleware
        req.admin =  true
        next()
        console.log("auth")
        return
    }
    else{
        res.send("Not authenticated")
    }
}

app.listen(PORT, ()=>{
    console.log(`Listening on Port: ${PORT}`)
})
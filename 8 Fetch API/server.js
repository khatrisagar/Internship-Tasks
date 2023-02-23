const express = require('express')
const app =  express()
const dfile =  require('./data.json')

app.get('/', (req,res)=>{
    res.json(dfile)
})
app.listen(8999, ()=>{
    console.log(`listening on port: 9999`)
})
const express = require('express')
const router  = express.Router()

router.get('/',(req,res)=>{
    res.send("Hello Home")
})

router.get('/home',(req,res)=>{
    res.send("Hello Home2")
})

router.get('/*',(req,res)=>{
    res.send("Error 404")
})


module.exports = router
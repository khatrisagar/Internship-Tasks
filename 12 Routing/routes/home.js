const express = require('express')
const router  = express.Router()

router.get('/',(req,res)=>{
    res.send("Hello Home")
})

router.get('/contact',(req,res)=>{
    res.send("This is contact")
})

router.get('/*',(req,res)=>{
    res.send("Error 404")
})


module.exports = router
const express = require('express')
const router = express.Router()
const cookieParser = require("cookie-parser");

router.use(cookieParser());

router.get('/logout', (req,res)=>{
    res.clearCookie("userToken")
    res.redirect('/login')
})

module.exports= router;
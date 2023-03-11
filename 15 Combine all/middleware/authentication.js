const express =  require('express')
const router =  express.Router()

const cookieParser = require("cookie-parser");
const jwt = require('jsonwebtoken');
router.use(cookieParser());

const authenticate = (req,res,next) =>{
    const token = req.cookies.userToken || "Null"
      if(token != "Null"){ 
         try{
            const decoded = jwt.verify(token, process.env.Token_key);
                if(decoded){
                   next()
                }
         }
         catch(e){
            res.clearCookie("userToken")
            res.redirect('/login')
         }
      }
      else{
         res.redirect('/')
      }
}

module.exports = authenticate
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')
const connection = require('../database')
const util =  require('util');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const cookieParser = require("cookie-parser");

router.use(bodyParser.urlencoded({extended:true}))
router.use(bodyParser.json())
router.use(cookieParser());

router.get('/login', (req,res)=>{
    try {
        const token = req.cookies.userToken || "Null"
        if(token == "Null"){
            res.render('login', {errMessage:""})
            
        }
        else{
            res.redirect('/') 
        }
      } 
    catch (e) {
        console.log(`error in get login`,e)
    }
})

router.post('/login', async (req,res, next)=>{

    try{
        
        let email =  req.body.useremail;
        let password =  req.body.password;

        const query =  util.promisify(connection.query).bind(connection)

        let userData = await query(`select * from users where user_email = "${email}"`)
        if(userData.length !== 0){
            let encryptedPass = userData[0].user_password
            let val = await bcrypt.compare(password, encryptedPass)
            if(val){
                const userToken =  jwt.sign({userData},process.env.Token_key);
                res.cookie("userToken", userToken)
                res.redirect('/')
            }
            else{
                res.render('login',{errMessage:"You Entered a Wrong Email or Password"})
            }

        }
        else{
            res.render('login',{errMessage:"You Entered a Wrong Email or Password"})
        }
    }
    catch(e){
        console.log(`error in login`, e)
    }
})
module.exports= router;
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

router.get('/register', (req,res)=>{
    res.render('registration')
})

router.get('/login', (req,res)=>{
    res.render('login')
})


router.post('/register', async (req,res)=>{
    try{
        let name = req.body.username
        let email = req.body.useremail
        let password = req.body.password

        if(!(name && email && password)){
            res.status(400).send("Empty fields not allowed")
        }

        let encryptedPass = await bcrypt.hash(password, 10);
        console.log(`${req.body}`)
        console.log(`${req.body.username}`)
        console.log(`${encryptedPass}`)

        const query =  util.promisify(connection.query).bind(connection)

        const registerUser = query(`insert into users(user_name, user_email, user_password) value("${name}","${email}","${encryptedPass}")`)
        
        res.send('registeration completed click here to <a href="/login">login<a>')
    }

    
    catch(e){
        console.log(`Error From home.js `,e)
    }
})

// router.get('/',(req,res)=>{
//     res.send('registeration completed click here to <a href="/login">login<a> ')
    
// })

router.post('/login', async (req,res)=>{

    try{
        
        let email =  req.body.useremail;
        let password =  req.body.password;

        const query =  util.promisify(connection.query).bind(connection)

        let userData = await query(`select * from users where user_email = "${email}"`)
        let encryptedPass = userData[0].user_password
            // console.log(encryptedPass)

        if(await bcrypt.compare(password, encryptedPass)){
            const userToken =  jwt.sign({userData},process.env.Token_key);
            // window.localStorage.setItem("userToken", userToken);
            res.cookie("userToken", userToken)
            res.redirect('/home')
        }
        else{
            res.send("You Entered a Wrong Password")
        }
    }
    catch(e){
        console.log(`error in login`, e)
    }
})

router.get('/home', (req,res)=>{
    try {
        // if(req.body.userToken == undefined){
            const token = req.cookies.userToken || "Null"
            
        // }
        if(token != "Null"){
            
            const decoded = jwt.verify(token, process.env.Token_key);
            const data = decoded.userData;
            res.render('home',{data})

        }
        else{
            res.send('<h1>Click Here to <a href="/login">Login</a> First</h1>')
        }
      } 
      catch (e) {
        console.log(`error in home`,e)
      }
})

router.get('/logout', (req,res)=>{
    res.clearCookie("userToken")
    res.redirect('/login')
})


module.exports= router;
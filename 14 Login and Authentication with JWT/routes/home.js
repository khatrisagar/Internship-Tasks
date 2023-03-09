const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')
const connection = require('../database')
const util =  require('util');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const cookieParser = require("cookie-parser");
const { v4: uuidv4 } = require('uuid');
// router.use(express.static('/assets/css'))

router.use(bodyParser.urlencoded({extended:true}))
router.use(bodyParser.json())
router.use(cookieParser());

router.get('/register', (req,res)=>{
    try {   
        const token = req.cookies.userToken || "Null"
        if(token == "Null"){
            res.render('registration')
        }
        else{
            res.redirect('/') 
        }
      } 
      catch (e) {
        console.log(`error in get register`,e)
      }
    
})

router.get('/login', (req,res)=>{
    try {
        const token = req.cookies.userToken || "Null"
        if(token == "Null"){
            res.render('login')
            
        }
        else{
            res.redirect('/') 
        }
      } 
    catch (e) {
        console.log(`error in get login`,e)
    }
})


router.post('/register', async (req,res)=>{
    try{
        let name = req.body.username
        let email = req.body.useremail
        let password = req.body.password
        let activationCode = uuidv4()

        if(!(name && email && password)){
            res.status(400).send("Empty fields not allowed")
        }

        let encryptedPass = await bcrypt.hash(password, 10);
        console.log(`${req.body}`)
        console.log(`${req.body.username}`)
        console.log(`${encryptedPass}`)

        const query =  util.promisify(connection.query).bind(connection)

        const registerUser = query(`insert into users(user_name, user_email, user_password, activation_code) value("${name}","${email}","${encryptedPass}", "${activationCode}")`)
        
        res.render('activation', {userEmail:`${email}`, activationCode:`${activationCode}` })
    }

    
    catch(e){
        console.log(`Error From home.js `,e)
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
                // console.log(encryptedPass)
            let val = await bcrypt.compare(password, encryptedPass)
            if(val){
                const userToken =  jwt.sign({userData},process.env.Token_key);
                res.cookie("userToken", userToken)
                res.redirect('/')
            }
        }
        else{
            res.send("hh") 
        }
    }
    catch(e){
        console.log(`error in login`, e)
    }
})

router.get('/',async (req,res)=>{
    try {
        const query =  util.promisify(connection.query).bind(connection)
        const token = req.cookies.userToken || "Null"
        if(token != "Null"){       
            const decoded = jwt.verify(token, process.env.Token_key);
            const data = decoded.userData;
            let val = await query(`select * from users where user_email = "${data[0].user_email}"`)
                console.log("val",val[0].is_activated) 
                console.log("val",val[0].user_email) 
                if(val[0].is_activated === 1){
                    res.render('home',{data})
                }else if(val[0].is_activated === 0){
                    res.render('activation',{userEmail: val[0].user_email, activationCode: val[0].activation_code})
                }
        }
        else{
            res.render('info', {data:`You are not Logged in Right Now Click Below to login First`})
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

router.get('/verify', async(req,res)=>{
    const query =  util.promisify(connection.query).bind(connection)
    let email = req.query.userEmail;
    console.log(email)
    let val = await query(`select * from users where user_email = "${email}"`)
    console.log(val.length)
    if( val.length === 0 ){
        res.json({"match":"no"})
    }
    else if(val.length !== 0 ){
        res.json({"match":"yes"})
    }
})

router.get('/verifyLogin', async(req,res)=>{
    const query =  util.promisify(connection.query).bind(connection)
    let email = req.query.userEmail;
    let val = await query(`select * from users where user_email = "${email}"`)
    console.log(val.length)
    if( val.length === 0 ){
        res.json({"result":"no"})
    }
    else if(val.length !== 0 ){
        res.json({"result": val})
    }
})

router.get('/activate', async(req,res)=>{
  let userEmail = req.query.userEmail
  let activationCode = req.query.activationCode

  const query =  util.promisify(connection.query).bind(connection)
  let val = await query(`update users set is_activated = 1 where user_email = "${userEmail}" and activation_code ="${activationCode}"`)
  res.redirect('/')
})


module.exports= router;
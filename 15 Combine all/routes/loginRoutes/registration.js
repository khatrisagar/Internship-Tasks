const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const connection = require('../../database')
const bcrypt = require('bcrypt')
const util =  require('util');
const cookieParser = require("cookie-parser");
const { v4: uuidv4 } = require('uuid');

router.use(bodyParser.urlencoded({extended:true}))
router.use(bodyParser.json())
router.use(cookieParser());

router.get('/register', (req,res)=>{
    try {   
        const token = req.cookies.userToken || "Null"
        if(token == "Null"){
            res.render('login/registration')
        }
        else{
            res.redirect('/') 
        }
      } 
      catch (e) {
        console.log(`error in get register`,e)
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

        const registerUser = await query(`insert into users(user_name, user_email, user_password, activation_code) value("${name}","${email}","${encryptedPass}", "${activationCode}")`)

        res.render('login/activation', {userEmail:`${email}`, activationCode:`${activationCode}` })
    }

    
    catch(e){
        console.log(`Error From home.js `,e)
    }
})

module.exports= router;
const express = require('express')
const router = express.Router()
const connection = require('../database')
const util =  require('util');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const cookieParser = require("cookie-parser");
var nodemailer = require('nodemailer');
const mailer = require('../controllers/sendmail')

router.use(cookieParser());


router.get('/',async (req,res)=>{
    try {
        const query =  util.promisify(connection.query).bind(connection)
        const token = req.cookies.userToken || "Null"
        if(token != "Null"){       
            const decoded = jwt.verify(token, process.env.Token_key);
            const data = decoded.userData;
            let val = await query(`select * from users where user_email = "${data[0].user_email}"`)
                if(val[0].is_activated === 1){
                    res.render('home',{data})
                }else if(val[0].is_activated === 0){

                    // send email
                    res.render('activation',
                    {
                        displayMsg: "Your Account is not activated Currently Click Below Get Activation Link On YourEmail Address", 
                        userEmail: val[0].user_email, 
                        activationCode: val[0].activation_code
                    })

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



module.exports= router;
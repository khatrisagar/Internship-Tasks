const express = require('express')
const router = express.Router()
const mailer = require('../controllers/sendmail')

router.get('/sendlink', async(req,res)=>{
    let userEmail = req.query.userEmail
    let activationCode = req.query.activationCode

    mailer.sendMail(userEmail,activationCode)
    res.json( {
            displayMsg: `Successfully Sent link on ${userEmail}`, 
            userEmail: userEmail,
            activationCode: activationCode
    })
})
module.exports= router;  

const express = require('express')
const router = express.Router()
const connection = require('../../database')
const util =  require('util');
const bcrypt = require('bcrypt')

router.get('/update/:userId', async(req,res)=>{
    try{
        const userId = req.params.userId

        const query =  util.promisify(connection.query).bind(connection)
        let userData = await query(`select * from users where user_id = ${userId}`)
        
        res.render('login/updateUser', {userData})
    }
    catch(e){
        console.log('error in update user get',e)
    }
})

router.post('/update/:email', async(req,res)=>{
    try{
        let name = req.body.username
        let email = req.params.email
        let oldPass = req.body.password
        let newPass = req.body.password2

        const query =  util.promisify(connection.query).bind(connection)
        let userData = await query(`select * from users where user_email = "${email}"`)

        
        
        let encryptedPass = userData[0].user_password
        let val = await bcrypt.compare(oldPass, encryptedPass)
        
        if(val){
            let newEncryptedPass = await bcrypt.hash(newPass, 10);
            let val = await query(`update users set user_name = "${name}", user_password = "${newEncryptedPass}" where user_email = "${email}"`)
            // res.render('/', {dispalayMsg:"User Profile Updated"})
            res.redirect('/')
        }
        else{
            res.send("Wrong Credintals or Info")
        }
    }
    catch(e){
        console.log(`error in update user post`,e)
    }
})


module.exports = router
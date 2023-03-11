const express = require('express')
const router = express.Router()
const connection = require('../../database')
const util =  require('util');





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
module.exports= router;
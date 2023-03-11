const express = require('express')
const router = express.Router()
const connection = require('../database')
const util =  require('util');

router.get('/activate', async(req,res)=>{
    let userEmail = req.query.userEmail
    let activationCode = req.query.activationCode
  
    const query =  util.promisify(connection.query).bind(connection)
    let val = await query(`update users set is_activated = 1 where user_email = "${userEmail}" and activation_code ="${activationCode}"`)
    res.redirect('/')
  })
  module.exports= router;  
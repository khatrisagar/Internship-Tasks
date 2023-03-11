const express =  require('express')
const router = express.Router()

router.get('*',(req,res)=>{
    res.render('Errors/404')
})
module.exports = router

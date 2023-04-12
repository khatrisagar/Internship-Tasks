const express= require("express")
const app =  express()
const connection =  require("./database")
const util =  require("util")
const bodyParser =  require('body-parser')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',async(req,res)=>{
    const query =  util.promisify(connection.query).bind(connection)
    
    let listData = await query(`select * from users`)
    
    res.render('dynamicTable/list', {listData})
})

app.get('/update', async(req,res)=>{
    const query =  util.promisify(connection.query).bind(connection)
    const userId = req.query.userId
    let updateData =  await query(`update users set firstname = "${req.query.firstname}", lastname="${req.query.lastname}",state="${req.query.state}",city="${req.query.city}",contact="${req.query.contact}" where user_id =${userId}`)
    res.end()

})

app.post('/updateAll', async(req,res)=>{
    const query =  util.promisify(connection.query).bind(connection)
    const userId = req.body.userIdArr
    for(let i =0; i< userId.length; i++){
        await query(`update users set firstname = "${req.body.firstNameArr[i]}", lastname="${req.body.lastNameArr[i]}",state="${req.body.stateArr[i]}",city="${req.body.cityArr[i]}",contact="${req.body.contactArr[i]}" where user_id =${userId[i]}`)

    }
    res.end()

})

app.get('/insert', async (req,res)=>{  
    const query =  util.promisify(connection.query).bind(connection)
    let insertData =  await query(`insert into users(firstname,lastname,state,city,contact)values("${req.query.firstname}","${req.query.lastname}","${req.query.state}","${req.query.city}","${req.query.contact}")`)
    res.end()
})

app.get('/delete', async(req,res)=>{
    const query =  util.promisify(connection.query).bind(connection)
    let deleteData =  await query(`delete from users where user_id = ${req.query.userId} `)
    res.end()
})
module.exports = app
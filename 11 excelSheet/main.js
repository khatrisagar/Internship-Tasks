const express= require("express")
const app =  express()
const PORT = 9999
const connection =  require("./database")
const util =  require("util")
const bodyParser =  require('body-parser')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',async(req,res)=>{
    const query =  util.promisify(connection.query).bind(connection)
    
    let listData = await query(`select * from users`)
    
    res.render('list', {listData})
})

app.get('/update', async(req,res)=>{
    const query =  util.promisify(connection.query).bind(connection)
    const userId = req.query.userId
    let updateData =  await query(`update users set firstname = "${req.query.firstname}", lastname="${req.query.lastname}",state="${req.query.state}",city="${req.query.city}",contact="${req.query.contact}" where user_id =${userId}`)
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
})

app.listen(PORT, ()=>{
    console.log(`server listening on port: ${PORT}`)
})
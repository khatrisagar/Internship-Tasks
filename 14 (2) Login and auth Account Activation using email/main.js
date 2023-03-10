const express = require('express')
const app = express()
const PORT = 9999

const homeRoute = require('./routes/home')
const registrationRoute = require('./routes/registration')
const loginRoute = require('./routes/login')
const logoutRoute = require('./routes/logout')
const verifyRoute = require('./routes/verify')
const activationRoute = require('./routes/activation')
const sendLinkRoute = require('./routes/sendlink')



app.use('/',homeRoute)
app.use('/',registrationRoute)
app.use('/',loginRoute)
app.use('/',logoutRoute)
app.use('/',verifyRoute)
app.use('/',activationRoute)
app.use('/',sendLinkRoute)

app.set('view engine', 'ejs')
app.use(express.static('assets'))




app.listen(PORT, ()=>{
    console.log(`Server Listening on PORT : ${PORT}`)
})
const express = require('express')
const app = express()
const PORT = 9999

// routes
const homeRoute = require('./routes/loginRoutes/home')
const registrationRoute = require('./routes/loginRoutes/registration')
const loginRoute = require('./routes/loginRoutes/login')
const logoutRoute = require('./routes/loginRoutes/logout')
const verifyRoute = require('./routes/loginRoutes/verify')
const activationRoute = require('./routes/loginRoutes/activation')
const sendLinkRoute = require('./routes/loginRoutes/sendlink')
const updateUserRoute = require('./routes/loginRoutes/updateUser')
const allTaskRouter = require('./routes/loginRoutes/alltask')
const jobApplicationView = require('./routes/Job Application Form/main')
const dynamictableView = require('./routes/dynamicTable/main')
const searchingView = require('./routes/searching/main')
const errorView = require('./routes/Errors/pagenotfound')

// middleware
const authenticate = require('./middleware/authentication')


app.use('/',homeRoute)
app.use('/',registrationRoute)
app.use('/',loginRoute)
app.use('/',logoutRoute)
app.use('/',verifyRoute)
app.use('/',activationRoute)
app.use('/',sendLinkRoute)
app.use('/',updateUserRoute)
app.use('/',allTaskRouter)
app.use('/job', authenticate,jobApplicationView)
app.use('/dynamictable',authenticate,dynamictableView)
app.use('/searching',authenticate,searchingView)
app.use('/public', authenticate)




app.set('view engine', 'ejs')
app.use(express.static('assets'))

// error View
app.use('/',errorView )

app.listen(PORT, ()=>{
    console.log(`Server Listening on PORT : ${PORT}`)
})
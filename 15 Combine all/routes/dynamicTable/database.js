const mysql = require("mysql2")

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database: 'excelview'
})

connection.connect(function(err){
    if (err) throw err
    console.log("Connected with MySQL Dynamictable")
})

module.exports = connection
const mysql = require('mysql2')


const connection =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'generate_table'
})

connection.connect((err)=>{
    if (err) throw err
    console.log("connected with MySQL")
})
 
module.exports = connection
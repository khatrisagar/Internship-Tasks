const mysql =  require('mysql2')

let connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database: "login"
})

connection.connect((err)=>{
    if(err) throw err;
    console.log("Connected with MySql Login and registration")
})

module.exports = connection
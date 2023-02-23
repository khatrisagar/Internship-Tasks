const mysql =  require("mysql2")

const connection = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "root",
    database: "function_components"
})
connection.connect(function(err){
    if(err) return err;
    console.log("Connected With MySQL Database")
})


module.exports = connection
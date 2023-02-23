// const http = require('http')
// const fs = require('fs')
// let d = date.now()
// let date_obj = new Date(d)

// http.createServer(function(req,res){


//     fs.readFile('abc.txt', function(err,data){
//         res.write(date_obj.getDate())
//         res.end()
//     })
// }).listen(5000)


const date = require('date-and-time')
  
const now  =  new Date();
  

const value = date.format(now,'YYYY/MM/DD HH:mm:ss');
  
console.log("current date and time : " + value)
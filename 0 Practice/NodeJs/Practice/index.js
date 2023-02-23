const http = require('http')
const fs = require('fs')
const port = 5000
const uc = require('upper-case');

// fs.appendFile('abc.txt','Hey everyone', function(err){
//     if(err) throw err;
//     console.log("saved")
// })

http.createServer(function(req,res){
    fs.readFile('abc.txt', function(err,data){
        res.writeHead(200,{'content-type':'text/plain'})
        res.write(data)
        res.end()
    })



}).listen(port,() => {
    console.log(`Listening on PORT : ${port}`)
});

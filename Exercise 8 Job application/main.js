const express =require("express")
const app = express();
const mysql =  require("mysql2")
const PORT = 9999


app.set('view engine', 'ejs')

let connection  =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'job_application_form'

})
connection.connect(function(err){
    if(err) throw err
    console.log("Connected with MySQl")
})



app.get("/", async (req,res) =>{
    let relationData = ""
    let stateData = ""
    let genderData = ""
    let uniData = ""
    let courseData = ""
    let techData =""
    let locationData = ""
    let deptData = ""
    try{
        
        await new Promise((resolve, reject)=>{
            connection.query(`select select_master.select_name, option_master.select_id, option_master.option_value from select_master left join option_master on select_master.select_id =  option_master.select_id having option_master.select_id = 1;`, function(err,data){
                if(err) return reject(err)
                resolve(data)
                relationData = data
            })
        })
        await new Promise((resolve, reject)=>{
            connection.query(`select select_master.select_name, option_master.select_id, option_master.option_value from select_master left join option_master on select_master.select_id =  option_master.select_id having option_master.select_id = 2;`, function(err,data){
                if(err) return reject(err)
                resolve(data)
                stateData = data
            })
        })
        await new Promise((resolve,reject)=>{
            connection.query(`select select_master.select_name, option_master.select_id, option_master.option_value from select_master left join option_master on select_master.select_id =  option_master.select_id having option_master.select_id = 3;`, function(err,data){
                if(err) return reject(err)
                resolve(data)
                genderData = data
            })
        })
        await new Promise((resolve,reject)=>{
            connection.query(`select select_master.select_name, option_master.select_id, option_master.option_value from select_master left join option_master on select_master.select_id =  option_master.select_id having option_master.select_id = 4;`, function(err,data){
                if(err) return reject(err)
                resolve(data)
                uniData = data
            })
        })
        await new Promise((resolve,reject)=>{
            connection.query(`select select_master.select_name, option_master.select_id, option_master.option_value from select_master left join option_master on select_master.select_id =  option_master.select_id having option_master.select_id = 5;`, function(err,data){
                if(err) return reject(err)
                resolve(data)
                courseData = data
            })
        })
        await new Promise((resolve,reject)=>{
            connection.query(`select select_master.select_name, option_master.select_id, option_master.option_value from select_master left join option_master on select_master.select_id =  option_master.select_id having option_master.select_id = 6;`, function(err,data){
                if(err) return reject(err)
                resolve(data)
                techData = data
            })
        })
        
        await new Promise((resolve,reject)=>{
            connection.query(`select select_master.select_name, option_master.select_id, option_master.option_value from select_master left join option_master on select_master.select_id =  option_master.select_id having option_master.select_id = 7;`, function(err,data){
                if(err) return reject(err)
                resolve(data)
                locationData = data
            })
        })
        await new Promise((resolve,reject)=>{
            connection.query(`select select_master.select_name, option_master.select_id, option_master.option_value from select_master left join option_master on select_master.select_id =  option_master.select_id having option_master.select_id = 8;`, function(err,data){
                if(err) return reject(err)
                resolve(data)
                deptData = data
            })
        })
        
        res.render('form',{relationData,stateData, genderData, uniData, courseData, techData, locationData, deptData})
    }


    catch(e){
        console.log("error in async and await")
    }
})


app.post('/', function(req,res){
    
})

    app.listen(PORT , ()=>{
    console.log(`Listening on PORT: ${PORT}`)
})
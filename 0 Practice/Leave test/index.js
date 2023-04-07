
const express = require('express')
const app = express()
const mysql =  require('mysql2')
const util =  require('util')


app.set('view engine', 'ejs')

let conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database: "hrms"
})

conn.connect((err)=>{
    if(err) throw err;
    console.log("Connected with MySql")
})

const query = util.promisify(conn.query).bind(conn)

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/leavetype',async (req,res)=>{
    let userLeave = await query(`select leave_type,is_halfday from leave_application where fk_emp_id = 15`)

    var leavesObject = {
        sLeave: 0,
        cLeave: 0,
        pLeave: 0,
        upLeave: 0,
    }

    // function countLeave(){
     
        for(x of userLeave){
            console.log('x',x.leave_type)
            if(x.leave_type == 'SL'){
                console.log("x",x)
                if(x.is_halfday == 1){
                    leavesObject.sLeave+=0.5;
                }
                else if(x.is_halfday == 0){
                    leavesObject.sLeave+=1;
                }
            }
            else if(x.leave_type == 'CL'){
                if(x.is_halfday == 1){
                    leavesObject.cLeave+=0.5;
                }
                else if(x.is_halfday == 0){
                    leavesObject.cLeave+=1;
                }
            }
            else if(x.leave_type == 'PL'){
                if(x.is_halfday == 1){
                    leavesObject.pLeave+=0.5;
                }
                else if(x.is_halfday == 0){
                    leavesObject.pLeave+=1;
                }
            }
            else if(x.leave_type == 'UPL'){
                if(x.is_halfday == 1){
                    leavesObject.upLeave+=0.5;
                }
                else if(x.is_halfday == 0){
                    leavesObject.upLeave+=1;
                }
            }
        }
        // console.log(leavesObject.sLeave)
        
    res.json(leavesObject)
})

app.get('/test1', async (req,res)=>{

    let result =  await query(`select leave_application.leave_id, leave_application.fk_emp_id, leave_application.leave_date, leave_application.leave_reason,leave_application.is_halfday, leave_application.is_cto_approved, leave_application.is_hr_approved, basic_info.first_name,basic_info.last_name from leave_application left join basic_info on basic_info.fk_emp_id = leave_application.fk_emp_id where leave_application.fk_emp_id = 15;`)

    res.render('leaveCount',{result})
})



app.listen(9999, ()=>{
    console.log("connected with server")
})
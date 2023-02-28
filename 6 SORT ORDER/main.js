const express = require('express')
const app =  express()
const PORT = 9999;
const mysql = require('mysql2')
const url = require('url')

app.set('view engine', 'ejs');


app.use(express.json())

let connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'root',
    database: 'studentMaster'

});

connection.connect(function(err){
    if(err) throw err;
    console.log("Connected with MySQL")
app.get('/',(req,res)=>{
    
        connection.query("SELECT * FROM student_express", function(err,result){
            if(err) throw err;
            res.send(result)

        })
    })
})

app.post('/addstudent',(req,res) =>{

        let fName = ['aayush','piyush','dhyey','jay','dhruv','sahil','kirtan','vivek','kaushal','meet','dev','nisarg','nandini','vishwa','rajesh','prachi','sanjay','seema','prachi','divyang','harshil','harmil','vijay','chirag','manthan','tulsi']
        let lName = ['khatri','patel','parekh','vardiwale','thakkar','khajuriya','gajjar','thesia','joshi','rathod','dalwadi','joshi','valand','bhatiya','bhatt','rana']
        let clg = ['IIT','GH Patel','GEC Modasa','GEC Bhavnagar','GEC Patan', 'GEC Rajkot','Marvadi', 'NIT', 'AIT','MIT','Alpha','SAL','Silver Oak','Nirma', 'Vishwakrma', 'LD','LDRP','MS']
        let city_list  = ['Ahmedabad', 'Surat','Patan', 'Vadodra','Bharuch','Anand','Gandhinagar','Bhavnagar','Junagadh']
        const number  = '1234567890';
        let date = "";

        for(let  j=0; j<1500; j++){
            let first_name = fName[parseInt(Math.random()*fName.length)]
            let last_name = lName[parseInt(Math.random()*lName.length)]
            let email = `${first_name}-${last_name}@gmail.com`
            let clg_name = clg[parseInt(Math.random()*clg.length)]
            let city = city_list[parseInt(Math.random() * city_list.length)]
            let contact_number = ""
            for(let i = 1; i<=10; i++){
                contact_number += number.charAt(Math.random() * number.length)
            }
            
            function randomDate(start, end){
                return new Date(start.getTime() + Math.random()* (end.getTime() - start.getTime()))
            }
            const d = randomDate(new Date(1995,1,1), new Date(2003, 12, 1));
            date_of_birth = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
            
            connection.query(`Insert into student_express(first_name,last_name,date_of_birth,contact_number,email,city,clg_name)value("${first_name}","${last_name}","${date_of_birth}","${contact_number}","${email}","${city}","${clg_name}")`, function(err, data1){
                if (err) throw err
                console.log("added")
            })
        }
})
app.get('/table/',function(req,res){

    let resultArr = "";
    const q = url.parse(req.url,true);
    let page = q.query.page ||1

    let field = q.query.field || 'student_id'
    let order = q.query.order || 'ASC'

    let limit = 10
    let offset =  (page-1)*limit||0
    let pre_order = 'ASC';
        connection.query(`Select * from student_express order by ${field} ${order} limit ${offset},${limit}`, function(err, data){
            if(err) throw err;
            connection.query('select count(*) as count from student_express', function(err, coun_val){
                if(err) throw err;

                if(order=='ASC'){
                    pre_order="DESC"
                }
                else{
                    pre_order="ASC"
                }

                resultArr = data;
                let counter = Math.ceil(coun_val[0].count/limit)
                res.render('dataPage',{resultArr, page,counter,field,order,pre_order})
                }) 
            })
        })
app.listen(PORT, ()=>{
    console.log(`Listening on Port: ${PORT}`)
})
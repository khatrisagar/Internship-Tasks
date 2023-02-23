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

    let searchVal = q.query.searchVal ||  "";

    let firstName = "";
    let lastName = "";
    let conNum="";
    let email="";
    let city ="";
    let clg="";
    
    let fArr = []
    let lArr =[]
    let conArr =[]
    let eArr = []
    let cityArr =[]
    let clgArr = []
    
    for(let i = 0; i<searchVal.length; i++){
        if(searchVal.charAt(i)== "^"){
            for(let j = i+1; j<searchVal.length; j++){
                if(searchVal.charAt(j)=="^"||searchVal.charAt(j)=="$"||searchVal.charAt(j)=="*"||searchVal.charAt(j)=="@"||searchVal.charAt(j)=="&"||searchVal.charAt(j)=="#"){
                    break;
                }
                firstName += searchVal.charAt(j)
            }
            fArr.push(firstName)
            firstName =""
        }
        if(searchVal.charAt(i)== "$"){
            for(let j = i+1; j<searchVal.length; j++){
                if(searchVal.charAt(j)=="^"||searchVal.charAt(j)=="$"||searchVal.charAt(j)=="*"||searchVal.charAt(j)=="@"||searchVal.charAt(j)=="&"||searchVal.charAt(j)=="#"){
                    break;
                }
                lastName += searchVal.charAt(j)
            }
            lArr.push(lastName)
            lastName = ""
        }
        if(searchVal.charAt(i)== "*"){
            for(let j = i+1; j<searchVal.length; j++){
                if(searchVal.charAt(j)=="^"||searchVal.charAt(j)=="$"||searchVal.charAt(j)=="*"||searchVal.charAt(j)=="@"||searchVal.charAt(j)=="&"||searchVal.charAt(j)=="#"){
                    break;
                }
                conNum += searchVal.charAt(j)
            }
            conArr.push(conNum)
            conNum = ""
        }
        if(searchVal.charAt(i)== "@"){
            for(let j = i+1; j<searchVal.length; j++){
                if(searchVal.charAt(j)=="^"||searchVal.charAt(j)=="$"||searchVal.charAt(j)=="*"||searchVal.charAt(j)=="@"||searchVal.charAt(j)=="&"||searchVal.charAt(j)=="#"){
                    break;
                }
                email += searchVal.charAt(j)
            }
            eArr.push(email)
            email=""
        }
        if(searchVal.charAt(i)== "&"){
            for(let j = i+1; j<searchVal.length; j++){
                if(searchVal.charAt(j)=="^"||searchVal.charAt(j)=="$"||searchVal.charAt(j)=="*"||searchVal.charAt(j)=="@"||searchVal.charAt(j)=="&"||searchVal.charAt(j)=="#"){
                    break;
                }
                city += searchVal.charAt(j)
            }
            cityArr.push(city)
            city=""
        }
        if(searchVal.charAt(i)== "#"){
            for(let j = i+1; j<searchVal.length; j++){
                if(searchVal.charAt(j)=="^"||searchVal.charAt(j)=="$"||searchVal.charAt(j)=="*"||searchVal.charAt(j)=="@"||searchVal.charAt(j)=="&"||searchVal.charAt(j)=="#"){
                    break;
                }
                clg += searchVal.charAt(j)
            }
            clgArr.push(clg)
            clg=""
        }
    }
        
    
        let sql =`select count(*) as count from student_express where 
        (first_name like "${fArr[0]}%") or 
        (last_name like "%${lArr[0]}%") or 
        (contact_number like "%${clgArr[0]}%") or
        (email like "%${eArr[0]}%") or
        (city like "%${cityArr[0]}%") or
        (clg_name like "%${clgArr[0]}")` 


        

        for(let i = 1; i<fArr.length;i++){
            sql += `OR (first_name like "${fArr[i]}%") `
        }

        for(let i = 1; i<lArr.length;i++){
            sql += `OR (last_name like "${lArr[i]}%") `
        }

        for(let i = 1; i<conArr.length;i++){
            sql += `OR (contact_number like "${conArr[i]}%") `
        }

        for(let i = 1; i<eArr.length;i++){
            sql += `OR (email like "${eArr[i]}%") `
        }
        for(let i = 1; i<cityArr.length;i++){
            sql += `OR (city like "${cityArr[i]}%") `
        }
        for(let i = 1; i<clgArr.length;i++){
            sql += `OR (clg_name like "${clgArr[i]}%") `
        }



        connection.query(sql, function(err, data){
            if(err) throw err;
            
                resultArr = data;
                let counter = Math.ceil(data[0].count/200)
                res.render('search',{resultArr, page,searchVal, counter})
            // })
        })
})

app.listen(PORT, ()=>{
    console.log(`Listening on Port: ${PORT}`)
})
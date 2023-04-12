const express =require("express")
const app = express();
const mysql =  require("mysql2")
// const PORT =9999
const bodyParser =  require('body-parser')
const url =  require('url')
const util =  require('util');

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public',express.static('public'))

let connection  =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'job_application_form'

})
connection.connect(function(err){
    if(err) throw err
    console.log("Connected with MySQl Job Application")
})

app.get("/", async (req,res) =>{
    let relationData = ""
    let stateData = ""
    let genderData = ""
    let uniData = ""
    let courseData = ""
    let locationData = ""
    let techData =""
    let deptData = ""
    let lanData = ""
    let cityData = ""
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
        await new Promise((resolve,reject)=>{
            connection.query(`select select_master.select_name, option_master.select_id, option_master.option_value from select_master left join option_master on select_master.select_id =  option_master.select_id having option_master.select_id = 9;`, function(err,data){
                if(err) return reject(err)
                resolve(data)
                lanData = data
            })
        })

        res.render('viewsJob/form',{relationData, stateData, genderData, uniData, courseData, techData, locationData, deptData,lanData})
    }


    catch(e){
        console.log("error in async and await")
    }
})


app.post('/submit', async function(req,res){

    res.render('viewsJob/post',{type: "Data"})
        let first_name =  req.body.first_name
        let last_name =  req.body.last_name
        let designation =  req.body.designation
        let address = req.body.address
        let age = req.body.age || ""
        let mobile_number =  req.body.mobile_number
        let email = req.body.email
        let city =  req.body.city
        let date_of_birth = req.body.date_of_birth
        let state_select = req.body.state_select
        let gender_select = req.body.gender_select
        let zipcode =  req.body.zipcode
        let relationship_select =  req.body.relationship_select
        let last_id ;


    await new Promise((resolve,reject)=>{
        connection.query(`insert into candidate_basic(firstname,surname,designation,email,address,age,contact,city,date_of_birth,state,gender, zipcode,relation_status)
        values("${first_name}","${last_name}","${designation}","${email}","${address}","${age}","${mobile_number}","${city}","${date_of_birth}","${state_select}","${gender_select}","${zipcode}","${relationship_select}")`, function(err, candidatedata){
            if (err) return reject (err)
            resolve(candidatedata.insertId);
            last_id = candidatedata.insertId
        });
    })
    let course_select = req.body.course_select || ""
    let uni_select = req.body.uni_select || ""
    let passing_year = req.body.passing_year || ""
    let score_data = req.body.score_data || ""

    await new Promise((resolve,reject)=>{
        if(typeof passing_year =="object"){
        for(let i =0; i<course_select.length;i++){
            connection.query(`insert into academics(course_name,university_name,pass_out_year,score,candidate_id)values("${course_select[i]}","${uni_select[i]}","${passing_year[i]}","${score_data[i]}","${last_id}")`,function(err,academicasData){
                if (err) return reject (err)
                resolve(academicasData)
                console.log("Academics inserted")
            })
        }
    }
    else{
        connection.query(`insert into academics(course_name,university_name,pass_out_year,score,candidate_id)values("${course_select}","${uni_select}","${passing_year}","${score_data}","${last_id}")`,function(err,academicasData){
            if (err) return reject (err)
            resolve(academicasData)
            console.log("Academics inserted")
        })
    }
})
    

    let company_name = req.body.company_name || ""
    let designationData = req.body.designationData || ""
    let start_date = req.body.start_date || "1000-01-01 00:00:00"
    let end_date = req.body.end_date || "1000-01-01 00:00:00"


    await new Promise((resolve,reject)=>{

    if(typeof company_name =="object"){
        for(let i =0; i<company_name.length;i++){
        connection.query(`insert into experience(candidate_id,company_name,designation,start_date,end_date)values("${last_id}","${company_name[i]}","${designationData[i]}","${start_date[i]}","${end_date[i]}")`,function(err,exedata){
            if (err) return reject (err)
            resolve(exedata)
            console.log("Exe Inserted")
            })
        }
    }
    else{
        connection.query(`insert into experience(candidate_id,company_name,designation,start_date,end_date)values("${last_id}","${company_name}","${designationData}","${start_date}","${end_date}")`,function(err,exedata){
            if (err) return reject (err)
            resolve(exedata)
            console.log("Exe Inserted")
            })
        }
    })
  
    let language_name = req.body.lan1 || ""
    let language_read =  req.body.ch1 || ""
    let language_write = req.body.ch2 || ""
    let language_speak = req.body.ch3  || ""
    console.log(language_name)
    console.log(language_read)
    console.log(language_write)
    console.log(language_speak)
    await new Promise((resolve,reject)=>{

        if(typeof language_name =="object"){
        for(let i = 0; i<language_name.length; i++){
            // have to add a one condition to stop a loop for low data
            connection.query(`insert into languages(candidate_id,language_name, language_read,language_write,language_speak)values(
                "${last_id}",
                "${language_name[i]}",
                "${language_read.includes(language_name[i])?'Yes':'No'}",
                "${language_write.includes(language_name[i])?'Yes':'No'}",
                "${language_speak.includes(language_name[i])?'Yes':'No'}")`,function(err,lan){
                if (err) return reject (err)
                resolve(lan)
                console.log("Lan Inserted")
              })
        }
    }
    else{
        connection.query(`insert into languages(candidate_id,language_name, language_read,language_write,language_speak)values(
            "${last_id}",
            "${language_name}",
            "${language_read.includes(language_name)?'Yes':'No'}",
            "${language_write.includes(language_name)?'Yes':'No'}",
            "${language_speak.includes(language_name)?'Yes':'No'}")`,function(err,lan){
            if (err) return reject (err)
            resolve(lan)
            console.log("Lan Inserted")
          })
        }
    })

    // tech data started...
    let tech_name = req.body.techname
    console.log(tech_name)
    await new Promise((resolve,reject)=>{
    if(typeof tech_name =="object"){
    for(let i = 0; i<tech_name.length; i++){

        console.log(req.body.techname[i],eval("req.body."+(req.body.techname[i])))
        // console.log()
            connection.query(`insert into technologies(candidate_id,technology_name, tech_rating)
            values("${last_id}",
            "${tech_name[i]}",
            "${eval("req.body."+(tech_name[i]))}")`,function(err, techData){
                if (err) return reject (err)
                resolve(techData)
                console.log("Tech Data Inserted")
            })
        }
    }
    else{
        connection.query(`insert into technologies(candidate_id,technology_name, tech_rating)
            values("${last_id}",
            "${tech_name}",
            "${eval("req.body."+(tech_name))}")`,function(err, techData){
                if (err) return reject (err)
                resolve(techData)
                console.log("Tech Data Inserted")
            })
    }
})
    // tech ended

// reference Started

    let reference_name1 = req.body.ref_name 
    let contact_number1 = req.body.ref_contact_number 
    let relation = req.body.relation 
    console.log("ref name",reference_name1)
    await new Promise((resolve,reject)=>{

    if(typeof reference_name1 =="object"){
        for(let i =0; i<reference_name1.length;i++){
        connection.query(`insert into reference_contact(candidate_id,reference_name,reference_contact_number,reference_releation)values("${last_id}","${reference_name1[i]}","${contact_number1[i]}","${relation[i]}")`,function(err,refData){
            if (err) return reject (err)
            resolve(refData)
            console.log("Ref Inserted")
            })
        }
    }
    else{
        connection.query(`insert into reference_contact(candidate_id,reference_name,reference_contact_number,reference_releation)values("${last_id}","${reference_name1}","${contact_number1}","${relation}")`,function(err,refData){
            if (err) return reject (err)
            resolve(refData)
            console.log("Ref Inserted")
            })
        }
    })

// reference Ended


// preference started

    let location = req.body.loacation_select
    let department_prefrence = req.body.department_select
    let cur_ctc =  req.body.current_ctc
    let exe_ctc = req.body.expected_ctc
    let notice_period = req.body.notice_period



    await new Promise((resolve,reject)=>{

            connection.query(`insert into prefrences(candidate_id,prefered_location,department,notice_period,current_ctc,expected_ctc)values("${last_id}","${location}","${department_prefrence}","${notice_period}","${cur_ctc}","${exe_ctc}")`,function(err,prefData){
                if (err) return reject (err)
                resolve(prefData)
                console.log("preference Inserted")
                })
        })
// preference Ended
})

let candidate_data = ""

app.get('/dashboard',async function(req,res){
    const q =  url.parse(req.url,true);
    const searchVal = req.query.search || "";
    let firstName = "";
    let lastName = "";
    let conNum="";
    let email="";
    let city ="";
    
    let fArr = [] 
    let lArr =[]
    let conArr =[]
    let eArr = []
    let cityArr =[]
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
    }
        
    if(searchVal != ""){
        var sql =`select * from candidate_basic where 
        
        (firstname like "%${fArr[0]}%") or 
        (surname like "%${lArr[0]}%") or 
        (contact like "%${conArr[0]}%") or
        (email like "%${eArr[0]}%") or
        (city like "%${cityArr[0]}%") `

    }
    else{
        var sql = `select * from candidate_basic  where ( is_deleted = 0)`;
    }
        for(let i = 1; i<fArr.length;i++){
            sql += `OR (first_name like "${fArr[i]}%")`
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
        let xyz= req.query.xyz ||false
        let page =  req.query.page || 1
        let counter = 0
        let limit = 5
        let offset =  (page-1)*limit||0
        connection.query(sql, async function(err, data1){
            if(err) throw err;
                candidate_data =data1
                connection.query(sql.replace("*",`count(candidate_id) as count`), function(err, data){
                    if(err) throw err;
                    
                    counter = Math.ceil(data[0].count/limit)
                })
                await new Promise((resolve,reject)=>{
                    connection.query(sql + `limit ${offset},${limit}`, function(err, limRes){
                        
                if(err) return reject (err);
                resolve(limRes)
                candidate_data = limRes
                    
                if(!xyz){
                    res.render('viewsJob/dashboard',{candidate_data, page, searchVal, counter})                
                }
                else{
                    res.json(candidate_data)
                }

            })
        })
        
        })
})

app.get("/dashboard/view", async function(req,res){
    console.log("Hello")
    const q =  url.parse(req.url,true);
    const candidateId= q.query.candidateId
    
    const query =  util.promisify(connection.query).bind(connection)
    
    const basicView = await query(`select * from candidate_basic where candidate_id= ${candidateId}`)

    const academicsView = await query(`select * from academics where candidate_id= ${candidateId}`)

    const experienceView =  await query(`select * from experience where candidate_id= ${candidateId}`)
    
    const languageView =  await query(`select * from languages where candidate_id= ${candidateId}`)
    
    const technologyView =  await query(`select * from technologies where candidate_id= ${candidateId}`)
    
    const referenceView =  await query(`select * from reference_contact where candidate_id= ${candidateId}`)
    
    const prefrencesView =  await query(`select * from prefrences where candidate_id= ${candidateId}`)

    res.render("viewsJob/viewData",{basicView, academicsView, experienceView, languageView, technologyView, referenceView,prefrencesView })


})

app.get('/city', async function(req,res){
    let stateName  = req.query.stateName

    
    const query =  util.promisify(connection.query).bind(connection)
    const cityName =  await query(`select state_master.state_name, city_master.city_name from state_master left join city_master on state_master.state_id =  city_master.state_id having state_master.state_name = ${stateName}`);

    res.json(cityName)
})

app.post('/delete', async function(req,res){
    const candidate_id =  req.query.candidateId;
    const query =  util.promisify(connection.query).bind(connection)
    const deleteVal = await query(`update candidate_basic set is_deleted = 1 where candidate_id in (${candidate_id})`, function(err,data){
        if (err) throw err;
    })  

})




app.get('/edit',async function(req,res){
    try{
        let candidateId = req.query.candidateId;
        const query =  util.promisify(connection.query).bind(connection)

        let relationData=  await query(`select select_master.select_name, option_master.select_id, option_master.option_value from select_master left join option_master on select_master.select_id =  option_master.select_id having option_master.select_id = 1`)
        let stateData=  await query(`select select_master.select_name, option_master.select_id, option_master.option_value from select_master left join option_master on select_master.select_id =  option_master.select_id having option_master.select_id = 2`)
        let genderData =  await query(`select select_master.select_name, option_master.select_id, option_master.option_value from select_master left join option_master on select_master.select_id =  option_master.select_id having option_master.select_id = 3`)
        let uniData =  await query(`select select_master.select_name, option_master.select_id, option_master.option_value from select_master left join option_master on select_master.select_id =  option_master.select_id having option_master.select_id = 4`)
        let courseData =  await query(`select select_master.select_name, option_master.select_id, option_master.option_value from select_master left join option_master on select_master.select_id =  option_master.select_id having option_master.select_id = 5`)
        let locationData =  await query(`select select_master.select_name, option_master.select_id, option_master.option_value from select_master left join option_master on select_master.select_id =  option_master.select_id having option_master.select_id = 7`)
        let techData =  await query(`select select_master.select_name, option_master.select_id, option_master.option_value from select_master left join option_master on select_master.select_id =  option_master.select_id having option_master.select_id = 6`)
        let deptData =  await query(`select select_master.select_name, option_master.select_id, option_master.option_value from select_master left join option_master on select_master.select_id =  option_master.select_id having option_master.select_id = 8`)
        let lanData =  await query(`select select_master.select_name, option_master.select_id, option_master.option_value from select_master left join option_master on select_master.select_id =  option_master.select_id having option_master.select_id = 9`)


        // candidate data
        let candidate_basic_data =  await query(`select * from candidate_basic where candidate_id = ${candidateId}`)
        let state_name = candidate_basic_data[0].state
        let cityData = await query(`select state_master.state_name, city_master.city_name from state_master left join city_master on state_master.state_id =  city_master.state_id having state_master.state_name = "${state_name}"`)


        // academics data
        let academics_data = await query(`select * from academics where candidate_id = ${candidateId}`)
  
        
        // work experience data
        let work_experience_data =  await query(`select * from experience where candidate_id = ${candidateId}`)

        // language data
        let language_data = await query(`select * from languages where candidate_id =${candidateId}`)
        // console.log(language_data)


        // technologies data
        let technologies_data = await query(`select * from technologies where candidate_id = ${candidateId}`)

        // reference data
        let reference_data =  await query(`select * from reference_contact where candidate_id = ${candidateId}`)

        // preference data
        let preference_data = await query(`select * from prefrences where candidate_id = ${candidateId}`)

        res.render('viewsJob/editForm', {relationData, stateData,genderData,uniData,courseData,locationData,techData,deptData,lanData,cityData, 
            candidate_basic_data, academics_data, work_experience_data, reference_data, preference_data,language_data,technologies_data})
    }

    catch(e){
        console.log("error in edit method")
    }
})
// app.get('/edit', async (req,res)=>{
//     try{
//         let candidateId = req.query.candidateId;
//         const query =  util.promisify(connection.query).bind(connection)

//         let candidate_basic_data =  await query(`select * from candidate_basic where candidate_id = ${candidateId}`)


//         res.render('viewsJob/edit', {candidate_basic_data})
//     }
//     catch(e){

//     }
// })

app.post('/edited', async function(req,res){

    const query =  util.promisify(connection.query).bind(connection)
    let candidateId =  req.body.candidateId
    let first_name =  req.body.first_name

    // candaidate data update
    
    let candidate_basic_update=  await query(`update candidate_basic set firstname = "${first_name}", surname = "${req.body.last_name}", designation = "${req.body.designation}", email="${req.body.email}", address= "${req.body.address}", age= "${req.body.age}", contact = "${req.body.mobile_number}",state = "${req.body.state_select}" ,city = "${req.body.city}", gender = "${req.body.gender_select}",date_of_birth = "${req.body.date_of_birth}",zipcode = "${req.body.zipcode}", relation_status= "${req.body.relationship_select}" where candidate_id = ${candidateId}`)
    

    // academics data update

    let academicsId = req.body.academicsId || ""
    let courseSelect =  req.body.course_select || ""
    let academicsLen = academicsId.length;
    let courseLen = courseSelect.length

    console.log('req',typeof req.body.course_select,req.body.course_select)
    if(typeof courseSelect == "object" && typeof academicsId == "object"){
        if(academicsLen == courseLen){
            for(let i = 0; i<academicsLen;i++){
                let academics_update = await query(`update academics set course_name = "${req.body.course_select[i]}", university_name = "${req.body.uni_select[i]}", pass_out_year = "${req.body.passing_year[i]}", score = "${req.body.score_data[i]}" where academics_id = ${academicsId[i]} `)
            }
        }
        else if(academicsLen < courseLen){
            for(let i = academicsLen; i<courseLen; i++){
                let academics_add_update = await query(`insert into academics(candidate_id,course_name,university_name,pass_out_year,score)values("${candidateId}","${req.body.course_select[i]}","${req.body.uni_select[i]}","${req.body.passing_year[i]}","${req.body.score_data[i]}")`)
            }
        }
    }
    else if(typeof courseSelect == "object" && typeof academicsId == "string" && academicsId != 0){
        courseLen = courseSelect.length;
        academicsLen = 1;

        if(academicsLen == courseLen){
            for(let i = 0; i<academicsLen;i++){
                let academics_update = await query(`update academics set course_name = "${req.body.course_select[i]}", university_name = "${req.body.uni_select[i]}", pass_out_year = "${req.body.passing_year[i]}", score = "${req.body.score_data[i]}" where academics_id = ${academicsId[i]} `)
            }
        }
        else if(academicsLen < courseLen){
            for(let i = academicsLen; i<courseLen; i++){
                let academics_add_update = await query(`insert into academics(candidate_id,course_name,university_name,pass_out_year,score)values("${candidateId}","${req.body.course_select[i]}","${req.body.uni_select[i]}","${req.body.passing_year[i]}","${req.body.score_data[i]}")`)
            }
        }
        else if(typeof courseSelect == "string" && typeof academicsId == "string"){

            // already 1 added
             if(academicsId != ""){
                let experienceLen =  1
                let companyLen = 1;
                let experience_update = await query(`update academics set course_name = "${req.body.course_select}", university_name = "${req.body.uni_select}", pass_out_year = "${req.body.passing_year}", score = "${req.body.score_data}" where academics_id = ${academicsId} `)
            }
        }
    }

    // experience data update
    let experienceId =  req.body.experienceId || ""
    let companyName = req.body.company_name || "";

    let experienceLen = 0
    let companyLen = 0
    // console.log(typeof companyName)
    
    if(typeof companyName == "object" && typeof experienceId == "object"){
        experienceLen = experienceId.length
        companyLen = companyName.length
        console.log("inexe obj", companyLen, experienceLen,)
        if(experienceLen == companyLen){
            for(let i = 0; i<experienceLen;i++){
                let experience_update = await query(`update experience set company_name = "${req.body.company_name[i]}",designation = "${req.body.designationData[i]}",start_date = "${req.body.start_date[i]}", end_date = "${req.body.end_date[i]}" where experience_id= ${experienceId[i]}`)
            }
            console.log("updated obj ==")
        }
        else if(experienceLen < companyLen){
            for(let i = experienceLen; i<companyLen; i++){
                let experience_add_update = await query(`insert into experience(candidate_id,company_name,designation,start_date,end_date)values("${candidateId}","${req.body.company_name[i]}","${req.body.designationData[i]}","${req.body.start_date[i]}","${req.body.end_date[i]}")`)
            }
            console.log("inserted obj <")
        }
    }
    else if(typeof companyName == "object" && typeof experienceId == "string" && experienceId != 0){
        companyLen = companyName.length;
        experienceLen = 1;

        if(experienceLen == companyLen){
            for(let i = 0; i<experienceLen;i++){
                let experience_update = await query(`update experience set company_name = "${req.body.company_name[i]}",designation = "${req.body.designationData[i]}",start_date = "${req.body.start_date[i]}", end_date = "${req.body.end_date[i]}" where experience_id= ${experienceId[i]}`)
            }
            console.log("updated str ==")
        }
        else if(experienceLen < companyLen){
            for(let i = experienceLen; i<companyLen; i++){
                let experience_add_update = await query(`insert into experience(candidate_id,company_name,designation,start_date,end_date)values("${candidateId}","${req.body.company_name[i]}","${req.body.designationData[i]}","${req.body.start_date[i]}","${req.body.end_date[i]}")`)
            }
            console.log("inserted str <")
        }
    }
    else if(typeof companyName == "string" && typeof experienceId == "string"){

        // already 1 added
         if(experienceId != ""){
            let experienceLen =  1
            let companyLen = 1;
            let experience_update = await query(`update experience set company_name = "${req.body.company_name}",designation = "${req.body.designationData}",start_date = "${req.body.start_date}", end_date = "${req.body.end_date}" where experience_id= ${experienceId}`)
            
        }
    }
    // for initial empty 
    else if(experienceId == ""){

        // in empty to obj add
        if(typeof companyName =="object"){
            console.log("updated by me")
            for(let i =0; i<companyName.length;i++){
                let empty_obj_update =  await query(`insert into experience(candidate_id,company_name,designation,start_date,end_date)values("${candidateId}","${req.body.company_name[i]}","${req.body.designationData[i]}","${req.body.start_date[i]}","${req.body.end_date[i]}")`)
            }
        }
        // in empty to str add
        else{
            console.log("added by me")
            let empty_str_update = await query(`insert into experience(candidate_id,company_name,designation,start_date,end_date)values("${candidateId}","${req.body.company_name}","${req.body.designationData}","${req.body.start_date}","${req.body.end_date}")`)
        }
    }

    // languages data update
    let languagesId = req.body.languagesId;
    let language_name = req.body.lan1 || ""
    let language_read =  req.body.ch1 || ""
    let language_write = req.body.ch2 || ""
    let language_speak = req.body.ch3  || ""


    let language_delete =  await query(`delete from languages where candidate_id = ${candidateId}`)

    if(typeof language_name =="object"){

        for(let i = 0; i<language_name.length; i++){
            let laguage_obj_update=  await query(`insert into languages(candidate_id,language_name, language_read,language_write,language_speak)values(
            "${candidateId}",
            "${language_name[i]}",
            "${language_read.includes(language_name[i])?'Yes':'No'}",
            "${language_write.includes(language_name[i])?'Yes':'No'}",
            "${language_speak.includes(language_name[i])?'Yes':'No'}")`)
        }
    }
    else{
        let laguage_obj_update = await query(`insert into languages(candidate_id,language_name, language_read,language_write,language_speak)values(
            "${candidateId}",
            "${language_name}",
            "${language_read.includes(language_name)?'Yes':'No'}",
            "${language_write.includes(language_name)?'Yes':'No'}",
            "${language_speak.includes(language_name)?'Yes':'No'}")`)
    }
    
    // technologies data update
    let techname = req.body.techname
    let technologies_update =  await query(`delete from technologies where candidate_id = ${candidateId}`)
    if(typeof techname =="object"){
        for(let i = 0; i<techname.length; i++){
            let technologies_update = await query(`insert into technologies(candidate_id,technology_name,tech_rating)
            values("${candidateId}",
            "${techname[i]}",
            "${eval("req.body."+(techname[i]))}")`)
        }
    }
    else{
        let technologies_update = await query(`insert into technologies(candidate_id,technology_name,tech_rating)
        values("${candidateId}",
        "${techname}",
        "${eval("req.body."+(techname))}")`)
    }

    // references data update
    let referenceId =  req.body.referenceId || ""
    let refName = req.body.ref_name || "";

    let referenceLen = 0
    let refNameLen = 0
  
    
    if(typeof refName == "object" && typeof referenceId == "object"){
        referenceLen = referenceId.length
        refNameLen = refName.length
        if(referenceLen == refNameLen){
            for(let i = 0; i<referenceLen;i++){
                let reference_update = await query(`update reference_contact set reference_name = "${req.body.ref_name[i]}",reference_contact_number = "${req.body.ref_contact_number[i]}",reference_releation = "${req.body.relation[i]}" where reference_id= ${referenceId[i]}`)
            }
            console.log("updated obj ==")
        }
        else if(referenceLen < refNameLen){
            for(let i = referenceLen; i<refNameLen; i++){
                let reference_add_update = await query(`insert into reference_contact(candidate_id,reference_name,reference_contact_number,reference_releation)values("${candidateId}","${req.body.ref_name[i]}","${req.body.ref_contact_number[i]}","${req.body.relation[i]}")`)
            }
            console.log("inserted obj <")
        }
    }
    else if(typeof refName == "object" && typeof referenceId == "string" && referenceId != 0){
        refNameLen = refName.length;
        referenceLen = 1;

        if(referenceLen == refNameLen){
            for(let i = 0; i<referenceLen;i++){
                let reference_update = await query(`update reference_contact set reference_name = "${req.body.ref_name[i]}",reference_contact_number = "${req.body.ref_contact_number[i]}",reference_releation = "${req.body.relation}" where reference_id= ${referenceId[i]}`)
            }
            console.log("updated str ==")
        }
        else if(referenceLen < refNameLen){
            for(let i = referenceLen; i<companyLen; i++){
                let reference_add_update = await query(`insert into reference_contact(candidate_id,reference_name,reference_contact_number,reference_releation)values("${candidateId}","${req.body.ref_name[i]}","${req.body.ref_contact_number[i]}","${req.body.relation[i]}")`)
            }
            console.log("inserted str <")
        }
    }
    else if(typeof refName == "string" && typeof referenceId == "string"){

        // already 1 added
         if(referenceId != ""){
            let referenceLen = 1;
            let refNameLen = 1;
            let reference_update = await query(`update reference_contact set reference_name = "${req.body.ref_name}",reference_contact_number = "${req.body.ref_contact_number}",reference_releation = "${req.body.relation}" where reference_id= ${referenceId}`)
            
        }
    }
    // for initial empty 
    else if(referenceId == ""){

        // in empty to obj add
        if(typeof refName =="object"){
            console.log("updated by me")
            for(let i =0; i<refName.length;i++){
                let reference_empty_obj_update =  await query(`insert into reference_contact(candidate_id,reference_name,reference_contact_number,reference_releation)values("${candidateId}","${req.body.ref_name[i]}","${req.body.ref_contact_number[i]}","${req.body.relation[i]}")`)
            }
        }
        // in empty to str add
        else{
            console.log("added by empty str")
            let reference_empty_str_update = await query(`insert into reference_contact(candidate_id,reference_name,reference_contact_number,reference_releation)values("${candidateId}","${req.body.ref_name}","${req.body.ref_contact_number}","${req.body.relation}")`)
        }
    }

    // peference data update
    let preference_update = await query(`update prefrences set prefered_location = "${req.body.loacation_select}", department = "${req.body.department_select}", current_ctc = "${req.body.current_ctc}", expected_ctc = "${req.body.expected_ctc}", notice_period = "${req.body.notice_period}"   where candidate_id = ${candidateId}`)
    
    
    res.render('viewsJob/post', {type:"Updated"})
})

module.exports = app

//     app.listen(PORT , ()=>{
//     console.log(`Listening on PORT: ${PORT}`)
// })
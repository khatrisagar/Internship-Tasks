let experienceId =  req.body.experienceId || ""
let companyName = req.body.company_name || "";

let experienceLen = 0
console.log(typeof companyName)

if(typeof companyName == "object" && experienceId.length !=    0){
    if(typeof experienceId != "string"){
    experienceLen = experienceId.length
    }
    let companyLen = companyName.length
    console.log("inexe obj", companyLen, experienceLen,)
    if(experienceLen == companyLen){
        for(let i = 0; i<experienceLen;i++){
            let experience_update = await query(`update experience set company_name = "${req.body.company_name[i]}",designation = "${req.body.designationData[i]}",start_date = "${req.body.start_date[i]}", end_date = "${req.body.end_date[i]}" where experience_id= ${experienceId[i]}`)
        }
        console.log("Added obj ==")
    }
    else if(experienceLen < companyLen){
        for(let i = experienceLen; i<companyLen; i++){
            let experience_add_update = await query(`insert into experience(candidate_id,company_name,designation,start_date,end_date)values("${candidateId}","${req.body.company_name[i]}","${req.body.designation[i]}","${req.body.start_date[i]}","${req.body.end_date[i]}")`)
        }
        console.log("Added obj <")
    }
}
else if(typeof companyName == "string" && experienceId.length != 0){
    let experienceLen =  1
    let companyLen = 1;
    console.log("inexe str",companyName.length, experienceId.length)
    if(experienceLen == companyLen){
            let experience_update = await query(`update experience set company_name = "${req.body.company_name}",designation = "${req.body.designationData}",start_date = "${req.body.start_date}", end_date = "${req.body.end_date}" where experience_id= ${experienceId}`)
            console.log("Added str ==")    
    }
    else if(typeof companyName == "object"){
        if(experienceLen < companyLen){
            let experience_add_update = await query(`insert into experience(candidate_id,company_name,designation,start_date,end_date)values("${candidateId}","${req.body.company_name}","${req.body.designation}","${req.body.start_date}","${req.body.end_date}")`)
            console.log("Added str <=")
        }
    }
}

else if(experienceId.length == "0"){
    console.log("inexe empty",companyName.length, experienceId.length)
    console.log("added from empty")
    let experience_add_update = await query(`insert into experience(candidate_id,company_name,designation,start_date,end_date)values("${candidateId}","${req.body.company_name}","${req.body.designation}","${req.body.start_date}","${req.body.end_date}")`)
}


let companyNameLen = companyName.length
console.log("com_name",companyName)
console.log("Len",companyNameLen)

console.log("ExpeId: ",req.body.experienceId)

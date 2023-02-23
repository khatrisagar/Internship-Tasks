let eductionId = document.getElementById("eductionTable");
let addEduField = document.getElementById("addEduField")
let addEduFieldTr = document.getElementById("addEduFieldTr")


let data = `
<td><label for="course_name">Course Name</label></td>
<td><input type="text" name="course_name" class="courseName" /></td>

<td><label for="university_name">University Name</label></td>
<td><input type="text" name="university_name" class="universityName"></td>`

let data2 = `<td><label for="passing_year">Passing Year</label></td>
<td><input type="text" name="passing_year" class="passingYear"></td>

<td><label for="percentage">Percentage</label></td>
<td><input type="text" name="percentage" class="percentage"></td>`

function addEdu(){
    let trEdu = document.createElement('tr');
    let trEdu2 = document.createElement('tr');
    trEdu.innerHTML += `${data}`
    trEdu2.innerHTML += `${data2}`


    eductionId.appendChild(trEdu)
    eductionId.appendChild(trEdu2)
}


let techId = document.getElementById("techTable");
let techName = document.getElementById("techName").value
// let techData =


function addTech(){
    let techName = document.getElementById("techName").value
    let trTech = document.createElement('tr');
    trTech.innerHTML += `
    <td><label for="${techName}">${techName}</label></td>
    <td><input type="radio" name="${techName}"></td>
    <td><label for="beginer">Beginer</label></td>
    <td><input type="radio" name="${techName}" ></td>
    <td><label for="mideator">Mideator</label></td>
    <td><input type="radio" name="${techName}"></td>
    <td><label for="expert">Expert</label></td>`

    techTable.appendChild(trTech)
}

let workExeId = document.getElementById("workExeperience")

function addWorkExe(){
    let trWork = document.createElement('tr');
    let trWork2 = document.createElement('tr');

    trWork.innerHTML= `<td><label for="company_name">Company Name</label></td>
    <td><input type="text" name="company_name" class="companyName" /></td>

    <td><label for="designation">Designation</label></td>
    <td><input type="text" name="designation" class="designation" /></td>`

    trWork2.innerHTML = `<td><label for="start_date">Start Date</label></td>
    <td><input type="date" name="start_date" class="startDate"></td>

    <td><label for="end-date"></label>End Date</td>
    <td><input type="date" name="end_date" class="endDate"></td>`

workExeId.appendChild(trWork)
workExeId.appendChild(trWork2)
}


let referenceTable = document.getElementById("refenreceTable")

function addReference(){
    let referenceTr = document.createElement('tr')

    referenceTr.innerHTML += `<td><label for="name">Reference Name</label></td>
    <td><input type="text" name="name" /></td>
    
    <td><label for="contact_number">Contact Number</label></td>
    <td><input type="text" name="contact_number" /></td>
    
    <td><label for="relation">Relation</label></td>
    <td><input type="text" name="relation" /></td>`
        
    referenceTable.appendChild(referenceTr)
    
}


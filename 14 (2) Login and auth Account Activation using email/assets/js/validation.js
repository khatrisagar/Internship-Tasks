var userName = "";
var userEmail = ""
var userPassword = ""
var userPassword2 = ""
    
var nameWarning = document.getElementById('name-warning')
var emailWarning = document.getElementById('email-warning')
var passwordWarning = document.getElementById('password-warning');
var passwordWarning2 = document.getElementById('pass2-warning');


let submitButton =  document.getElementById("submit-button")
let submitBtn =  document.getElementById("submitBtn")


function checkName(name){
    userName = name
}
function checkEmail(email){
    console.log(email)
    userEmail = email
    fetch(`http://localhost:9999/verify?userEmail=${userEmail}`).then(res=>(res.json())).then(data=>{
            if(data.match == "yes"){
                emailWarning.innerHTML = `<p>Your Email already exist</p>`
                return false;
            }
            else if(data.match == "no"){
                emailWarning.innerHTML = ``
                return true;
            }
        })
}

function checkPass(pass){
    // console.log(pass)
    userPassword = pass
    if(userPassword == ""){
        passwordWarning.innerHTML = ``
    }
    if(userPassword != ""){
        if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/gm.test(userPassword)){
            passwordWarning.innerHTML = `<p>Your Password is not strong enough</p>`
        }
        if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/gm.test(userPassword)){
            passwordWarning.innerHTML = ``
        }
    }
    
}
function checkPass2(pass2){
    userPassword2 = pass2

    if(userPassword2 == ""){
        passwordWarning2.innerHTML = ``
    }
    if(userPassword2 != ""){
        if(userPassword != userPassword2){
            passwordWarning2.innerHTML = `<p>Your Confirm Password Not Match</p>`
            return false
        }
        if(userPassword == userPassword2){
            passwordWarning2.innerHTML = ``
        }
    }
}
let abc = document.getElementById('abc');

function letsDance(){
    submitButton.classList.add("dancing-button")
    submitBtn.style.backgroundColor = "red"
    // abc.innerText = "Required Field Kon Fill Karega?"
}


function checkAll(){

    if(userName == ""){
        nameWarning.innerHTML = `<p>This is Required Field</p>`

        return false;
    }
    if(userEmail == ""){
        emailWarning.innerHTML = `<p>This is Required Field</p>`
 
        return false;
    }
    if(userPassword == ""){
        passwordWarning.innerHTML = `<p>This is Required Field</p>`
        return false;
    }

    if(emailWarning.innerHTML != `` ){
        return false;
    }

    if(userPassword !== userPassword2){
        return false;
    }
    return true;
}


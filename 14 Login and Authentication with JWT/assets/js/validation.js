
var userName;
var userEmail
var userPassword
var userPassword2

function checkName(name){
    userName = name
}
function checkEmail(email){
    console.log(email)
    userEmail = email
}

function checkPass(pass){
    // console.log(pass)
    userPassword = pass
}
function checkPass2(pass2){
    // console.log(pass2)
    userPassword2 = pass2

    if(userPassword == userPassword2){
        console.log("1",userPassword)
        console.log("2",userPassword2)
    }
    else{
        console.log("Paass not matched")
        return false;
    }
}

function checkAll(){
    fetch(`http://localhost:9999/verify?userEmail=${userEmail}`).then(res=>(res.json())).then(data=>{
        if(data.match == "yes"){
            let emailWarning = document.getElementById('email-warning')
            emailWarning.innerHTML = `<p>Your Email already exist</p>`
            return false
        }
    })
    
    if(userPassword == userPassword2){
        console.log("1",userPassword)
        console.log("2",userPassword2)
    }
    else if(userPassword != userPassword2){
        console.log("Pass not matched")
        let passwordWarning = document.getElementById('password-warning');
        let passwordWarning2 = document.getElementById('pass2-warning');
        
        passwordWarning2.innerHTML = `<p>Your Confirm Password Not Match</p>`

        return false;
    }
  
    
    
}

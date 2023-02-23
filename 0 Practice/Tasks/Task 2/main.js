function showPass(){
    let showPass= document.getElementById("passwordBox")
    let viewPass= document.getElementById("viewPass")

    if(showPass.type === "password"){
        showPass.type = "text"  
        viewPass.value = "Hide Password"
    }
    else{
        showPass.type= "password"
        viewPass.value = "Show Password"
    }
 }

function onChnageValidation(){
    let userName= document.forms["form1"]["username"].value
    let pswdChange = document.forms["form1"]["password"].value

    let passMain = /^[A-Za-z]\w{7,15}$/
    let alertUname = document.getElementById("alertUname")
    let alertPass = document.getElementById("alertPass")

    if(!isNaN(userName) && userName !=""){
        alertUname.innerHTML = "Invalid Username"
        alertUname.style.color= "red"
    }
    
    else{
        alertUname.innerHTML = ""
    }

    if(pswdChange.match(passMain)){
        alertPass.innerHTML = "Password is Strong"
        alertPass.style.color= "green";
        return true;
    }
    else{
        alertPass.innerHTML = "weak Password"
        alertPass.style.color= "red"
        return false;
    }
}

function buttonHandle(event){
    event.preventDefault()
    let uName= document.forms["form1"]["username"].value
    let pswd = document.forms["form1"]["password"].value
    let welcomeMsg = document.getElementById("welcomeMsg")


    if(uName =="" && pswd ==""){
        alert("You can't Set Empty Value in Username or password")
    return false
    }
    else{
        window.location.href="/welcome.html" 
        console.log("Calling Hello")
        welcomeMsg.innerHTML = "Welcome to New Page"
        return true
    }

}
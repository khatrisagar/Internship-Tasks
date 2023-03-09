let loginWarning =  document.getElementById("login-warning")



// function checkLogin(){
//     let loginEmail = document.getElementById('loginEmail').value
//     let loginPass = document.getElementById('loginPass').value
//     fetch(`http://localhost:9999/verifyLogin?userEmail=${loginEmail}`).then(res=>(res.json())).then(data=>{
//         if(data.result != "no"){
//                 console.log("hello")
//                 let enPass = data.result[0].user_password
//                 loginWarning.innerHTML = `<p>You Entered a Wrong Email or PasWord</p>`
//                 return false;
//             }
//             else if(data.result == "no"){
//                 loginWarning.innerHTML = `<p>You Entered a Wrong Email or PasWord</p>`
//                 return false;
//             }
//         })
// }
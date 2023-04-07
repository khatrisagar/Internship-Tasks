const nodemailer = require("nodemailer");

const sendMail = async(email,activationcode)=>{
    console.log(email)
    console.log(activationcode)

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
          user: "bartholome98@ethereal.email",
          pass: "7Z679BKKsTPGphFdEP", 
        },
    })
        let mailInfo ={
            from: '"Sagar Khatri" <bartholome98@ethereal.email>' ,
            to: email,
            subject: 'Activate Your Account',
            html: `<h2>You Need to Activate Your Account To use it.</h2>
            <a href="http://localhost:9999/activate?userEmail=${email}&activationCode=${activationcode}">Click Here To activae your Account</a>`
           }
           
        transporter.sendMail(mailInfo, function(error, info){
          if (error) {
            console.log(error);
          } 
          else {
            // console.log('Email sent: ' + info.response);
            console.log('Email sent successfully');
          }
        })   
}
module.exports= {
    sendMail
}
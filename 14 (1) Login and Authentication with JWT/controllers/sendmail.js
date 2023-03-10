const nodemailer = require("nodemailer");

const sendMail = async(req,res)=>{
    let testAccount = await nodemailer.createTestAccount();

    // connection with smpt server
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
        user: "concepcion.lindgren@ethereal.email",
        pass: "uB8uqBE7QUfaXAc68f", 
        },
    })

    let mailInfo = await transporter.sendMail({
        from: '"Sagar Khatri" <concepcion.lindgren@ethereal.email>' ,
        to: process.env.Mail_ID,
        subject: 'Activate Your Account',
        html: `<h2>You Need to Activate Your Account To use it.</h2>`
       })

       console.log("Message Data: ", mailInfo.messageId);
    //    res.json(info);
}
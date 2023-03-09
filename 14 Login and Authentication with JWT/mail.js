
var nodemailer = require('nodemailer');

require('dotenv').config()
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.Mail_ID,
    pass: process.env.Mail_Pass
  }
});

var mailOptions = {
  from: process.env.Mail_ID,
  to: process.env.Mail_to,
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
})

// module.exports = transporter
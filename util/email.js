const nodemailer = require('nodemailer');   
const smtpTransport = require('nodemailer-smtp-transport');

function sendEmail(email){
    var transporter = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        auth: {
          user: 'kartik.jain2021@vitbhopal.ac.in',
          pass: 'Kartik@11'
        }
      }));
      
      var mailOptions = {
        from: 'kartik.jain2021@vitbhopal.ac.in',
        to: email,
        subject: 'Trt to learn how to send mail',
        text: 'That was easy!'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });  
}

module.exports = {
  sendEmail
}

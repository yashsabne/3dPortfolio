require('dotenv').config();

const nodemailer = require('nodemailer');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;


// Middleware
app.use(cors());
app.use(bodyParser.json());
 
const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',  
  port: 587, 
  secure: false,  
  auth: {
    user: process.env.SMTP_USER,  
    pass: process.env.SMTP_PASS,  
  },
});
 
app.post('/send', (req, res) => {

  const { name, email, message } = req.body;
  console.log(email)

  const mailOptions = {
    from: `"${email}"`,
    to: process.env.OWNER_EMAIL,  
    subject: 'Contact Form Submission',
    text: email+ message,
    html: `<div> <strong> from ${email} </strong>, <p>  ${message} </p> </div>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Failed to send email');
    }
    console.log('Email sent:', info.response);
    res.status(200).send('Email sent successfully');
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



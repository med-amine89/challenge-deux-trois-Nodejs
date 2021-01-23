const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post('/send-mail', (req, res) => {

    // email message options
    const mailOptions = {
        from: 'mohamedaminetarchoun@gmail.com',
        to: 'hatem.dagbouj@fivepoints.fr',
        subject: 'Nodemailer test',
        text: 'Hey there, it’s our first message sent with Nodemailer to boulahnak thoura ;) ',
        // html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer'
    };
    // email transport configuration

    var transport = nodemailer.createTransport({
        service: "gmail",

        auth: {
            user: "mohamedaminetarchoun@gmail.com",
            pass: "medamine18011989bhnet"
        }
    });
    // send email
    transport.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.reponse);
            res.json({message: "email send sucessfully"});
        }
    });
});

module.exports = router;








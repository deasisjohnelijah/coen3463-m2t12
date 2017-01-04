var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET users listing. */

router.route('/')
    .get(function(req, res, next) {
    res.render("contact");
    })
    .post(function(req, res, next){
        var email = req.body.email;
        var name = req.body.name;
        var message = req.body.message;
        var transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // use SSL 
            auth: {
                user: 'deasisjohnelijah@gmail.com',
                pass: 'elijahlovesyou30'
            }
        });

        var mailOptions = {
            from: `${first} <${email}>`, // sender address 
            to: 'lanzosuarez@gmail.com', // list of receivers 
            subject: 'Website Inquiry', // Subject line 
            text: `You got an inquiry with the following details..\n 
                    name: ${first} \n
                    email: ${email} \n
                    message: ${message}\n
                    `,
            html: `<p>You got an inquiry with the following details..</p>
                    <ul>
                    <li>name: ${first} </li>
                    <li>email: ${email} </li>
                    <li>message: ${message} </li>
                    </u>
                    `,
        };
        // send mail with defined transport object 
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                return console.log(error);
            }
            console.log('Message sent: ' + info.response);
            res.sendStatus(200);
        });
    });

module.exports = router;
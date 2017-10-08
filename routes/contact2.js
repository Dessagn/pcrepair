var express = require('express');
var router = express.Router();
var mailer = require('nodemailer');
var xoauth2 = require("xoauth2"), xoauth2gen;
var smtpTransport = require('nodemailer-smtp-transport');

router.get('/', function(req, res, next) {
  res.render('contact', {
    title: 'Contact',
    header: 'Contact us' });
});

router.post('/sendMessage', (req, res, next) => {
  console.log('Here');
  var transporter = mailer.createTransport(smtpTransport({
    host: 'smtp.gmail.com',
    //port: 465,
    port: 587,
    //secure: true,
    secure: false,
    domain: 'gmail',
    auth: {
      xoauth2: xoauth2.createXOAuth2Generator({
        user: "carspeed1900@gmail.com",
        clientId: '730587839975-epjj082r2e62acmmj3aaj54uaqet2le2.apps.googleusercontent.com',
        clientSecret: 'Ze035rAJPp_bnoHar-bnFt0U',
        refreshToken: '1/4ZIiOhr8k5nLq-TN9mqRON6zK5u0gXjYhf7NMAvpeTw',
        accessToken:'ya29.GlvPBPAZY0zBTnGnrY6nC-czFCNmbjSQsW6QKIKIcgDfW3aCzzJenUD-vFyRw1wbDcPzXNCyrkJKU8X9gN3-fm7wnevJ8NHL2C6OR1R1F73QqwtAE_6OUgnRYgoq'
      })
    }
  }));

  var mailOptions = {
    from: "Kello Speed <carspeed1900@gmail.com>",
    to: 'jandekor3@gmail.com',
    subject: 'Hello From Tom\'s Place',
    text: 'You have got submission from ' +
          req.body.first_name + ' ' + req.body.last_name +
          ', Email: '+ req.body.email +
          'Message: ' + req.body.message,
    html:'<h3 class="center">You have got submission from</h3><ul><li> ' +
          req.body.first_name + ' ' + req.body.last_name +
          '</li><li>, Email: '+ req.body.email +
          '</li><li>Message: ' + req.body.message + '</li></ul>'
  }

  transporter.sendMail(mailOptions, (error, info) => {

    if(error) {
      console.log();
      console.log();
      console.log('*************************');
      console.log('*                       *');
      console.log('*       WE HAVE         *');
      console.log('*          A            *');
      console.log('*       PROBLEM!!       *');
      console.log('*                       *');
      console.log('*************************');
      console.log();
      console.log();
      res.redirect('/contact');
    }
    else{
    console.log('*****WE are here (SENT!!)*******');
    }
    //res.redirect('/')
    console.log('*****WE are here (4)*******');
  });
});

module.exports = router;

const functions = require('firebase-functions');
const emailjs = require('emailjs/email');
const pdfdocument = require('pdfkit');

exports.sendmailfn = functions.database.ref('/sendmail/{emailkey}').onWrite(event => {
    var doc = new pdfdocument();
    var email = event.data.val().emailid;

    doc.text('This email was sent as soon as the user logged in');
    doc.end();

    var server = emailjs.server.connect({
        user: 
        password:
        host: 'smtp.gmail.com',
        ssl: true
    });
    
    server.send({
        text: 'This mail was sent automatically when the user logged in',
        from: 'myself@thisvideo.com',
        to: emailid,
        subject: 'Wow, we can send an email this way',
        attachment: [
            {data: 'somerandomdata', type:'application/pdf', stream: doc, name: 'rules.pdf'}
        ]
    }, (err, message) => {
        if (err) 
            console.log(err)    
    })

})

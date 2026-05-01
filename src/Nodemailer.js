expr = require('express')
nm=require('nodemailer')
var trans  = nm.createTransport({
    host:'smtp.gmail.com',
    port:465,
    auth:{user:'XYZ@gmail.com',
        pass:'XXSFSFSFX'}
})

var mailoption={from:'XYZ@gmail.com',
                to:'ABC@gmail.com',
                subject:'This is auto Genret Mail',
                text:'Jambo',
                html:'<h1>Jambo</h1>',
                attachments:[{filename:'21.png',
                    path:'./21.png'
                }]
}
trans.sendMail(mailoption,(err,info)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(info)
    }
})
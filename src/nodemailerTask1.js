expr = require('express')
nm= require('nodemailer')
app= expr()
app.use(expr.static('../public',{index:'form5.html'}))
app.get('/data',(req,res)=>{
    trans = nm.createTransport({
        host:'Smtp.gmail.com',
        port:465,
        auth:{
            user:'xyz@gmail.com',
            pass:'xxxx xxxx xxxx'
        }
    })
    mailoption={
        from:'xyz@gmail.com',
        to :req.query.email,
        subject:'welcom user',
        html:`<h1> Hello ${req.query.fname}</h1>`


    }

    trans.sendMail(mailoption,(err,info)=>{
        if(info){
            res.send('Mail Send successfully.')
        }
        else{
            res.send('Mail Sanding Fail.')
        }
    })
})

app.listen(5555,()=>{
    console.log('http://localhost:5555')
})


expr  = require('express')
app = expr()
sess= require('express-session')
app.use(sess({secret:'This is Key',resave:false, saveUninitialized:false}))
app.get('/',(req,res)=>{
    if(req.session.a){
        req.session.a++
        res.send(  `you visited This page ${req.session.a} Times `)

    }
    else {
        req.session.a=1
        res.send( `Welcome User `)
    }


})

app.listen(5555,()=>{
    console.log('server Started')
})
const expr = require('express')
const app = expr()
const session = require('express-session')
app.use(session({
    saveUninitialized:true,
    resave:false,
    secret:'Thisissecret'
}))

app.get('/session',(req,res)=>{
    if(req.session.views){
        req.session.views++
        res.send(`yu visited this page ${req.session.views} times `)
    }
    else{
        req.session.views=1
        res.send(`You visited this page first time `)
    }
})

app.listen(3000,()=>{
    console.log('http://localhost:3000/session')
})
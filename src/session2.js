expr  = require('express')
app = expr()
sess= require('express-session')
app.use(sess({secret:'This is Key',resave:false, saveUninitialized:false}))
app.use(expr.static('../public', {index:'form2.html'}))
app.get('/savesession',(req,res)=>{
    
        req.session.fname=req.query.fname
        req.session.pass=req.query.pass
        res.redirect('/fetch')


})

app.get('/fetch',(req,res)=>{
    
        res.send(`welcome ${req.session.fname} <a href='/destroy'>Logout</a>`)


})
app.get('/destroy',(req,res)=>{
    
        req.session.destroy()
        res.redirect('/')


})


app.listen(5678,()=>{
    console.log('server Started')
    console.log('http://localhost:5678')
})
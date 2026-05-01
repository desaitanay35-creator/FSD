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
    
        if((req.session.fname=='admin') && (req.session.pass=='admin@123') ){
                res.send('welcome '+req.session.fname+' <br> <a href="/destroy">Logout</a>')
        }
        else{

                res.send(`Invalid Login <br> <a href="/">Return to login<a>`)

        }


})
app.get('/destroy',(req,res)=>{
    
        res.type('text/html')
        req.session.destroy()
        res.write('<h1>Session is Destroid</h1>'+'<br><a href="/">Login page <a>')
        res.send()


})


app.listen(5679,()=>{
    console.log('server Started')
    console.log('http://localhost:5679')
})
expr = require('express')
app= expr()
cp= require('cookie-parser')
app.use(cp())
app.use(expr.static('../public'))
app.use(expr.urlencoded({extend:true}))
app.post('/data',(req,res)=>{
    const fname=req.body.fname
    const pass=req.body.pass
    res.cookie('firstname',fname) 
    res.cookie('Password',pass)
    res.redirect('/user') 
})

app.get('/user',(req,res)=>{
    res.send(`welcome ${req.cookies.firstname} your password is : ${req.cookies.Password}`)
})
app.listen(5678,()=>{
    console.log('http://localhost:5678')
})
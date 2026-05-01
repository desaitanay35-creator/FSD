expr = require('express')
app= expr()
cp= require('cookie-parser')
app.use(cp())
app.get('/',(req,res)=>{
    res.cookie('fname','abc')
    res.cookie('lname','pqr')
    res.cookie('email','st@gmail.com',{maxAge:10000})
    res.cookie('contact','78798585')
    res.clearCookie('contact')
    res.send(req.cookies)

})
app.listen(5678,()=>{
    console.log('http://localhost:5678')
})
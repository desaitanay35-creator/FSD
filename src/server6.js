expr= require('express')
app=expr()
app.set('view engine','ejs')
app.use(expr.urlencoded())
app.get('/',(req,res)=>{
    res.render('form6')
})

app.post('/data',(req,res)=>{
    res.send(`${req.body.fname} has ${req.body.marks} Marks`)
})

app.listen(5678,()=>{
    console.log('http://localhost:5678')
})
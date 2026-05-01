expr= require('express')
app=expr()
app.set('view engine','ejs')
app.use(expr.urlencoded())
app.get('/',(req,res)=>{
    res.render('form6')
})

app.post('/data',(req,res)=>{
    fname= req.body.fname
    marks= req.body.marks
    res.render('out',{fname,marks})
})

app.listen(5678,()=>{
    console.log('http://localhost:5678')
})
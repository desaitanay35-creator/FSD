expr= require('express')
app=expr()
app.set('view engine','ejs')
app.use(expr.urlencoded())
app.post('/',(req,res)=>{
    res.render('EjsTask3')
})
app.post('/data',(res,req)=>{
    T1=req.body.marks1
    T2=req.body.marks2
    T3=req.body.marks3
    T4=req.body.marks4
    Total= parseInt(T1)+parseInt(T2)+parseInt(T3)+parseInt(T4)
    res.render('ejstask3out',{T1,T2,T3,T4,Total})
})
app.listen(5623,()=>{
    console.log('http://localhost:5623')
})
express= require('express')
var app = express()
const a= (req,res,next)=>{
    req.uname='abc'
    console.log('Uname inserted ')
    next()
}
const b=(req,res,next)=>{
    req.mark=20+3
    console.log("markes inserted ")
    next()
}
app.use('/data',a,b)
app.get('/data',(req,res)=>{
    res.send("Username "+req.uname+" updated marks "+req.mark)
})

app.listen(5678,()=>{
    console.log('http://localhost:5678')
})
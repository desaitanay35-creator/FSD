express= require('express')
var app= express()
// app.use(express.urlencoded())
app.get('/',(req,res)=>{
    res.send('<form action="/data" mathod="get"> Username: <input type="text" name="uname"> <input type="submit"></from> ')
})

app.get('/data',(req,res)=>{
    uname=req.query.uname
    res.send(`Welcome ${uname}`)
})

app.listen(5623,()=>{
    console.log("Started server")
    console.log("http://localhost:5623")
})
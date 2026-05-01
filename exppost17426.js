express= require('express')
var app= express()
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.send('<form action="/data" method="post"> Username: <input type="text" name="uname"> <input type="submit"></from> ')
})

app.post('/data',(req,res)=>{
    uname=req.body.uname
    res.send(`Welcome ${uname}`)
})

app.listen(5623,()=>{
    console.log("Started server")
    console.log("http://localhost:5623")
})
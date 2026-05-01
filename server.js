express= require('express')
var app= express()
app.get('/',(req,res)=>{
    // res.set('content-type','text/html') or u can write
    res.type('text/html')
    res.send('<h1>Hello </h1>')
})
app.listen(3000,()=>{
    console.log('server Created')
    console.log('http://localhost:3000')
})
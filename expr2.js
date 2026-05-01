express= require('express')
var app= express()
app.get('/',(req,res)=>{
    // res.set('content-type','text/html') or u can write
    res.type('text/html')

    let obj={name:'abc',age:22}
    // res.write(JSON.stringify(obj))
    res.send('<H1>hello </h1>')
    // res.json(obj)

})

app.get('/ABOUT',(req,res)=>{
    // res.set('content-type','text/html') or u can write
    res.type('text/html')

    let obj={name:'abc',age:22}
    // res.write(JSON.stringify(obj))
    res.send('<h1>About Page </h1>')
    // res.json(obj)

})
app.listen(3000,()=>{
    console.log('server Created')
    console.log('http://localhost:3000')
})
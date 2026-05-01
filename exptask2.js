express= require('express')
var app = express()
let obj=[
        {name:'Tanay',age:20},
        {name:'Jay',age:21},
        {name:'Bhatya',age:25}
    ]

app.get('/',(req,res)=>{
    res.send(obj)
})

app.get('/sorted',(req,res)=>{
    res.type('text/html')
    const ans=obj.sort((a,b)=>b.age-a.age)
    for(i of ans){
        res.write('<table><tr><th>'+i.name+'<th></tr></table>')
    }
})
app.listen(3002,()=>{
    console.log('http://localhost:3002')
})
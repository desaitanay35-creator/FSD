const expr= require('express')
const app= expr()
const cp = require('cookie-parser')
app.use(cp())
app.use(expr.static('../public',{index:'203.html'}))
app.get('/calc',(req,res)=>{
    if(req.query.num1<=0 || req.query.num2<=0 ){
        res.send('Number must grater then 0')
        // res.redirect('/')
    }
    if(!req.query.dropdown){
        // res.write('You have not selected any formula')
        res.send('You have not selected any formula')
        // res.redirect('/')
    }

    const n1= parseInt(req.query.num1)
    const n2= parseInt(req.query.num2)
    res.cookie('NUM1',n1,{maxAge:50000})
    res.cookie('NUM2',n2,{maxAge:50000})

    let ans
    switch(req.query.dropdown){
        case 'sum':ans=n1+n2
        break
        case 'multi':ans=n1*n2
        break
        case 'sub' :ans=n1-n2
        break
        case 'div': ans=n1/n2
        break
        
    }
    res.send(`<h1>${req.query.dropdown} of ${n1} & ${n2} is ${ans}</h1>`)
})

app.listen(5001,()=>{
    console.log('http://localhost:5001')
})
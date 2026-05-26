const expr = require('express')
const app= expr()
const cp = require('cookie-parser')
app.use(cp())
app.use(expr.static('../public',{index:'209.html'}))
app.use(expr.urlencoded({extended:true}))

app.get('/details',(req,res)=>{
    const {name,email,gender} = req.query
    res.cookie('register',JSON.stringify({name,email,gender}),{maxAge:15000})
    res.send(`Cookie added successfuly <a href='/data'>Details</a>`)

})


app.get('/data',(req,res)=>{
    const cookie = req.cookies.register 
    const {name,email,gender} = JSON.parse(cookie)
    res.send(`
        Name :${name}
        Email :${email}
        <a href='/'>Logout</a>`)
})

app.listen(5003)
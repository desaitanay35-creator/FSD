expr= require('express')
var app= expr()
app.use(expr.static('./'))
app.listen(5678,()=>{
    console.log('Server On')
    console.log('http://localhost:5678 On')
})
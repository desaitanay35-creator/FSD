express= require('express')
var app= express()

app.get('/flights/:from/:to',(req,res)=>{
    res.send('user with id='+req.params.from +" to "+req.params.to)
    // res.send('user with id='+req.params.id)
})
app.listen(5007)
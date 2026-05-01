expr= require('express')

app= expr()
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.render('Ejs2')
})
app.listen(5663,()=>{
    console.log('http://localhost:5663')
})
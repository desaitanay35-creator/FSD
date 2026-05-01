expr = require('express')
app= expr()
multer=require('multer')
app.use(expr.static('../public',{index:'form4.html'}))
storage= multer.dislStorage({destination:'Jambo',filename:(req,file,cb)=>{
    
}})
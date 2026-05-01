expr=require('express')
app=expr()
app.use(expr.static("../public",{index:"form3.html"}))
multer=require('multer')
storage=multer.diskStorage({destination:"hello",filename:function(res,file,cb){cb(null,file.originalname)}})
upload=multer({storage})
app.post('/data',upload.single('mypic'),(req,res)=>{
    file=req.file
    if(file){
        res.send(`File Uploaded ${file.originalname}`)
    }
    else{res.send("No data uploaded")}
})
app.listen(5678)
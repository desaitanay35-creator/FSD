expr = require('express')
app= expr()
multer= require('multer')
app.use(expr.static('../public',{index:'index.html'}))
storage=multer.diskStorage({destination:'Jambo',filename:(req,file,cb)=>{
    cb(null,file.originalname)
}})

upload=multer({storage})
app.post('/data',upload.array('myfile',3),(req,res)=>{
    let file= req.files
    if (file){
        for(i of file ){
            res.write(`${i.originalname} will  uploded\n`)
        }
        res.send()
    }
    else{
        res.send("can't uplode File")
    }
})

app.listen(5656,()=>{
    console.log('http://localhost:5656')
})
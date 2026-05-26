const expr= require('express')
const app= expr()
const multer= require('multer')
const path= require('path')
app.use(expr.static('../public',{index:'227.html'}))

const storage = multer.diskStorage({
    destination:'myfil',
    filename:(res,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload=multer({storage})


app.post('/upload',upload.single('myfile'),(req,res)=>{
    res.send(`Uploded  <a href='/download/${req.file.filename}'>Download</a> <br>  <a href='/see/${req.file.filename}'>See</a>`)
})
app.get('/download/:filename',(req,res)=>{
    const fetchfile = path.join(__dirname,'myfile',req.params.filename)

    res.download(fetchfile)
    
})



app.get('/see/:filename',(req,res)=>{
    const fetchpath=path.join(__dirname,'myfil',req.params.filename)
    res.sendFile(fetchpath)
})

app.listen(5005)
const express = require('express');
const multer = require('multer');
// const path = require('path');
const app = express();
app.use(express.static('../public',{index:'227.html'}))

const storage = multer.diskStorage({
    destination:'Data',
    filename:function(req,file,cb){
        cb(null,Date.now()+"-"+file.originalname)
    }
})
const upload= multer({storage})

app.post('/',upload.single('myfile'),(req,res)=>{
    const file= req.file
    res.send("File Uploded successfully "+file.filename)
})

app.listen(5004)
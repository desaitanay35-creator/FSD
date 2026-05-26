// const expr = require('express')
// const app = expr()
// const cp = require('cookie-parser')
// app.use(cp())
// app.get('/cookie',(req,res)=>{
//     res.cookie('Name','Express JS')
//     res.cookie('fname','Tanay')
//     res.cookie('Lname','Desai')
//     res.cookie('id','123',{expires:new Date(Date.now()+10000)})
//     res.cookie('email','desaitanay@gmail.com',{maxAge:3000})
//     res.clearCookie('fname')
//     res.send(req.cookies)
    
// })

// app.listen(5565,()=>{
//     console.log('http://localhost:5565/cookie')
// })



const expr=require("express"); 
const app=expr(); 
const sess=require("express-session"); 
app.use(sess({ 
resave:true, 
saveUninitialized:false, 
secret:"psp123" 
})); 
app.get("/",(req,res)=>{ 
if(req.session.page_views) { 
req.session.page_views++; 
res.send(`<h1 style="color:blue;"> You have visited page ${req.session.page_views} times <h1>`); 
} 
else{ 
req.session.page_views=1, 
res.send(`<h1 style="color:green;"> Welcome! Thank you for visiting our website!<h1>`);     
} 
}); 
app.listen(8003,()=>{ 
console.log("server running at 8003"); 
}); 
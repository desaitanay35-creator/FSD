// Write an express.js script to define 2 pages. 1st page has username 
// and password. Store this username to cookie on 2nd page. Cookie 
// must stay live for 1 day.


const expr = require('express')
const app= expr()
const cp = require('cookie-parser')
app.use(cp())
app.use(expr.static('../public',{index:'202.html'}))
const oneday= 1000*60*60*24
app.get('/cookie',(req,res)=>{
    res.cookie('uname',req.query.uname,{maxAge:oneday})
    
})
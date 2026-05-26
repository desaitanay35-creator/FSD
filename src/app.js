// var express = require('express'); 
// var app = express(); 
// app.use(express.static( '../public')); 
//  app.listen(8081, () =>{ 
//     console.log("server start")}) 

const expr = require ("express") 
const app = expr(); 
// From here it will load HTML file 
// from public  folder but name of file 
// must be index.html 
app.use(expr.static("../public",{index:'form.html'})) 
app.listen (5200) 
// write a sript to meet foll requirements. 
// 1) create index.html page and open it on localhost
// 2) after clicking submit button, it should jump to 
// savesessionpage.store username in session.
// 3) After saving session, redirect to fetchsession page and read session 
// value. put a logout link button here.
// 4) destroy the session on this page and redirect to index.html

const expr = require('express')
const app= expr()
const session = require('express-session');

app.use(expr.urlencoded({extended:true}))
app.use(expr.static('../public',{index:'index197.html'}))
app.use(session({
   secret:'thisidsecret',
    saveUninitialized:true,
    // cookie:{maxAge:30000},
    resave:false 

}))

app.get('/savesession',(req,res)=>{
    req.session.uname= req.query.uname
    req.session.pass= req.query.pass
    req.session.radio= req.query.abc
    console.log('Session Stored')
    res.redirect('/fetchsession')
})

app.get('/fetchsession',(req,res)=>{
    res.send(`<p>Username: ${req.session.uname} and choice : ${req.session.radio}</p><a href="/logout">Logout</a>`)
   

})
app.get('/logout',(req,res)=>{
    req.session.destroy(err=>(res.redirect('/')))
})


app.listen(3000,()=>{
    console.log('http://localhost:3000')
})


// const express = require('express');
// const session = require('express-session');
// const app = express();
// app.use(express.urlencoded({ extended: true }));
// app.use(session({ secret: 'secret-key', resave: false, saveUninitialized: true }));
// app.get('/', (req, res) => {
//   res.send(`
//     <form action="/savesession" method="post">
//       <input name="username" placeholder="Username" required><br>
//       <button type="submit">Save Session</button>
//     </form>
//   `);
// });
// app.post('/savesession', (req, res) => {
//      req.session.username = req.body.username;
//   res.redirect('/fetchsession');
// });
// app.get('/fetchsession', (req, res) => {
//   if (!req.session.username) return res.send('No session saved');
//   res.send(`<p>Username: ${req.session.username}</p><a href="/logout">Logout</a>`);
// });
// app.get('/logout', (req, res) => {
//   req.session.destroy(err => {
//     res.redirect('/');
//   });
// });
// app.listen(3000,()=>{
//     console.log('http://localhost:3000')
// });

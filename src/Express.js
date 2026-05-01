expr = require('express')
app = expr()
cp = require('cookie-parser')
app.use(cp())
app.use(expr.static('../public', {
 index: "index2.html"
}))
app.use(expr.urlencoded({
 extend: true
}))
app.post('/data', (req, res) => {
 const {
  name,
  email,
  msg,
  rating
 } = req.body
 const fb = {
  name,
  email,
  msg,
  rating
 }
 res.cookie('feedback', fb, {
  maxAge: 10000
 })
 res.send(`<h1>Thank you for feedback </h1> <a href='/show-fb'>show-fb</a>`)
})
app.get('/show-fb', (req, res) => {
 data = req.cookies.feedback
 if (data) {
  res.send(`Name:${data.name} Email:${data.email} message:${data.msg} Rating:${data.rating}`)
 } else {
  res.send('no data found')
 }
})
app.listen(5673, () => {
 console.log('http://localhost:5673')
})
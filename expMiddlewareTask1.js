// Write express JS script to load in html file* having username, password and submit button. On clicking of submit button, it should jump on check page using post method. Implement an authentication middleware that checks whether the entered username is "admin" and the password is "1234". If the credentials are correct, the application should display the message "Login Successful". For any other username it should stay on same middleware to print warning message in red color. 

exp = require('express')
var app= exp()
app.use(exp.urlencoded())
app.get('/',(req,res)=>{
    res.send('<form action="/data" method="post"> Username: <input type="text" name="uname"><br> Password : <input type="pass"> <br> <input type="submit"></from> ')
})

app.post('/check',(req,res)=>{
    
        res.send("<h1 style='color:green; text-align:center;'>Login Successful</h1>");
    
})
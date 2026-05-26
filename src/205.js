const expr= require('express')
const app= expr()
const cp = require('cookie-parser')
app.use(cp())
const student_result = [
    {name:'Tanay',roll_no:101, Division:'B3',Percentage:85,Grade:'A'},
    {name:'om',roll_no:102, Division:'B6',Percentage:75,Grade:'B'},
    {name:'yug',roll_no:103, Division:'B4',Percentage:95,Grade:'A'}
]
 

app.get('/result',(req,res)=>{
    res.write(`<h1> STUDENT  DETAILS </h1>`)
    for(student of student_result){
        res.write(`<p>Name : ${student.name}</p>
        <p>Roll : ${student.roll_no}</p>
        <p>Devision : ${student.Division}</p>
        <p>Percentage : ${student.Percentage}</p>
        <p>Grade : ${student.Grade}</p>`)
    }
})

app.get('/result/:roll_no',(req,res)=>{
    const roll = parseInt(req.params.roll_no)
    const student= student_result.find(s =>s.roll_no=== roll)
    if(!student){
        res.send('No student found ')
    }
    res.send(`<h1> STUDENT  DETAILS </h1>
        <p>Name : ${student.name}</p>
        <p>Roll : ${student.roll_no}</p>
        <p>Devision : ${student.Division}</p>
        <p>Percentage : ${student.Percentage}</p>
        <p>Grade : ${student.Grade}</p>`
    )
})

app.listen(5002,()=>{
    console.log('http://localhost:5002/result')
})
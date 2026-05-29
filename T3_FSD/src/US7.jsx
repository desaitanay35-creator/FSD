import { useState } from "react";
function US7(){
    const [data,setData]=useState({})
    const [result,setResult]=useState(0)
    const hf= (e)=>{
        const {name,value}=e.target
        setData({...data,[name]:value})
    }

    const add=()=>{
        setResult(parseInt(data.n1)+parseInt(data.n2))
    
    }
    const Mul=()=>{
        setResult(parseInt(data.n1)*parseInt(data.n2))
    
    }
    const Div=()=>{
        setResult(parseInt(data.n1)/parseInt(data.n2))
    
    }

    return(
        <>
        <input type="number" name="n1" onChange={hf}/>
        <input type="number" name="n2" onChange={hf}/>
    
        {/* <h1>First name : {data.fname}</h1>
        <h1>Last name : {data.lname}</h1> */}

        <button onClick={add}>Sum</button>
        <button onClick={Mul}>Mul</button>
        <button onClick={Div}>Div</button>
        <h1>Answer of {data.n1} & {data.n2} is {result}</h1>
        </>
    )


}


export default US7

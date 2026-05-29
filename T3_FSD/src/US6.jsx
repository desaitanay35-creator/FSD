import { useState } from "react";
function data(){
    const [data,setData]=useState({})
    // const [result,setResult]
    const hf= (e)=>{
        const {name,value}=e.target
        setData({...data,[name]:value})
    }
    return(
        <>
        <input type="text" name="fname" onChange={hf}/>
        <input type="text" name="lname" onChange={hf}/>
    
        <h1>First name : {data.fname}</h1>
        <h1>Last name : {data.lname}</h1>
        </>
    )


}


export default data
import { useState } from "react";
function USTask11(){
    const [pass,Setpass]=useState({})

    const he= (e)=>{
        const {name,value}=e.target
        Setpass({...pass,[name]:value})
    }
    const hs= (e)=>{
        e.preventDefault()
        if(pass.pass==pass.cpass){
            alert('Welcome User')
        }
        else{
            alert('wrong password')
        }
    }

    return(
        <>
        <form onSubmit={hs}>
            <input type='email' name='email' onChange={he} />
            <input type='Password' name='pass' onChange={he} />
            <input type='Password' name='cpass' onChange={he} />
            <input type='Submit' value='Submit' />
        </form>
        </>
    )
}

export default USTask11
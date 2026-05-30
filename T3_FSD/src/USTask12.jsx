// Task -12

// Create react app which contains form with fields Name, Email Id, Password and Confirm Password and submit button. 

// 1.	When the form submitted the values of password and confirm password fields must be same else it will give an error message in alert box.  

// 2.	Also, length of the password must be greater than 8 else it will give an error message in alert.

// 3.	If form submitted successfully then display entered name and email id in alert box.

import { useState } from "react";
function US12(){
    const [pass,Setpass]=useState({})

    const he= (e)=>{
        const {name,value}=e.target
        
        Setpass({...pass,[name]:value})
    }
    const hs= (e)=>{
        e.preventDefault()
        if(pass.pass==pass.cpass && pass.pass.length>=8 && pass.cpass.length>=8){
            
                alert(`Welcome ${pass.email} `)
            
            
        }
        else{
            alert('Pass must be >=8')
            
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

export default US12
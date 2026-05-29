import { useState } from "react";
function US9(){
    const[data,setdata]=useState({})
    const hs=(e)=>{
        e.preventDefault()
        alert(`Welcome ${data.fname} ${data.lname} ${data.email}`)

    }
    const hc =(e)=>{
        const {name,value}=e.target
        setdata({...data,[name]:value})
    }
    return(
        <>
        <form onSubmit={hs}>
            <input type="text" name="fname" onChange={hc} />
            <input type="text" name="lname" onChange={hc} />
            <input type="email" name="email" onChange={hc} />
            {/* <button type="submit">Submit</button> */}
            <input type="submit"/>
        </form>
        </>
    )
}

export default US9
import { useState } from "react";
function USI(){
    const [count,setcount]= useState(0)
    const inc=()=>{
        if(count<10){
        setcount(count+1)
        }        
    }
    const dec=()=>{
        if(count>0){
            setcount(count-1)
        }
    }
    return(
        <>
        <button onClick={inc}>INC me </button>
        <h1>User click {count} times</h1>
        <button onClick={dec}>DEC me </button>
        </>
    )
}
export default USI
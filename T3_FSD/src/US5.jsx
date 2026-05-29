
import { useState } from "react"
function us5(){
    const[obj,setobj]=useState({'brand':'BMW','color':'titenblue','model':'440i','year':'2018'})
    const hs= ()=>{
        setobj({'brand':'odi','color':'red','model':'z10','year':'2015'})
    }
    return(
        <>
        <h1>My car is {obj.brand} {obj.color} {obj.year}</h1>
        <button onClick={hs}>car</button>
        </>
    )
}

export default us5
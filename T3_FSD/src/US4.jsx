import { useState } from "react";
import img1 from './assets/1.png'
import img2 from './assets/2.png'

function US4(){
    const [pic,setpic]=useState(img1)
    const hs= ()=>{
        if(pic==img1){
            setpic(img2)
        }
        else{
            setpic(img1)
        }
    }
    return(
        <>
        <img src={pic} height='400px' width='400px' />
        <button onClick={hs}>Change Image</button>
        </>
    )
}

export default US4
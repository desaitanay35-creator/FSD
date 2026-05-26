import { useState } from "react";
function US3(){

    const [style,setstyle]=useState('tomato')
    const [count,setcount]=useState(0)
    const hs=()=>{
       if(count%2==0){
           setcount(count+1)
         setstyle('cyan')
       }
       else{
           setcount(count+1)
        setstyle('tomato')
       }
    }
    // const hs=()=>{
    //    if(style=='tomato'){
          
    //      setstyle('cyan')
    //    }
    //    else{
           
    //     setstyle('tomato')
    //    }
    // }

    return(
        <>
        <button onClick={hs}>Click me</button>
        <h1 style={{backgroundColor:style}}> Hell color id {style}</h1>
        </>
    )
}
export default US3
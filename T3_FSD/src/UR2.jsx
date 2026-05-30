import { useReducer } from "react";
function UR2(){
    const reducer=(state,action)=>{
       return state+action
    }
    const [state,dispatch]= useReducer(reducer,20)

    return(
        <>
        <h1>{state}</h1>
        <button onClick={()=>{
            dispatch(state)
        }}>INC</button>
        </>
    )
}

export default UR2
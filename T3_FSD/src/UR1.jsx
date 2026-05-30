import { useReducer } from "react";
function UR1(){
    const [state,dispatch]= useReducer(reducer,0)
    function reducer(state,action){
        if(action.type==='increment'){
            return state+1
        }
        if(action.type==='Decrement'){
            return state-1
        }
        if(action.type==='rest'){
            return 0
        }

    }

    return(
        <>
        <h1>{state}</h1>
        <button onClick={()=>{
            dispatch({type:'increment'})
        }}>INC</button>
        <button onClick={()=>{
            dispatch({type:'Decrement'})
        }}>DEC</button>
        <button onClick={()=>{
            dispatch({type:'rest'})
        }}>REST</button>
        </>
    )
}

export default UR1
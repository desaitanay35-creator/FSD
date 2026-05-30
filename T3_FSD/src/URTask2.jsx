import { useReducer } from "react";
function URT2(){
    const [state,dispatch]= useReducer(reducer,{n1:0,n2:0,result:0})
    const vf=(e)=>{
        state.n1=e.target.value
    }
    const vl=(e)=>{
        state.n2=e.target.value
    }
    function reducer(state,action){
        if(action.type=='add'){return{...state,result: parseInt(state.n1)+parseInt(state.n2)}}
        if(action.type=='sub'){return{...state,result: parseInt(state.n1)-parseInt(state.n2)}}
        if(action.type=='mul'){return{...state,result: parseInt(state.n1)*parseInt(state.n2)}}
        if(action.type=='div'){return{...state,result: parseInt(state.n1)/parseInt(state.n2)}}
      
   

    }

    return(
        <>
        <h1>{state.result}</h1>
        <input type="number" name="num1" onChange={vf} />
        <input type="number" name="num2"  onChange={vl}/>
        <button onClick={()=>{
            dispatch({type:'add'})
        }}>Addition</button>
        <button onClick={()=>{
            dispatch({type:'sub'})
        }}>SUB</button>
        <button onClick={()=>{
            dispatch({type:'mul'})
        }}>MUL</button>
        <button onClick={()=>{
            dispatch({type:'div'})
        }}>DIV</button>
        </>
    )
}

export default URT2






//     const [num1, setNum1] = useState(0)
//     const [num2, setNum2] = useState(0)
//     const [result, dispatch] = useReducer(reducer, 0)
//     function reducer(state, action) {
//         switch (action.type) {
//             case "add":
//                 return num1 + num2
//             case "subtract":
//                 return num1 - num2
//             case "multiply":
//                 return num1 * num2
//             case "divide":
//                 return num1 / num2
//             default:
//                 return state
//         }
//     }
//     return (
//         <div>
//             <h1>Result: {result}</h1>
//             <input type="number" value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
//             <input type="number" value={num2} onChange={(e) => setNum2(Number(e.target.value))} />
//             <button onClick={() => dispatch({ type: "add" })}>Add</button>
//             <button onClick={() => dispatch({ type: "subtract" })}>Subtract</button>
//             <button onClick={() => dispatch({ type: "multiply" })}>Multiply</button>
//             <button onClick={() => dispatch({ type: "divide" })}>Divide</button>
//         </div>
//     )
// }

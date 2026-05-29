// Task that the Empty sate Do not Add in todo list 
import { useState } from "react";

function US8() {
    const [task, settask] = useState("")
    const [todo, settodo] = useState([])
    
    const addtask = () => {
        settodo([...todo, {id:Date.now(), name: task }])
        settask("")
    }

    const deletetask = (id) => {
        settodo(todo.filter((task)=>task.id!==id))
    }

    return (
        <>
            <input type="text" value={task} onChange={(e)=>settask(e.target.value)}></input>
            <button onClick={addtask}> Add </button>
            {
                todo.map((t) => (
                    <div key={task.id}>
                        <h3>{t.name}</h3>
                        <button onClick={() =>
                            deletetask(t.id)}> Delete </button>
                    </div>
                ))
            }
        </>
    )
}
export default US8


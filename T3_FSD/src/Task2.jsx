import Prop2 from "./Prop2"

function Task2() {
    return (
        <>
            <h1>Task 2</h1> 
            <p>Create a React application using props to display student details.
            Requirements:
            1. 	Create a parent component Prop1.js. (Task2.jsx)
            2. 	Pass the following data to child component Prop2.js using props:
            o	student name
            o	roll number
            o	marks
            3. 	In child component:
            o	display student details
            o	increase marks by 1 and display updated marks
            </p>

            <h1>Solution</h1>

            <Prop2 name="Aryan" roll={96} marks={25} />
        </>
    )
}

export default Task2
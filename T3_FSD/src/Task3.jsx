import Example from "./Example";

function Task3() {

    let details = {Student_name : "Aryan", University_name : "LJ"};

    return (
        <>
            <h1>Task 3</h1>
            <p>Create a React application using props to pass an object from one component to another component.
            Requirements:
            1. 	Create a parent component Example1.js. (Task3.jsx)
            2. 	Create an object named Details containing:
            o	Student_name
            o	University_name
            3. 	Pass the Details object to child component Example.js using props.
            4. 	In child component:
            o	receive the object using props
            o	display student name and university name in browser
            </p>

            <h1>Solution</h1>   

            <Example details={details} />

        </>
    )
}

export default Task3
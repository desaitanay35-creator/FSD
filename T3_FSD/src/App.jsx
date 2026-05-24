import './App.css'
import Props from './Props.jsx'
import Task1 from './Tasks/Task1.jsx'
import Task2 from './Tasks/Task2.jsx'
import Task3 from './Tasks/Task3.jsx'
import Task4 from './Tasks/Task4.jsx'
import Mapfn from './Mapfn.jsx'
import Events from './Events.jsx'

function App() {
  let name = 'abc';
  let mark = [1,2,3];
  
  return (
    <>

      {/* <h1>Hello World</h1>
      <h2>My name is {name}</h2>
      <h2>My name is "{name}"</h2>
      <h2>My name is {"{name}"}</h2>
      <h2>My marks are {mark}</h2>
      <h2>My marks are {mark.join(', ')}</h2>
      <h2>My name is {name.toUpperCase()}</h2>
      <p>{5+5}</p>
      <p>{5+"5"}</p> */}

      {/* Inside the curly bracket , use javascript expression. 
      We can use any valid javascript code inside the bracket. 
      It will be evaluated and the result will be rendered on the screen */}

      {/* <Props /> */}

      {/* <Task1 /> */}
      {/* <Task2 /> */}
      {/* <Task3 /> */}
      {/* <Task4 /> */}

      {/* <Mapfn /> */}

      <Events />
    </>
  )
}

export default App

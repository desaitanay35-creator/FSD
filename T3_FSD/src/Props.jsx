import CN from './CN.jsx'
import CN2 from './CN2.jsx'

function Props() {
    let name ="abc";
    let obj ={name:"mobile", price:20000};

    return (
        <>
            <h1>Props</h1>
            <CN name="abc" age="23"/>
            <CN name={name} age={23}/>
            <CN2 data={obj}/>
        </>
    )
}

export default Props
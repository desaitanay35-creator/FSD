function EV(){
    
    const a= (e)=>{
        e.preventDefault()
        alert(document.getElementById('text').value)

    }

    const b= (e)=>{
        document.getElementById('data').innerHTML=e.target.value

    }

    const c=(e)=>{
        document.getElementById('data2').innerHTML='Single click'
    }
    const E=(e)=>{
        document.getElementById('data2').innerHTML='Double click'
    }

    return(
        <>
        <form onSubmit={a}>
        <input type="text" id="text" onChange={b}/>
        <input type="submit" value="Submit" />
        </form>

        <h1 id='data'></h1>
        <button onClick={c} onDoubleClick={E}>Click/Doubleclick</button>
        <h3 id='data2'>change as per cick </h3>
        </>
    )

}
export default EV
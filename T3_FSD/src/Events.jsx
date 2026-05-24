function Events() {
    const ocl = () => {
        alert('I am event onClick')
    }
    const odc = () => {
        alert('I am event onDoubleClick')
    }
    const och = (e) => {
        alert('I am event onChange and value is : ' + e.target.value)
    }

    const os = (e) => {
        e.preventDefault();
        alert('I am event onSubmit and value is : ' + e.target.name.value)
    }

    return (
        <>
            <button onClick={ocl}>Click Me</button>
            <button onDoubleClick={odc}>Double Click Me</button>
            <input type="text" onChange={och} />
            <form onSubmit={os}>
                <input type="text" name="name" />
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default Events
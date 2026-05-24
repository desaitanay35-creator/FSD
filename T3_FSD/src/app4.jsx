function M(){
    const arr=[2,4,6,8,10]
    return (
        <>
        {
            arr.map((val,i)=>{
                return(
                    <div key={i}>
                    <h1>{val}*5= {val*5}</h1>
                    </div>
                )
            })
        }
        </>
    )
}
export default M
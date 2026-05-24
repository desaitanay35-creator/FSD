function Mapfn() {
    let obj = [{id:1, name:"abc", marks:22},
                {id:2, name:"def", marks:23},
                {id:3, name:"ghi", marks:22}
    ]

    return (
        <>
            <h1>Map Function</h1>
            {obj.filter((i)=>i.marks==22).map((i)=>{
                return (
                    <div key={i.id}>
                        <h2>{i.name.toUpperCase()}</h2>
                        <h3>{i.marks + 1}</h3>
                    </div>
                )
            })}
        </>
    )
}

export default Mapfn
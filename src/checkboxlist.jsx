import { useState } from "react";

const Checkboxlist=(props)=>{
const [checked, setchecked] = useState(false)

function handlecheck() {
    setchecked(!checked)
}

    return (
        <>
            <input onClick={handlecheck} type="checkbox"></input>
            <span style={{display:"block", textDecoration: checked ? "line-through" : "none" }}>{props.list}</span>
        </>
    )
}

export default Checkboxlist
import { useState } from "react"

const Arraycomp = () => {

    const [values, setvalue] = useState("")
    const [arr,setarr] = useState( ["apple", "banana","hello", "grapes", "mango", "orange"])

    const inputevent=(eve)=>{
        setvalue(eve.target.value)
        console.log(values)
    }

    function submit(){
        setarr([...arr,values])
        setvalue("")

    }
    return (
        <>
            <input type="text" value={values} onChange={inputevent} placeholder="enter value"></input>
            <button onClick={submit}>submit</button>
            <h1>hiii</h1>
            <ul>
                {arr.map((item)=>{
                   return <li>{item}</li>
                })}
            </ul>
        </>
    )

}
export default Arraycomp
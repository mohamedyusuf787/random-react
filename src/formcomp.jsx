import { useState } from "react"

function FormComp() {
    const [fname, setfname] = useState("")
    const [lname, setlname] = useState("")
    const [result,setresult]=useState("result")


    function fnamevalue(eve) {
        setfname(eve.target.value)
    }
    function lnamevalue(eve) {
        setlname(eve.target.value)
    }
    function resultvalue(){
        setresult(`${fname} ${lname}`)
    }


    // function submit() {
    //     let submitbtn = document.getElementById("submitbtn")
    //     let result = document.getElementById("result")
    //     result.innerHTML = fname + " " + lname
    // }

    return (
        <>
            <input type="text" onChange={fnamevalue}></input>
            <input type="text" onChange={lnamevalue}></input>
            <input type="submit" onClick={resultvalue}></input>
            <h1>{result}</h1>
        </>
    )
}

export default FormComp
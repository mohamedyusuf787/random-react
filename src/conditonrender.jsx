import { useState } from "react";
const Conditonrender = () => {
    const [handleclr,sethandleclr] =useState(true);

    function handleonClick(){
        sethandleclr(!handleclr)
       { // const box = document.querySelector('.box');
        // const currentColor = box.style.backgroundColor;
        // box.style.backgroundColor = currentColor === 'red' ? 'blue' : 'red';
         }
    }

    return(<>
    <div className="box" style={{backgroundColor:handleclr?"red":"blue", width:"100px",height:"100px"}}></div>
    <button onClick={handleonClick}>change</button>
    </>)
}
export default Conditonrender;
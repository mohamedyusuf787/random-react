import { useState } from "react"
import Checkboxlist from "./checkboxlist"


const Checkbox = () => {
    const lists = ["eating", "sleeping", "coding", "reading"]

    return (
        <>
            <h1>List of Activities</h1>
            {
                lists.map(function (list, index) {
                    return <Checkboxlist list={list}></Checkboxlist>
                })
            }
        </>
    )

}

export default Checkbox
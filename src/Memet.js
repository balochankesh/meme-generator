import React from "react"

function Memet(props){
    return(
        <img src={props.item.url} alt={props.item.name} height="150" />
    )
}

export default Memet

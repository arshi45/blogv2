import React from "react";


export default Card = (props) =>{
    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.blog}</p>
            <p>{props.name}</p>
        </div>
    )
}
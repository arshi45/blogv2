import React from "react";
import styles from "./card.module.css";

const Card = (props) =>{
    return(
        <div className={styles.Card}>
            <h1 className={styles.title}>{props.title}</h1>
            <p className={styles.post}>{props.blog}</p>
            {/* <p className={styles.name}>{props.name.id}</p> */}
        </div>
    );
}

export default Card;
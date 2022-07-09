import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../db";
import styles from "./card.module.css";

const Card = (props) =>{
    const navigate = useNavigate();
    const deleteItem = async (e) =>{
        const postDoc = doc(db, "blogs",e.target.value)
        await deleteDoc(postDoc);
        navigate("/");
    }
    return(
        <div className={styles.Card}>
            <div className={styles.top}>
                <h1 className={styles.title}>{props.title}</h1>
                {localStorage.getItem("a") && props.uid === auth.currentUser.uid?<button value={props.keyID} onClick={deleteItem}>🗑</button>:null}
            </div>
            <p className={styles.post}>{props.blog}</p>
            <h5 className={styles.name}>@{props.name.name}</h5>
        </div>
    );
}

export default Card;
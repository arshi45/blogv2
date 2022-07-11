import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../db";
import styles from "./card.module.css";

const Card = (props) =>{
    const navigate = useNavigate();
    const initial = props.blog.length;
    const [word,setWord] = useState(props.blog.length);

    const deleteItem = async (e) =>{
        const postDoc = doc(db, "blogs",e.target.value)
        await deleteDoc(postDoc);
        navigate("/");
    }

    const handleClick = () => {
        if(word>250){
            setWord(1);
        }
        else{
            setWord(350);
        }
    }

    return(
        <div className={styles.Card}>
            <div className={styles.top}>
                <h1 className={styles.title}>{props.title}</h1>
                {localStorage.getItem("a") && props.uid === auth.currentUser.uid?<button value={props.keyID} onClick={deleteItem}>🗑</button>:null}
            </div>
            {word>250?
                <p className={styles.post}>{props.blog.slice(0,250)}<button className={styles.blogClick}onClick={handleClick}>...Read More</button></p>
                :<p className={styles.post}>{props.blog}{initial>250?<button className={styles.blogClick} onClick={handleClick}>&ensp;Shrink</button>:null}</p>}
            <h5 className={styles.name}>@{props.name.name}</h5>
        </div>
    );
}

export default Card;
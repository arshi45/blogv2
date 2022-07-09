import { collection, getDocs, query, where } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { auth, db } from "../../db";
import Card from "../card/card";
import styles from "./myPosts.module.css";


const MyPost = (props) => {

    // const uid = auth.currentUser.uid;  Somehow Notworking here
    // const uid = props.uid;

    const [myPosts,setMyPosts] = useState([]);
    const collectionRef = query(collection(db, "blogs"), where("title", "==","New World"));

    useEffect(() => {
        const getMyPost = async () =>{
            const myData = await getDocs(collectionRef);
            setMyPosts(myData.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
            console.log(myPosts);
        }
        getMyPost();
    },[]);

    return (
        <div className={styles.myPost}>
            {myPosts.map((myPost) => {
               return <Card title={myPost.title} blog={myPost.blog} keyID={myPost.id} uid={myPost.author.id} name={myPost.author}/>
            })}
        </div>
    );
}

export default MyPost;

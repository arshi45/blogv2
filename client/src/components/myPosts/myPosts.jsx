import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { db } from "../../db";
import Card from "../card/card";

const MyPost = () => {

    const [myPosts,setMyPosts] = useState([]);
    const collectionRef = collection(db,"blogs");

    useEffect(() => {
        const getMyPost = async () =>{
            const myData = await getDocs(collectionRef).
            setMyPosts(myData.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
        }
        getMyPost();
    });

    reutrn (
        <div>
            {myPosts.map((myPost) => {
                <Card title={myPost.title} blog={myPost.blog} key={myPost.id} uid={myPost.author.id}/>
            })}
        </div>
    )
}

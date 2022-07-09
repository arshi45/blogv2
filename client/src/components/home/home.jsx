import React from "react";
import {db} from "../../db"
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import Card from "../card/card"
import styles from "./home.module.css"
import Footer from "../footer/footer";

const Home = () => {
     
    const [posts, setPosts] = useState([]); 
    const collectionRef = collection(db, "blogs");

    useEffect(() => {
        const getPosts = async () =>{
            const data = await getDocs(collectionRef);
            setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
        }   
        getPosts();
     }, [])

    return (
        <div className={styles.homePage}>
            {posts.map((post) => {
             return <Card key={post.id} title={post.title} blog={post.blog} name={post.author}/>
            })}
            <Footer/>
        </div>
    );
}

export default Home;
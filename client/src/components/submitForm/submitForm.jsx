import React from "react";
import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./submitForm.module.css";
import {db, auth} from "../../db";
import { addDoc, collection } from "firebase/firestore";
import Footer from "../footer/footer";
import MyPost from "../myPosts/myPosts";

const Form = () => {

    const navigate = useNavigate();
    const [blog,setBlog] = useState({
        title:"",
        blog:""
    });

    const handleChange = (e) => {
        setBlog({
            ...blog,
            [e.target.name]: e.target.value
        });
    }
    
    const collectionRef = collection(db, "blogs");
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        await addDoc(collectionRef, 
            {...blog,
                author:{
                    name: auth.currentUser.displayName,
                    id :auth.currentUser.uid }
            });
            navigate("/");
    }

    useEffect(() => {
        if(!localStorage.getItem("a")){
            navigate("/");
        }
    }, [])

    // const handleSubmit = (e) => {
        
    //     e.preventDefault();
    //         fetch("http://localhost:3000/", {
    //             method: "POST",
    //             headers:{
    //                 'Content-Type':'application/json'
    //             },
    //             body: JSON.stringify(blog)
    //         }).then( (response) => {
    //             return response.json();
    //         });
    // }

    return (
        <div className={styles.outer}>
            <MyPost />
            <form  className={styles.submitForm}  >
                <input type="text" placeholder="Title" onChange={handleChange} name="title" value={blog.title}/>
                <textarea placeholder="Start Writing" onChange={handleChange} name="blog" value={blog.blog} rows="10"/>
                <button type="submit" onClick={handleSubmit} >Submit</button>
            </form>
            <Footer/>
        </div>
    );
}

export default Form;
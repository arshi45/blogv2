import React from "react";
import { useState, useEffect} from "react";
import styles from "./submitForm.module.css";

const Form = () => {
    
    const [blog,setBlog] = useState({
        name: "",
        title:"",
        blog:""
    });

    const handleChange = (e) => {
        setBlog({
            ...blog,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        
        e.preventDefault();
            fetch("http://localhost:3000/", {
                method: "POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(blog)
            }).then( (response) => {
                return response.json();
            });
    }

    return (
        <div className={styles.outer}>
            <form onSubmit={handleSubmit} className={styles.submitForm}>
                <input type="text" placeholder="Title" onChange={handleChange} name="title" value={blog.title}/>
                <textarea placeholder="Start Writing" onChange={handleChange} name="blog" value={blog.blog} />
                <input type="text" placeholder="Name" onChange={handleChange} name="name" value={blog.name} className={styles.name}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}


export default Form;
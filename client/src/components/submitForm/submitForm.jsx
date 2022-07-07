import React from "react";
import { useState } from "react";

function Form(){
    
    const [blog,setBlog] = useState({
        name: "",
        title:"",
        blog:"",
    });

    const handleChange = (e) => {
        setBlog({
            ...blog,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(blog);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" onChange={handleChange} name="name" value={blog.name}/>
                <input type="text" placeholder="Title" onChange={handleChange} name="title" value={blog.title}/>
                <textarea placeholder="Start Writing" onChange={handleChange} name="blog" value={blog.blog} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}


export default Form;
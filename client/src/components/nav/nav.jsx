import React from "react";
import {Link, useNavigate} from "react-router-dom"
import styles from "./nav.module.css";
import {auth, provider} from "../../db";
import { signInWithPopup, signOut } from "firebase/auth";


const Nav = (props) =>{

    const navigate  = useNavigate();

    const login = () => {
        signInWithPopup(auth, provider).then((result) =>{
            console.log(result);
            props.sa(true);
            localStorage.setItem("a",true);
            navigate("/");
        });
    }

    const out = () => {
        signOut(auth).then(()=>{
            props.sa(false);
            navigate("/");
            localStorage.clear();
        });  
    }

    return (
        <div className="nav">
            <Link to="/">Home</Link>
            {localStorage.getItem("a")?null:<button onClick={login}>Login</button>}
            {localStorage.getItem("a") && <a href="/post">Post</a>}
            {localStorage.getItem("a") && <button onClick={out}>Log Out</button>}
        </div>
    );
}

export default Nav;

import React from "react";
import {useNavigate} from "react-router-dom"
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
        <div className={styles.nav}>
            <a href="/" className={styles.home}>Home</a>
            {localStorage.getItem("a")?null:<button onClick={login}>Login</button>}
            {localStorage.getItem("a") && <a href="/post" className={styles.post}>Post</a>}
            {localStorage.getItem("a") && <button className={styles.logout} onClick={out} >Log Out</button>}
        </div>
    );
}

export default Nav;

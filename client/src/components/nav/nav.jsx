import React from "react";
import {Link} from "react-router-dom"
import styles from "./nav.module.css";
import {auth, provider} from "../../db";
import { signInWithPopup } from "firebase/auth";


const Nav = (props) =>{


    const login = (e) => {
        e.preventDefault();
        signInWithPopup(auth, provider).then((result) =>{
            console.log(result);
            props.setAuth(true);
        });
    }

    return (
        <div className="nav">
            <Link to="/">Home</Link>
            {props.isAuth?null:<a href="" onClick={login}>Login</a>}
            {props.isAuth && <a href="/post">Post</a>}
            {props.isAuth && <a href="/out">Log Out</a>}
        </div>
    );
}

export default Nav;

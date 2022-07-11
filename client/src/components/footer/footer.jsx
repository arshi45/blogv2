import React from "react";
import styles from "./footer.module.css"
import { useState } from "react";

const Footer = () => {
    const [state,setState] = useState(true);

    window.addEventListener('scroll',function(){
        let scrollVal = window.scrollY;
        console.log(scrollVal);
        if(scrollVal>=1){
            setState(false);
        }
        else{
            setState(true);
        }
    });

    return (
            <footer className={state?(styles.footer):(styles.footer1)}><p>Made by Arshdeep Singh with ❤️</p></footer>
    )
}

export default Footer;
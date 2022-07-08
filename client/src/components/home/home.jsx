import React from "react";

const Home = (props) => {
    return (
        <div>
            <h1>{props.isAuth}</h1>
        </div>
    );
}

export default Home;
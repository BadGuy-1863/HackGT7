import React from "react";
import {Link} from "react-router-dom";
import "./About.scss"

export const About = () => {
    return (
        <div className="about">
            <Link to="/" style={{textDecoration:'none', color:"black"}}>
                <h1> About Us</h1>
            </Link>
            <p>
                Welcome to Squiggle - a website focused on cutting down restaurant wait
                times as much as possible, because nobody likes waiting in line!
            </p>
        </div>
    );
};

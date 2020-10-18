import React from "react";
import {Link} from "react-router-dom";
import "./About.scss"

export const Terms = () => {
    return (
        <div className="terms">
            <Link to="/" style={{textDecoration:'none', color:"black"}}>
                <h1>Terms & Conditions</h1>
            </Link>
            <p>
                This is our website. Do not use it for nefarious purposes. Please.
            </p>
        </div>
    );
};

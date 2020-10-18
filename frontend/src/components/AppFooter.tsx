import React from "react";
import ncr from "../assets/ncr_white.png";
import "./AppFooter.scss";
import { Link } from "react-router-dom";

const AppFooter = () => {
    return (
        <div className="footer">
            <div>
                <Link to="/about">About</Link>
            </div>
            <div>
                <Link to="/terms">Terms &amp; Conditions</Link>
            </div>
            <div className='powered-by'>
                Powered by
                <img src={ncr} alt="ncr logo" />
            </div>
        </div>
    );
};

export default AppFooter;

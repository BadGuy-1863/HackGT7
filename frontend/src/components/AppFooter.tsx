import React from "react";
import ncr from "../assets/ncr_white.png";
import "./AppFooter.scss";
import { Link } from "react-router-dom";

const AppFooter = () => {
    return (
        <div className="footer">
            <div className="Links">
                {/* <a href="a">About</a> */}
                <Link to="/about">About</Link>
                <br />
                {/* <a href="tc">Terms &amp; Conditions</a> */}
                <Link to="/terms">Terms &amp; Conditions</Link>
            </div>
            <div className="powered-by">
                Powered by
                <img src={ncr} alt="ncr logo" />
            </div>
        </div>
    );
};

export default AppFooter;

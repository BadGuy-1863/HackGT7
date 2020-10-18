import React from "react";
import ncr from "../assets/ncr_white.png";
import "./AppFooter.scss";

const AppFooter = () => {
    return (
        <div className="footer">
            <div className="Links">
                <a href="a">About</a>
                <br />
                <a href="tc">Terms &amp; Conditions</a>
            </div>
            <div className="powered-by">
                Powered by
                <img src={ncr} alt="ncr logo" />
            </div>
        </div>
    );
};

export default AppFooter;

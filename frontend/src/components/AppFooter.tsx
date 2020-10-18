import React from "react";
import ncr from "../assets/ncr.png";

const AppFooter = () => {
    return (
        <div>
            <div className="Links">
                <a href="a">About</a>
                <br />
                <a href="tc">Terms &amp; Conditions</a>
            </div>
            <div className="PoweredBy">
                Powered by
                <img src={ncr} alt="ncr logo" />
            </div>
        </div>
    );
};

export default AppFooter;

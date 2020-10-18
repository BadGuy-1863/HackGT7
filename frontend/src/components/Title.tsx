import React, { useContext } from "react";
import "./Title.scss";
import { LocationContext } from "../contexts/location-context";
import { ResultContext } from "../contexts/result-context";
import { AddressLookup } from "./Location/LookupComponent";
import { Location } from "./Location";

const Title = (props: any) => {
    const [loc] = useContext(LocationContext);
    const [results] = useContext(ResultContext);

    // const Searchbar = (props: any) => {
    //     return(
    //         <input
    //         type="text"

    //         />
    //     )
    // }
    return (
        <div className="title-box">
            <div className="title">
                <h1>Squiggle</h1>
                <h2>Lines are for losers.</h2>
            </div>
            <div className="search-box">
                {/* <br /> */}
                <Location />
            </div>
        </div>
    );
};

export default Title;

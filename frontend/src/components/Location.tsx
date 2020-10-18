import React from "react";
import { RadiusContext } from "../contexts/radius-context";
import { Geolocation } from "./Location/Geolocation";
import { AddressLookup } from "./Location/LookupComponent";
import "./lookup.scss";
export const Location = () => {
    const [radius, setRadius] = React.useContext(RadiusContext);
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadius(Number(event.target.value));
    };
    return (
        <div className="location-search">
            <Geolocation />
            <AddressLookup />
            <input type="numeric" value={radius} onChange={handleInput} />
        </div>
    );
};

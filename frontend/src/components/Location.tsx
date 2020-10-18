import React from "react";
import { Geolocation } from "./Location/Geolocation";
import { AddressLookup } from "./Location/LookupComponent";
import "./lookup.scss";
export const Location = () => {
    return (
        <div className="location-search">
            <Geolocation />
            <AddressLookup />
        </div>
    );
};

import React from "react";
import { Geolocation } from "../Location/Geolocation";
import { AddressLookup } from "../Location/LookupComponent";
export const Location = () => {
    return (
        <div>
            <AddressLookup />
            <Geolocation />
        </div>
    );
};

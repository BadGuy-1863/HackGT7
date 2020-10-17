import React from "react";
import { LocationContext } from "../location-context";

export const Geolocation = () => {
    const [loc, setLoc] = React.useContext(LocationContext);

    if (navigator.geolocation == undefined) {
        return <p>Cannot automatically get location</p>;
    }

    const handleClick = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLoc({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            });
        });
    };

    return <button onClick={handleClick}> Get Location </button>;
};

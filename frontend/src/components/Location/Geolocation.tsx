import React from "react";
import { waitTime } from "../../actions/nearby-wait-time";
import { LocationContext } from "../../contexts/location-context";
import { RadiusContext } from "../../contexts/radius-context";
import { ResultContext } from "../../contexts/result-context";

export const Geolocation = () => {
    const [loc, setLoc] = React.useContext(LocationContext);
    const [results, setResults] = React.useContext(ResultContext);

    const [radius] = React.useContext(RadiusContext);

    if (navigator.geolocation == undefined) {
        return <p>Cannot automatically get location</p>;
    }

    const handleClick = () => {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                setLoc({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });

                const waitTimes = await waitTime(loc.lat, loc.lng, radius);
                setResults(waitTimes);

                // const results = await waitTime(position.coords.latitude, position.coords.longitude)
            },
            () => {
                window.alert("Could not get location, enter address manually");
            }
        );
    };

    return (
        <button className="button" onClick={handleClick}>
            Use my Location!
        </button>
    );
};

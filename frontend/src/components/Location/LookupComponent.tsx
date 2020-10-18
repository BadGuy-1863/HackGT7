import React, { useContext } from "react";
import { waitTime } from "../../actions/nearby-wait-time";

import { requestCoordinates, Coordinates } from "../../actions/request-address";
import { LocationContext } from "../../contexts/location-context";
import { RadiusContext } from "../../contexts/radius-context";
import { ResultContext } from "../../contexts/result-context";

export const AddressLookup = () => {
    const [loc, setLoc] = useContext(LocationContext);
    const [results, setResults] = React.useContext(ResultContext);

    const [address, setAddress] = React.useState("");

    const [radius, setRadius] = React.useContext(RadiusContext);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const c = await requestCoordinates(address);
        if (c) {
            setLoc(c);
            const res = await waitTime(c.lat, c.lng, radius);

            setResults(res);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(event.target.value);
    };

    // const getRadius = (value: number, index: number) => {
    //     return `${value}`;
    // };

    return (
        <div className="address-form">
            {/* Alternatively, enter another address: */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={address}
                    onChange={handleChange}
                    placeholder="Want food somewhere else?"
                    className="addressInput"
                />
                <br />
                <input type="submit" className="button" />
            </form>
        </div>
    );
};

import React, { useContext } from "react";

import { requestCoordinates, Coordinates } from "../actions/request-address";
import { LocationContext } from "../contexts/location-context";

export const AddressLookup = () => {
    const [loc, setLoc] = useContext(LocationContext);

    const [address, setAddress] = React.useState("");

    const [radius, setRadius] = React.useState(0);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const c = await requestCoordinates(address);
        if (c) {
            setLoc(c);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(event.target.value);
    };

    const getRadius = (value: number, index: number) => {
        return `${value}`
    }

    return (
        <div className="address-form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="address">Address:</label> 
                <input
                    type="text"
                    value={address}
                    onChange={handleChange}
                />
                <input type="submit"/>
            </form>
            {loc && `Your coords: ${loc.lat}, ${loc.lng}`}
        </div>
    );
};

import React, { useContext } from "react";

import { requestCoordinates, Coordinates } from "../../actions/request-address";
import { LocationContext } from "../../contexts/location-context";

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
        return `${value}`;
    };

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
                <br/>
                <input type="submit" className="button" />
            </form>
        </div>
    );
};

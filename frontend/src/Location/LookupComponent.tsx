import React, { useContext } from "react";

import { requestCoordinates, Coordinates } from "../actions/request-address";
import { LocationContext } from "../contexts/location-context";

export const AddressLookup = () => {
    const [loc, setLoc] = useContext(LocationContext);

    const [address, setAddress] = React.useState("");

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

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Address:
                        <input
                            type="text"
                            value={address}
                            onChange={handleChange}
                        />
                    </label>
                    <input type="submit" />
                </div>
            </form>
            {loc && `${loc.lat}, ${loc.lng}`}
        </div>
    );
};

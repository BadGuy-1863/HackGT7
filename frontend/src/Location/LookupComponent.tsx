import React, { useContext } from "react";

import { requestCoordinates, Coordinates } from "../actions/request-address";
import { LocationContext } from "../contexts/location-context";
import Slider from '@material-ui/core/Slider';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    slider: {
        width:300
    }
});

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

    const handleSlide = (event: Object, newValue: number | number[]) => {
        setRadius(Number(newValue));
    }

    const getRadius = (value: number, index: number) => {
        return `${value}`
    }

    const classes = useStyles();

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
                    {/* do we need a label tag here? */}
                    <div>
                        <Slider
                            className={classes.slider}
                            onChange={handleSlide}
                            getAriaValueText={getRadius}
                            valueLabelDisplay="auto"
                            min={0}
                            max={20}
                            defaultValue={radius}
                        />
                    </div>
                    <input type="submit" />
                </div>
            </form>
            {loc && `${loc.lat}, ${loc.lng}`}
        </div>
    );
};

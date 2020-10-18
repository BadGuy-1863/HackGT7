import React from "react";
import { Store } from "../actions/nearby-wait-time";
import { Duration } from "../duration";
import { MapsComponent } from "./MapBox/MapComponent";
import ResultList from "./MapBox/ResultList";
import "./MapBox.scss";

const MapBox = (props: any) => {
    const data: Store[] = [
        {
            storeId: "1",
            address: {
                city: "Atlanta",
                country: "USA",
                postalCode: "30313",
                state: "GA",
                street: "250 North Avenue",
            },
            waitTime: Duration.fromStr("00:13:00"),
            coordinates: {
                lat: 34,
                lng: -86,
            },
        },
        {
            storeId: "2",
            address: {
                city: "Atlanta",
                country: "USA",
                postalCode: "30313",
                state: "GA",
                street: "250 North Avenue",
            },
            waitTime: Duration.fromStr("00:13:00"),
            coordinates: {
                lat: 34,
                lng: -86,
            },
        },
    ];

    return (
        <div className="map-box">
            <MapsComponent />
            <ResultList locations={data} />
        </div>
    );
};
export default MapBox;

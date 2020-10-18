import React from "react";
import { Store } from "../actions/nearby-wait-time";
import { Duration } from "../duration";
import { MapsComponent } from "./MapComponent";
import ResultList from "./ResultList";
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
        },
    ];

    return (
        <div>
            <MapsComponent />
            <ResultList locations={data} />
        </div>
    );
};
export default MapBox;

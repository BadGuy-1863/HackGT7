import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { LocationContext } from "../contexts/location-context";
import { ResultContext } from "../contexts/result-context";

const containerStyle = {
    width: "400px",
    height: "400px",
};

const center = {
    lat: 33.7694,
    lng: -84.40321,
};

// const glenn = {
//     lat: 33.773930,
//     lng: -84.391693
// }

// @ts-ignore
export const MapsComponent = () => {
    // const [map, setMap] = React.useState(null);

    // // const onLoad = React.useCallback(map => {
    // //     const bounds = new window.google.maps.LatLngBounds();
    // //     map.fitBounds(bounds);
    // //     setMap(map);
    // // })

    // const onUnmount = () => setMap(null)

    const [loc, setLoc] = React.useContext(LocationContext);
    const [results] = React.useContext(ResultContext);

    return (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY!!}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={loc ?? center}
                zoom={14}
            >
                {loc && <Marker position={loc} />}
            </GoogleMap>
        </LoadScript>
    );
};

import React from "react"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: '400px',
    height: '400px'
}

const center = {
    lat: 33.769400,
    lng: -84.403210
}

const glenn = {
    lat: 33.773930,
    lng: -84.391693
}

// @ts-ignore
export const MapsComponent = () => {
    // const [map, setMap] = React.useState(null);

    // // const onLoad = React.useCallback(map => {
    // //     const bounds = new window.google.maps.LatLngBounds();
    // //     map.fitBounds(bounds);
    // //     setMap(map);
    // // })

    // const onUnmount = () => setMap(null)

    return (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY!!}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={14}
                >
                    <Marker position={glenn} />
            </GoogleMap>
        </LoadScript>
    )
}

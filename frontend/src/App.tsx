import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MapsComponent } from "./MapComponent";
import { LocationContext } from "./contexts/location-context";
import { Coordinates } from "./actions/request-address";
import { Location } from "./Location";
import { ResultContext, Result } from "./contexts/result-context";

import Title from './Title'
import MapBox from './MapBox'
import AppFooter from './AppFooter'
function App() {
    const [loc, setLoc] = React.useState(undefined as undefined | Coordinates);
    const [results, setResults] = React.useState([] as Result[]);

    return (
        <ResultContext.Provider value={[results, setResults]}>
            <LocationContext.Provider value={[loc, setLoc]}>
                <Title />
                <MapBox />
                <AppFooter />
                <div className="App">
                    <Location />
                    <MapsComponent />
                </div>
            </LocationContext.Provider>
        </ResultContext.Provider>
    );
}

export default App;

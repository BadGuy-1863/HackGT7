import React from "react";
import { Store } from "./actions/nearby-wait-time";
import { Coordinates } from "./actions/request-address";
import "./App.css";
import AppFooter from "./components/AppFooter";
import { LocationContext } from "./contexts/location-context";
import { ResultContext } from "./contexts/result-context";
import MapBox from "./components/MapBox";
import Title from "./components/Title";

function App() {
    const [loc, setLoc] = React.useState(undefined as undefined | Coordinates);
    const [results, setResults] = React.useState([] as Store[]);

    return (
        <ResultContext.Provider value={[results, setResults]}>
            <LocationContext.Provider value={[loc, setLoc]}>
                <div className="App">
                    <Title />
                    <MapBox />
                    <AppFooter />
                </div>
            </LocationContext.Provider>
        </ResultContext.Provider>
    );
}

export default App;

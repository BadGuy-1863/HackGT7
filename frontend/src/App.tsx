import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MapsComponent } from "./MapComponent";
import { LocationContext } from "./location-context";
import { Coordinates } from "./request-address";
import { Location } from "./Location";

function App() {
    const [loc, setLoc] = React.useState(undefined as undefined | Coordinates);

    return (
        <LocationContext.Provider value={[loc, setLoc]}>
            <div className="App">
                {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header> */}
                <Location />
                <MapsComponent />
            </div>
        </LocationContext.Provider>
    );
}

export default App;

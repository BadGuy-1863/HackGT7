import React from "react";
import { Store } from "./actions/nearby-wait-time";
import { Coordinates } from "./actions/request-address";
import "./App.css";
import AppFooter from "./components/AppFooter";
import { LocationContext } from "./contexts/location-context";
import { ResultContext } from "./contexts/result-context";
import MapBox from "./components/MapBox";
import Title from "./components/Title";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Terms } from "./components/Terms";
import { About } from "./components/About";

function App() {
    const [loc, setLoc] = React.useState(undefined as undefined | Coordinates);
    const [results, setResults] = React.useState([] as Store[]);

    return (
        <Router>
            <ResultContext.Provider value={[results, setResults]}>
                <LocationContext.Provider value={[loc, setLoc]}>
                    <div className="App">
                        <Title />
                        <Switch>
                            <Route path="/terms">
                                <Terms />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/">
                                <MapBox />
                                <AppFooter />
                            </Route>
                        </Switch>
                    </div>
                </LocationContext.Provider>
            </ResultContext.Provider>
        </Router>
    );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MapsComponent } from "./MapComponent";
import { AddressLookup } from './LookupComponent';

function App() {
  return (
    <div className="App">
      <MapsComponent />
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
      <AddressLookup />
    </div>
  );
}

export default App;

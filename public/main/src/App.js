
import {initializeIcons} from "@uifabric/icons";

import React from 'react';
import Map from "./Map.js";

import Overlay from "./Overlay.js";

function App() {
  initializeIcons();
  return (
    <div className="App">
      <Overlay/>
      <Map/>
    </div>
  );
}

export default App;

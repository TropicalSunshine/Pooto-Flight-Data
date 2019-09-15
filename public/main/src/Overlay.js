import React, { Component } from 'react'
import FlightInput from "./UI/FlightInput.js";
import MapControls from "./UI/MapControls.js";
import Map from "./Map.js";

import Loader from "./UI/Loader.js";

export default class Overlay extends Component {
    render() {

        return (
            <div id = "overlay">
                <Loader name = "overlay"/>
                <FlightInput/>
                <MapControls/>
                <Map/>
            </div>
        )
    }
}

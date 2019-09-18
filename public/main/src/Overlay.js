import React, { Component } from 'react'
import FlightInput from "./UI/FlightInput.js";
import MapControls from "./UI/MapControls.js";
import SettingsTab from "./UI/SettingsTab.js";

import Map from "./Map.js";

import Loader from "./UI/Loader.js";

export default class Overlay extends Component {
    render() {

        return (
            <div id = "overlay">
                <Loader name = "overlay"/>
                <FlightInput/>
                <MapControls/>
                <SettingsTab/>
                <Map/>
            </div>
        )
    }
}

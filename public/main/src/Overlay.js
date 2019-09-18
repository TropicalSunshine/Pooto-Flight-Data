import React, { Component } from 'react'
import FlightInput from "./UI/FlightInput.js";
import MapControls from "./UI/MapControls.js";
import SettingsTab from "./UI/SettingsTab.js";

import Map from "./Map.js";

import Loader from "./UI/Loader.js";

export default class Overlay extends Component {
    render() {
        var d = new Date();
        var time = (d.getHours() >= 17) ? "day" : "night";

        return (
            <div id = "overlay">
                <Loader name = "overlay"/>
                <FlightInput day = {"night"}/>
                <MapControls/>
                <SettingsTab/>
                <Map/>
            </div>
        )
    }
}

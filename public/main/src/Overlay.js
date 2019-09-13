import React, { Component } from 'react'
import FlightInput from "./UI/FlightInput.js";

export default class Overlay extends Component {
    render() {

        return (
            <div id = "overlay">
                <FlightInput/>
            </div>
        )
    }
}

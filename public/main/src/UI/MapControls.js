import React, { Component } from 'react'
import { Icon } from 'office-ui-fabric-react/lib/Icon';

var moveCamera = require("../api/mapbox.js").moveCamera;
var drawPulseDot = require("../api/mapbox.js").drawPulseDot;

export default class MapControls extends Component {
    render() {
        return (
            <div id = "mapcontrols">
                <div className = "mapcontrols-square" onClick = {() => {
                }} style = {
                    {
                        borderBottomStyle: "Solid",
                        borderWidth: "1px"
                    }
                }>
                    <Icon iconName = "Add"/>
                </div>
                <div className = "mapcontrols-square" style = {
                    {
                        borderBottomStyle: "Solid",
                        borderWidth: "1px"
                    }
                }>
                    <Icon iconName = "Remove"/>
                </div>
                <div className = "mapcontrols-square" onClick = {() => {
                    var currentLocation = (position) =>{
                        var center = [position.coords.longitude, position.coords.latitude];
                        moveCamera(center, 12);
                        drawPulseDot(center);
                    }

                    navigator.geolocation.getCurrentPosition(currentLocation);
                }}>
                    <Icon iconName = "Location"/>
                </div>
            </div>
        )
    }
}

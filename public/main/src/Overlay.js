import React, { Component } from 'react'
import FlightData from "./UI/FlightData.js";
import MapControls from "./UI/MapControls.js";
import SettingsTab from "./UI/SettingsTab.js";
import AirportDataPanel from "./UI/AirportDataPanel.js";

//MS Fabric
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import {PrimaryButton} from "office-ui-fabric-react"

import {renderLine, drawFlightRoute, moveCamera} from "./api/mapbox.js";
import {getFirstAirportByCountry} from "./helpers/network.js";

import {midPoint} from "./helpers/pointcalculations.js";

import Map from "./Map.js";

import Loader from "./UI/Loader.js";

import {getNumFlights, getNumGrounded} from "./api/mapbox.js";
import { ThemeGenerator } from 'office-ui-fabric-react';

export default class Overlay extends Component {
    constructor(){
        super();
        this.state = {
            currentView: "World",
            numGrounded: 0,
            numAirports: 4188,
            numFlights: 0,
            displayAirportPanel: true
        }

        this.unmountAirportPanel = this.unmountAirportPanel.bind(this);
        this.mountAirportPanel = this.mountAirportPanel.bind(this);

        this.resetView = this.resetView.bind(this);
    }

    unmountAirportPanel(){
        this.setState({
            displayAirportPanel: false
        })
    }

    mountAirportPanel(){
        this.setState({
            displayAirportPanel: true
        })
    }

    resetView(){
        this.setState({
            currentView: "World"
        })
    }

    componentDidMount(){
        var that = this;

        var num_flights = 0;
        var num_grounded = 0;

        this._data_interval = setInterval(()=> {

            num_flights = getNumFlights();
            num_grounded = getNumGrounded();

            that.setState({
                numFlights: num_flights,
                numGrounded: num_grounded
            })
        }, 2000);
    }

    render() {            

        var that = this;

        var airport_panel = (this.state.displayAirportPanel && <AirportDataPanel
        resetView = {that.resetView} 
        unmount = {that.unmountAirportPanel}
        airportsData = {[
            {
                "icao24": "DIAP",
                "lat": 5.261390209197998,
                "long": -3.9262900352478027,
                "name": "Port Bouet Airport"
            },
            {
                "icao24": "DIBK",
                "lat": 7.738800048828125,
                "long": -5.073669910430908,
                "name": "Bouak\u00e9 Airport"
            },
            {
                "icao24": "DIDL",
                "lat": 6.792809963226318,
                "long": -6.473189830780029,
                "name": "Daloa Airport"
            },
            {
                "icao24": "DIKO",
                "lat": 9.38718032837,
                "long": -5.55666017532,
                "name": "Korhogo Airport"
            },
            {
                "icao24": "DIMN",
                "lat": 7.272069931030273,
                "long": -7.58735990524292,
                "name": "Man Airport"
            },
            {
                "icao24": "DISP",
                "lat": 4.746719837188721,
                "long": -6.660820007324219,
                "name": "San Pedro Airport"
            },
            {
                "icao24": "DIYO",
                "lat": 6.9031701088,
                "long": -5.36558008194,
                "name": "Yamoussoukro Airport"
            },
            {
                "icao24": "DIOD",
                "lat": 9.5,
                "long": -7.566999912261963,
                "name": "Odienne Airport"
            }
        ]}
        />)
        
        return (
            <div id = "overlay">
                {airport_panel}
                <Loader name = "overlay"/>
                <FlightData 
                    view = {this.state.currentView}
                    airports = {this.state.numAirports}
                    grounded = {this.state.numGrounded}
                    flights = {this.state.numFlights}/>
                <div className = "overlay-input-container">
                        <TextField
                        placeholder = "Enter Country"
                        onChange = {(evt, input) => {
                            this.setState({
                                inputValue: input
                            })
                        }}
                        />
                        <br></br>
                        <PrimaryButton 
                        text = "Find"
                        onClick = {()=> {
                            getFirstAirportByCountry(this.state.inputValue, (result) => {
                                moveCamera([result.long, result.lat], 10);
                            });

                        }}/>
                </div>
                <MapControls/>
                <SettingsTab/>
                <Map/>
            </div>
        )
    }
}

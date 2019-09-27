import React, { Component } from 'react'
import FlightData from "./UI/FlightData.js";
import MapControls from "./UI/MapControls.js";
import SettingsTab from "./UI/SettingsTab.js";
import AirportDataPanel from "./UI/AirportDataPanel.js";

//MS Fabric
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import {PrimaryButton} from "office-ui-fabric-react"


import {getFirstAirportByCountry, getAirportsByCountry} from "./helpers/network.js";

import Map from "./Map.js";

import Loader from "./UI/Loader.js";

var moveCamera = require("./api/mapbox.js").moveCamera;


var getNumFlights = require("./api/mapbox.js").getNumFlights;
var getNumGrounded = require("./api/mapbox.js").getNumGrounded;


export default class Overlay extends Component {
    constructor(){
        super();
        this.state = {
            airportsData: null,
            currentView: "World",
            numGrounded: 0,
            numAirports: 4188,
            numFlights: 0,
            displayAirportPanel: false,
            dataUpdateInterval: null
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
        var that = this;

        var num_flights = 0;
        var num_grounded = 0;
        
        this.setState({
            currentView: "World", 
            numAirports: 4188,
            dataUpdateInterval: setInterval(()=> {

                num_flights = getNumFlights();
                num_grounded = getNumGrounded();
    
                that.setState({
                    numFlights: num_flights,
                    numGrounded: num_grounded
                })
            }, 2000)
            
        })
    }

    componentDidMount(){
        var that = this;

        var num_flights = 0;
        var num_grounded = 0;

        this.setState({
            dataUpdateInterval: setInterval(()=> {

                num_flights = getNumFlights();
                num_grounded = getNumGrounded();
    
                that.setState({
                    numFlights: num_flights,
                    numGrounded: num_grounded
                })
            }, 2000)
        });
    }

    render() {            

        var that = this;

        var airport_panel = (this.state.displayAirportPanel && <AirportDataPanel
        resetView = {that.resetView} 
        unmount = {that.unmountAirportPanel}
        airportsData = {this.state.airportsData}
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
                            var that = this;

                            getFirstAirportByCountry(this.state.inputValue, (result) => {
                                moveCamera([result.long, result.lat], 6);
                            });

                            getAirportsByCountry(this.state.inputValue, (result) => {
                                console.log(result);
                                if(result.data !== null){

                                    clearInterval(this.state.dataUpdateInterval);

                                    
                                    this.setState({
                                        inputValue: "",
                                        displayAirportPanel: true,
                                        currentView: that.state.inputValue.toUpperCase(),
                                        numAirports: result.num_airports,
                                        airportsData: result.data
                                    })
                                }
                                else{

                                }
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

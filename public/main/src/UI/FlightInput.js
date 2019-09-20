
import React, { Component } from 'react'
import {renderLine, drawFlightRoute, moveCamera, getNumFlights, getNumGrounded} from "../api/mapbox.js";
import {getFirstAirportByCountry} from "../helpers/network.js";




import {midPoint} from "../helpers/pointcalculations.js";
import {geoPath} from "d3-geo";
import { TextField } from 'office-ui-fabric-react/lib/TextField';

export default class FlightInput extends Component {
    constructor(){
        super();
        this.state = {
            inputValue: "",
            numFlights: 0,
            numGrounded: 0,
            blink: false
        }

        this.blinkFlight.bind(this);
        this.blinkGrounded.bind(this);
        
    }

    componentDidMount(){
        var that = this;

        var num_flights = 0;
        var num_grounded = 0;

        this._data_interval = setInterval(()=> {
            num_flights = getNumFlights();
            num_grounded = getNumGrounded();


            that.setState({
                inputValue: that.state.inputValue,
                numFlights: num_flights,
                numGrounded: num_grounded,
                blink: that.state.blink
            })
        }, 2000);
    }

    componentWillUnmount(){
        clearInterval(this._data_interval);
    }

    blinkFlight(){

    }

    blinkGrounded(){

    }

    render() {

        var testSVG = (
            <svg id = "plane-route-svg" version="1.1" id="Layer_1"  x="0px" y="0px"
                width="340px" height="333px" viewBox="0 0 340 333" enableBackground="new 0 0 340 333" >

            <path className="path" fill = "transparent" stroke="#000000" strokeWidth="4" strokeMiterlimit="10" d="M66.039,133.545c0,0-21-57,18-67s49-4,65,8
                s30,41,53,27s66,4,58,32s-5,44,18,57s22,46,0,45s-54-40-68-16s-40,88-83,48s11-61-11-80s-79-7-70-41
                C46.039,146.545,53.039,128.545,66.039,133.545z"/>
            
            </svg>
        )


        return (
            <div id = "flightinput">
                <div className = "flightinput-title">World Flight Data</div>
                    <div style = {{width: "100%", height: "100px"}}>
                        <div className = "flight-input-stats" style = {{backgroundColor: "#04e000"}}>
                            <div className = "flight-input-stats-num" >{this.state.numFlights} In Flight</div>
                            <div className = "flight-input-stats-desc">Aircafts in the Sky</div>
                        </div>     
                    </div>
                    <div style = {{width: "100%", height: "100px"}}>
                        <div className = "flight-input-stats" style = {{backgroundColor: "#ff0026"}}>
                            <div className = "flight-input-stats-num" >{this.state.numGrounded} Grounded</div>
                            <div className = "flight-input-stats-desc">Aircrafts on the Ground</div>
                        </div>     
                    </div>
                    <div style = {{width: "100%", height: "100px"}}>
                        <div className = "flight-input-stats" style = {{backgroundColor: "#0084ff"}}>
                            <div className = "flight-input-stats-num" > 4188 Airports</div>
                            <div className = "flight-input-stats-desc"> Major Airports </div>
                        </div>     
                    </div>
                    <div className = "flightinput-container">
                        <TextField
                        placeholder = "Enter Flight"
                        onChange = {(evt, input) => {
                            this.setState({
                                inputValue: input
                            })
                        }}
                        />
                        <button onClick = {()=> {
                            getFirstAirportByCountry(this.state.inputValue, (result) => {
                                console.log(result);
                                moveCamera([result[1], result[0]], 10);
                            });

                        }}>
                            Find
                        </button>
                    </div>
            </div>
        )
    }
}

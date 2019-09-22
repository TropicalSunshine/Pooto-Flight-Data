
import React, { Component } from 'react'


import {renderLine, drawFlightRoute, moveCamera} from "../api/mapbox.js";
import {getFirstAirportByCountry} from "../helpers/network.js";


export default class FlightData extends Component {
    constructor(props){
        super(props);

        var that = this;
        this.state = {
            currentView: that.props.view,
            flightColor: "#04e000",
            groundedColor: "#ff0026",
            inputValue: "",
            numAirports: that.props.airports,
            numFlights: that.props.flights,
            numGrounded: that.props.grounded,
            blink: false
        }

        this.blinkFlight.bind(this);
        this.blinkGrounded.bind(this);

    }

    componentDidMount(){

    }

    componentDidUpdate(prevProps){
        var that = this;
        if(prevProps.airports != this.props.airports){
           this.setState({
               numAirports: that.props.airports
           }) 
        }
        
        if(prevProps.grounded != this.props.grounded){
            this.blinkGrounded()
            this.setState({
                numGrounded: that.props.grounded
            }) 
        }

        if(prevProps.flights != this.props.flights){
            this.blinkFlight();
            this.setState({
                numFlights: that.props.flights
            }) 
        }

        
    }

    componentWillUnmount(){
        clearInterval(this._data_interval);
    }

    blinkFlight(){
        var that = this;

        this.setState({
            flightColor: "#000000"
        })
        setTimeout(() => {
            that.setState({
                flightColor: "#04e000"
            })    
        }, 300);
    }

    blinkGrounded(){
        var that = this;

        this.setState({
            groundedColor: "#000000"
        })
        setTimeout(() => {
            that.setState({
                groundedColor: "#ff0026"
            })    
        }, 300);
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
                <div className = "flightinput-current-view">{this.state.currentView}</div>
                    <div style = {{width: "100%", height: "100px"}}>
                        <div className = "flight-input-stats" style = {{backgroundColor: this.state.flightColor}}>
                            <div className = "flight-input-stats-num" >{this.state.numFlights} In Flight</div>
                            <div className = "flight-input-stats-desc">Aircafts in the Sky</div>
                        </div>     
                    </div>
                    <div style = {{width: "100%", height: "100px"}}>
                        <div className = "flight-input-stats" style = {{backgroundColor: this.state.groundedColor}}>
                            <div className = "flight-input-stats-num" >{this.state.numGrounded} Grounded</div>
                            <div className = "flight-input-stats-desc">Aircrafts on the Ground</div>
                        </div>     
                    </div>
                    <div style = {{width: "100%", height: "100px"}}>
                        <div className = "flight-input-stats" style = {{backgroundColor: "#0084ff"}}>
                            <div className = "flight-input-stats-num" > {this.state.numAirports} Airports</div>
                            <div className = "flight-input-stats-desc"> Major Airports </div>
                        </div>     
                    </div>
            </div>
        )
    }
}

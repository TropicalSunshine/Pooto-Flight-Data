
import React, { Component } from 'react'
import {renderLine, renderImage, moveCamera} from "../api/mapbox.js";

import {midPoint} from "../helpers/pointcalculations.js";
import {geoPath} from "d3-geo";

export default class FlightInput extends Component {
    constructor(){
        super();
        this.state = {
            inputValue: ""
        }
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
        console.log(testSVG);
        return (
            <div id = "flightinput">
                <div className = "flightinput-title">Pooto Flight Tracker</div>
                <div>
                    <input type = "input"
                    value = {this.state.inputValue} 
                    onChange = {(evt) => {
                        this.setState({
                            inputValue: evt.target.value
                        })
                    }}/>
                    <button onClick = {()=> {
                    
                        renderLine([
                            [
                                10.1953125,
                                62.91523303947614
                              ],
                              [
                                105.46875,
                                33.7243396617476
                              ]
                        ]);

                        var center = midPoint({
                            lat: 10.1953125,
                            long: 62.91523303947614
                        },{
                            lat: 105.46875,
                            long: 33.7243396617476
                        });

                        moveCamera([center.lat + 5, center.long], 3)

                        console.log(geoPath());
                        this.setState({
                            inputValue: ""
                        })
                    }}>
                        Find
                    </button>
                    <div className = "mapboxgl-ctrl">Hello World</div>
                </div>
            </div>
        )
    }
}

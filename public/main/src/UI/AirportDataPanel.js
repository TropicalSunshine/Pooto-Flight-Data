import {Icon} from "office-ui-fabric-react/lib/Icon";
import {TextField} from "office-ui-fabric-react/lib/TextField";

import React, { Component } from 'react'
import {moveCamera} from "../api/mapbox.js";
import {getArrivalsByIcao} from "../helpers/network.js";




export default class AirportDataPanel extends Component {
    constructor(props){
        super(props);

    }

    
    render() {
        var that = this; 

        var airport_data_components = that.props.airportsData.map((data, i) => 
            <AirportDataComponent
            access = {data["name"].toUpperCase()}
            lat = {data["lat"]}
            long = {data["long"]}
            key = {i + "-" + data["name"]} 
            icao = {data["icao24"]}
            name = {data["name"]}
            timezone = {data["timezone"]}
            city = {data["city"]}
            />
        );
        

        return (
            <div id = "airport-data-panel">
                <div style = {{
                    width: "100%",
                    height: "30px"
                }}>
                    <div className = "airport-data-panel-cancel-button"
                        onClick ={() => {
                            this.props.unmount()
                            this.props.resetView()
                        }} >
                        <Icon iconName = {"Cancel"}/>
                    </div>
                </div>
                <div className = "airport-data-panel-textfield">
                    <TextField 
                        placeholder = "search airport"
                        onChange = {(evt, input) => {
                            var comps = document.getElementsByClassName("airport-data-component");
                            input = input.toUpperCase()
                            for(var i = 0; i < comps.length; i++){
                                if (!comps[i].accessKey.startsWith(input)){
                                    comps[i].style.display = "none";
                                }
                                else{
                                    comps[i].style.display = ""
                                }
                            }
                        }}/>
                </div>
                <div className = "airport-data-panel-content">
                    {airport_data_components}
                </div>  
            </div>
        )
    }
}

function AirportDataComponent(props){

    /*
    getArrivalsByIcao(props.icao, (result) => {
        console.log("arrivals by icao");
        console.log(result);
    })
    */
    
   
    return (
        <div className = "airport-data-component" accessKey = {props.access} onClick = {() => {
            moveCamera([props.long, props.lat], 10);
        }}>
            <div className =  "airport-data-component-name" >{props.name}</div>
            <div>{props.city}</div>
            <div>Int ID: {props.icao}</div>
        </div>
    );
}

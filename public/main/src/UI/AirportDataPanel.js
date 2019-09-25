import {Icon} from "office-ui-fabric-react/lib/Icon";
import {moveCamera} from "../api/mapbox.js";
import React, { Component } from 'react'

import {getDepaturesByIcao, getArrivalsByIcao} from "../helpers/network.js";


export default class AirportDataPanel extends Component {
    constructor(props){
        super(props);

    }

    
    render() {
        var that = this; 

        var airport_data_components = that.props.airportsData.map((data, i) => 
            <AirportDataComponent 
            lat = {data["lat"]}
            long = {data["long"]}
            key = {"data-comp-" + i} 
            icao = {data["icao24"]}
            name = {data["name"]}
            timezone = {data["timezone"]}
            city = {data["city"]}
            />
        );

        return (
            <div id = "airport-data-panel">
                <div className = "airport-data-panel-cancel-button"
                    onClick ={() => {
                        this.props.unmount()
                        this.props.resetView()
                    }} >
                    <Icon iconName = {"Cancel"}/>
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
        <div className = "airport-data-component"  onClick = {() => {
            moveCamera([props.long, props.lat], 10);
        }}>
            <div className =  "airport-data-component-name" >{props.name}</div>
            <div>{props.city}</div>
            <div>Int ID: {props.icao}</div>
        </div>
    );
}

import {Icon} from "office-ui-fabric-react/lib/Icon";

import React, { Component } from 'react'


export default class AirportDataPanel extends Component {
    constructor(props){
        super(props);

    }

    
    render() {
        var that = this; 

        var airport_data_components = that.props.airportsData.map((data, i) => 
            <AirportDataComponent 
            key = {"data-comp-" + i} 
            icao = {data["icao24"]}/>
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

    return (
        <div className = "airport-data-component">

        </div>
    );
}

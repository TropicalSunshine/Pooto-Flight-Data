import React, { Component } from 'react'


import {Icon} from "office-ui-fabric-react/lib/Icon";
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';

import {toggleLayer} from "../api/mapbox.js";

export default class SettingsTab extends Component {

    constructor()
    {
        super();

        this.state = {
            showSettings: null
        }
    }

    render() {
        var that = this;

        var window_animation_class;

        if(this.state.showSettings == null){
            window_animation_class = ""
        }
        else{
            window_animation_class = (that.state.showSettings) ? "settings-tab-window-slide-In" : "settings-tab-window-slide-Out";
        }

        return (
            <div id = "settings-tab">
                <div className = "settings-tab-button" onClick = {() => {
                    if(this.state.showSettings == null) this.state.showSettings = false;
                    this.setState({
                        showSettings: !that.state.showSettings
                    });
                }}>
                    <Icon iconName = "Settings"/>
                </div>
                <div className = {"settings-tab-window " + window_animation_class}>
                    <div className = "settings-tab-control">
                        <Toggle inlineLabel label = {"Air"} onChange = {(e, s) => {
                            toggleLayer("flightsAll", s);
                        }}/>
                    </div>
                    <div className = "settings-tab-control">
                        <Toggle inlineLabel label = {"Grounded"} onChange = {(e,s) => {
                            toggleLayer("flightsGrounded", s)
                        }}/>
                    </div>
                    <div className = "settings-tab-control">
                        <Toggle inlineLabel label = {"Airports"} onChange = {(e,s) => {
                            toggleLayer("Airports", s)
                        }}/>
                    </div>
                </div>
            </div>
        )
    }
}

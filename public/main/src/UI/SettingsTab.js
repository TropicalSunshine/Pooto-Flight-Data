import React, { Component } from 'react'
import {Icon} from "office-ui-fabric-react/lib/Icon";
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';

export default class SettingsTab extends Component {

    constructor()
    {
        super();

        this.state = {
            showSettings: false
        }
    }

    render() {
        var that = this;


        return (
            <div id = "settings-tab">
                <div className = "settings-tab-button" onClick = {() => {
                    this.setState({
                        showSettings: !that.state.showSettings
                    })
                }
                }>
                    <Icon iconName = "Settings"/>
                </div>
                <div className = {"settings-tab-window " + ((that.state.showSettings) ? "settings-tab-window-slide-In" : "settings-tab-window-slide-Out")}>
                    <div className = "settings-tab-control">
                        <Toggle inlineLabel label = {"Air"}/>
                    </div>
                    <div className = "settings-tab-control">
                        <Toggle inlineLabel label = {"Grounded"}/>
                    </div>
                    <div className = "settings-tab-control">
                        <Toggle inlineLabel label = {"Airports"}/>
                    </div>
                </div>
            </div>
        )
    }
}

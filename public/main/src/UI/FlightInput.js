
import React, { Component } from 'react'

export default class FlightInput extends Component {
    constructor(){
        super();
        this.state = {
            inputValue: ""
        }
    }
    render() {
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
                        console.log(this.state.inputValue);
                        
                        this.setState({
                            inputValue: ""
                        })
                    }}>
                        Find
                    </button>
                </div>
            </div>
        )
    }
}

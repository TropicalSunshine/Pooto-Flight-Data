import React, { Component } from 'react'

export default class Menu extends Component {
    constructor(){
        super();
        this.state = {
            inputValue: ""
        }
    }


    render() {

        return (
            <div id = "menu">
                <div className = "menu-title">Pooto Flight Tracker</div>
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

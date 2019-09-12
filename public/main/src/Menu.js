import React, { Component } from 'react'

export default class Menu extends Component {
    render() {

        var textInput = (<input type = "input"/>)
        return (
            <div id = "menu">
                <div className = "menu-title">Pooto Flight Tracker</div>
                <div>
                    {textInput}
                    <button onClick = {()=> {

                    }}>
                        Find
                    </button>
                </div>
            </div>
        )
    }
}

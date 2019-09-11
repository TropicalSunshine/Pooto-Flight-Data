import React, { Component } from 'react'


var d3 = require("d3");


export default class Map extends Component {

    render() {
        
        var svg = d3.select("body")
        .append("svg")
        .attr("width", window.screen.width)
        .attr("height", window.screen.height);

        function ready(data, err)
        {
            console.log(ready);
        }

        var proj = d3.geoMercator()
            .scale(500)
            .translate([window.screen.width/2, window.screen.height/2]);
        
        var p = d3.geoPath()
                .projection(proj);
        
        var g = svg.append("g")
                    .attr("d", p);
        
        return (
            <div>
                
            </div>
        )
    }
}

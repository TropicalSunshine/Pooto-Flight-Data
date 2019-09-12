import React, { Component } from 'react'
import {geoMercator, geoPath} from "d3-geo";
import {feature} from "topojson-client";

export default class Map extends Component {

    constructor(){
        super();
        this.state = {
            worldData: [],
          };
    }

    projection(){
        return geoMercator()
            .scale(100)
            .translate([400, 250]);
    }

    componentDidMount() {
        fetch("http://localhost:8181/data/world", {
            method: 'GET'
        })
          .then(response => {
            if (response.status !== 200) {
              console.log(`There was a problem: ${response.status}`)
              return
            }
            response.json().then(worldData => {
              this.setState({
                worldData: feature(worldData, worldData.objects.countries).features,
              })
              console.log(this.state.worldData);
            })
          })
      }

    render() {
        var mapStyle = {
            height: window.screen.height,
            width: window.screen.width
        }
        return(
            <div id = "Map" style = {mapStyle}>
            </div>
        )
        /*
        return (
          <svg width={ window.screen.width} height={window.screen.height } viewBox="0 0 800 450">
            <g className="countries">
              {
                this.state.worldData.map((d,index) => (
                  <path
                    key={ `path-${ index }` }
                    d={ geoPath().projection(this.projection())(d) }
                    className="country"
                    fill={ `rgba(38,50,56,${1 / this.state.worldData.length * index})` }
                    stroke="#FFFFFF"
                    strokeWidth={ 0.3 }
                  />
                ))
              }
            </g>
            <g className="markers">
              <circle
                cx={ this.projection()([8,48])[0] }
                cy={ this.projection()([8,48])[1] }
                r={ 10 }
                fill="#E91E63"
                className="marker"
              />
            </g>
          </svg>
        )
        */
      }
}

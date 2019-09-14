import React, { Component } from 'react';

export default class Map extends Component {

    constructor(){
        super();
    }

    componentDidMount()
    {
    }

    render() {
        var mapStyle = {
            position: "absolute",
            top: 0,
            bottom: 0,
            width: "100%"
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

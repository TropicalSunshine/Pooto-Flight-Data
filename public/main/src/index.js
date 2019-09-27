import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



var renderMap = require("./api/mapbox.js").renderMap;
var plotGrounded = require("./api/mapbox.js").plotGrounded;
var plotAirports = require("./api/mapbox.js").plotAirports;

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



//from mapbox api
renderMap();
plotGrounded();
plotAirports();






const express = require("express");
const fs = require("fs");
const axios = require("axios");

const router = express.Router();


var previousTime = null;
var allFlights;

var allFlightIntervalCAll = () => {
    axios.get("https://opensky-network.org/api/states/all")
    .then(response => {
        if(previousTime == response.data["time"]) null; 
        else previousTime = response.data["time"];
        allFlights = []
        response.data["states"].forEach(flight => {
            allFlights.push( {
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "type": "Point",
                  "coordinates": [flight[5], flight[6]],
                }
            });
        })

    }).catch(error => {
        console.log(error);    
    })
}

var allFlightInterval = setInterval(allFlightIntervalCAll, 4000);


router.get("/all", (req,res,next) => {
    res.header("content-type", "application/json");

    res.status(202).json({
        message: "success",
        data: allFlights
    })
})

module.exports = router;
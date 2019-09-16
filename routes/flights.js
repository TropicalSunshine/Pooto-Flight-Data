const express = require("express");
const fs = require("fs");
const axios = require("axios");

const router = express.Router();


var previousTime = null;


var flight_data = {
    all : []
};

var fetchAllStates = () => {
    var all_flights = [];

    axios.get("https://opensky-network.org/api/states/all")
    .then(response => {
        if(previousTime == response.data["time"]) null; 
        else
        {
            console.log("getting data");
            response.data["states"].forEach(flight => {
                all_flights.push( {
                    "type": "Feature",
                    "properties": {
                        "grounded": flight[8].toString()
                    },
                    "geometry": {
                    "type": "Point",
                    "coordinates": [flight[5], flight[6]],
                    }
                });
            });
        }
    flight_data["all"] = all_flights;
    }).catch(error => {
        console.log(error);    
    })
}

var flight_data_all_interval = setInterval(fetchAllStates, 2000);


router.get("/all", (req,res,next) => {
    res.header("content-type", "application/json");

    if(flight_data["all"] == [])
    {
        res.status(404).json({
            message: "error"
        })
    }
    else
    {
        res.status(200).json({
            message: "success",
            data: flight_data["all"]
        })
    }

})

module.exports = router;
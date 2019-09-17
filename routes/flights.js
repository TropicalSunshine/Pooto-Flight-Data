const express = require("express");
const fs = require("fs");
const axios = require("axios");

const router = express.Router();


var previousTime = null;


var flight_data = {
    all : [],
    grounded: []
};

var fetchAllStates = () => {
    var in_air_flights = [];
    var grouded_flights = [];

    axios.get("https://opensky-network.org/api/states/all")
    .then(response => {
        if(previousTime == response.data["time"]) null; 
        else
        {
            console.log("getting all flight data");
            response.data["states"].forEach(flight => {
                if(flight[8] == false)
                {
                    in_air_flights.push( {
                        "type": "Feature",
                        "properties": {
                            "grounded": flight[8].toString(),
                            "country": flight[2]
                        },
                        "geometry": {
                        "type": "Point",
                        "coordinates": [flight[5], flight[6]],
                        }
                    });
                }
                else if(flight[8])
                {
                    grounded_flights;
                }

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
const express = require("express");
const fs = require("fs");
const axios = require("axios");

const router = express.Router();


var previousTime = null;



router.get("/all", (req,res,next) => {
    var result = []; 

    axios.get("https://opensky-network.org/api/states/all")
    .then(response => {
        if(previousTime == response.data["time"]) null; 
        else previousTime = response.data["time"];
        console.log("getting data");
        response.data["states"].forEach(flight => {
            result.push( {
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "type": "Point",
                  "coordinates": [flight[5], flight[6]],
                }
            });
        });

        res.header("content-type", "application/json");

        res.status(202).json({
            message: "success",
            data: result
        })

    }).catch(error => {
        console.log(error);    
    })

})

module.exports = router;
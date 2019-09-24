const express = require("express");


const airports = require("../data/airports.js").airports;
const airports_all = require("../data/airports.js").airports_all;

const router = express.Router();

const axios = require("axios");


router.get("/all", (req, res, next) => {
    res.header("content-type", "application/json");

    var result = [];
    airports_all["all"].forEach((a) => {
        result.push({
            "type": "Feature",
            "properties": {
                "country": "null"
            },
            "geometry": {
            "type": "Point",
            "coordinates": [a[1], a[0]],
            }
        })
    })
    res.status(200).json({
        message: "success",
        data: result
    })
});

router.get("/:country", (req, res, next) => {
    var country = req.params.country.toUpperCase();

    res.header("content.type", "application/json");
    if(airports[country] != undefined){
        res.status(200).json({
            message: "success",
            data: airports[country]["airports"],
            num_airports: airports[country]["num_airports"]
        })
    }
    else{
        res.status(200).json({
            message: "no data found",
            data: null
        })
    }
});

router.get("/first/:country", (req, res, next) => {
    var country = req.params.country.toUpperCase();

    res.header("content-type", "application/json");


    if(airports[country] != undefined){
        res.status(200).json({
            message: "success",
            data: airports[country]["airports"][0]
        })
    }
    else{
        res.status(200).json({
            message: "no data found",
            data: null
        })
    }
});

router.get("/departure/icao24/:icao24", (req, res, next) => {
    var icao24 = req.params.icao24;

    var end = Math.floor(Date.now()/ 1000);
    var start = end - 10800;

    res.header("content-type", "application/json");

    axios.get(`https://tropicaltofu:Jason10271999@https://opensky-network.org/api/flights/departure?airport=${icao24}&begin=${start}&end=${end}`)
    .then(response => {

        if(response == []){
            res.status(404).json({
                message: "icao does not exist",
                data: null
            })
        }
        else {
            res.status(200).json({
                message: "icao24",
                data: response
            });
        }
    }).catch(error => {
        console.log("airports/icao Error: ", error);
    })
})

router.get("/arrivals/icao24/:icao24", (req, res, next) => {
    var icao24 = req.params.icao24;

    var end = Math.floor(Date.now()/ 1000);
    var start = end - 10800;

    res.header("content-type", "application/json");

    axios.get(`https://tropicaltofu:Jason10271999@https://opensky-network.org/api/flights/arrival?airport=${icao24}&begin=${start}&end=${end}`)
    .then(response => {

        if(response == []){
            res.status(404).json({
                message: "icao does not exist",
                data: null
            })
        }
        else {
            res.status(200).json({
                message: "icao24",
                data: response
            });
        }
    }).catch(error => {
        console.log("airports/icao Error: ", error);
    })
})






module.exports = router;
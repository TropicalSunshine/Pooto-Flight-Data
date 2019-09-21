const express = require("express");


const airports = require("../data/airports.js").airports;
const airports_all = require("../data/airports.js").airports_all;

const router = express.Router();


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
})

router.get("/:country", (req, res, next) => {
    var country = req.params.country.toUpperCase();

    res.header("content.type", "application/json");
    if(airports[country] != undefined){
        res.status(200).json({
            message: "success",
            data: airports[country]["airports"]
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

    res.header("content.type", "application/json");


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
})




module.exports = router;
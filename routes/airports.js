const express = require("express");

const airports = require("../data/airports.js").airports;

const router = express.Router();


router.get("/all", (req, res, next) => {
    var airports_all = [];
})

router.get("/:country", (req, res, next) => {
    var country = req.params.country.toUpperCase();

    res.header("content.type", "application/json");
    if(airports[country] != undefined){
        res.status(200).json({
            message: "success",
            data: airports[country]
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
            data: airports[country][0]
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
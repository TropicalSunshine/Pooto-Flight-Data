const express = require("express");
const fs = require("fs");

const router = express.Router();




router.get("/world", (req,res,next) => {
    var file = fs.readFileSync(__dirname + "/data/countries-110m.json", "utf8");
    res.header("Content-type", "application/json");
    res.status(200).json(JSON.parse(file));
})

module.exports = router;
const express = require("express");
const cors =  require("cors");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

const flightRoute = require('./routes/flights');

//handle cors errors
app.use(cors());

app.use(bodyParser.json());

//client page
app.use('/', express.static(path.join(__dirname + '/public/mainclient/build')));

//Game
app.use("/flights", flightRoute);


//if no routes are found
app.use((req, res, next) => {
    res.writeHeader(404, {
        "Content-Type" : "text/plain"
    })
    res.status(404).end("No Route Found");
})

module.exports = app;
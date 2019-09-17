var calc = require("../helpers/pointcalculations.js");


var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
mapboxgl.accessToken = 'pk.eyJ1IjoidHJvcGljYWx0b2Z1IiwiYSI6ImNrMGc5cWJjcDA1ZGMzY241aGtoeWJnczYifQ.1lkF8CRWw2bxBUsnBKd4Aw';

var MAP;

var getAllFlightCord = require("../helpers/network.js").getAllFlightCord;



module.exports = {
    map: MAP,
    _renderMap: function () {
        MAP = new mapboxgl.Map({
            container: 'Map',
            style: 'mapbox://styles/mapbox/streets-v11',
            zoom: 3,
            center: [-96, 37.8],
            style: 'mapbox://styles/mapbox/light-v10'
        });

        MAP.on("load", function () {

            //turn loader off
            document.getElementById("loader-overlay").classList.add("loader-fade-out");
            function pointsOnMap(data) {
                return {
                    "type": "FeatureCollection",
                    "features": data
                }
            }



            //load all flights
            getAllFlightCord((data) => {
                MAP.addSource("flightsAll", {
                    type: "geojson",
                    data: pointsOnMap(data)
                });

                MAP.addLayer({
                    id: "flightsAll",
                    source: "flightsAll",
                    type: "circle",
                    paint: {
                        "circle-radius": 4,
                        "circle-color": [
                            'match',
                            ["get", "grounded"],
                            "true", "red",
                            "false", "green",
                            "white"
                        ]
                    }
                });
            });

            MAP.addControl(new mapboxgl.NavigationControl());


            function updateFlights() {
                getAllFlightCord((data) => {
                    if (data != []) {
                        MAP.getSource("flightsAll").setData(pointsOnMap(data));
                    }
                })
            }



            var all_flight_interval = setInterval(updateFlights, 2000);
        });

    },
    renderLine: function (matrix) {
        MAP.addLayer({
            "id": "line",
            "type": "line",
            "source": {
                "type": "geojson",
                "data": {
                    "type": "Feature",
                    "properties": {},
                    "geometry": {
                        "type": "LineString",
                        "coordinates": matrix
                    }
                }
            },
            "layout": {
                "line-join": "round",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#888",
                "line-width": 8
            }
        });

    },
    removeLine: function(){
        MAP.removeLayer("line");
    },
    renderImage: function (img) {

    },
    drawFlightRoute: function (start, end) {
        console.log("start", start);
        console.log("end", end);

        var rightAngleCoords = {
            lat: Math.abs(start.lat - end.lat),
            long: end.long
        }

        var line_end = {
            lat: start.lat,
            long: start.long
        }

        var flight_route_geojson = {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        [start.lat, start.long]
                    ]
                }
            }]
        }

        var lat_increment = (end.lat - start.lat) / 100;
        var long_increment = (end.long - start.long) / 100;
        var frameCount = 0;


        MAP.addLayer({
            'id': 'flight-route',
            'type': 'line',
            'source': {
                'type': 'geojson',
                'data': flight_route_geojson
            },
            'layout': {
                'line-cap': 'round',
                'line-join': 'round'
            },
            'paint': {
                'line-color': '#ed6498',
                'line-width': 2.5,
                'line-opacity': 1
            }
        });

        function animateFlightRoute(){

            line_end.lat += lat_increment;
            line_end.long += long_increment;

            if(frameCount == 100)
            {
                frameCount = 0;
                line_end.lat = start.lat;
                line_end.long = start.long;

                flight_route_geojson.features[0].geometry.coordinates = [];
            }

            frameCount++;

            flight_route_geojson.features[0].geometry.coordinates.push([line_end.lat, line_end.long]);
            MAP.getSource('flight-route').setData(flight_route_geojson);
        };

        var flight_route_animate_interval = setInterval(animateFlightRoute, 1000/60);
    },
    removeFlightRoute: function(){
        MAP.removeLayer("flight-route");
    },
    drawPulseDot: function (center) {

        var size = 100;

        var pulsingDot = {
            width: size,
            height: size,
            data: new Uint8Array(size * size * 4),
            onAdd: function () {
                var canvas = document.createElement('canvas');
                canvas.width = this.width;
                canvas.height = this.height;
                this.context = canvas.getContext('2d');
            },
            render: function () {
                var duration = 1000;
                var t = (performance.now() % duration) / duration;

                var radius = size / 2 * 0.3;
                var outerRadius = size / 2 * 0.7 * t + radius;
                var context = this.context;

                // draw outer circle
                context.clearRect(0, 0, this.width, this.height);
                context.beginPath();
                context.arc(this.width / 2, this.height / 2, outerRadius, 0, Math.PI * 2);
                context.fillStyle = 'rgba(110, 197, 255,' + (1 - t) + ')';
                context.fill();

                //inner circle
                context.beginPath();
                context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
                context.fillStyle = 'rgba(3, 152, 252, 1)';
                context.strokeStyle = 'white';
                context.lineWidth = 2 + 4 * (1 - t);
                context.fill();
                context.stroke();

                // update this image's data with data from the canvas
                this.data = context.getImageData(0, 0, this.width, this.height).data;

                // keep the map repainting
                MAP.triggerRepaint();

                // return `true` to let the map know that the image was updated
                return true;
            }
        };

        MAP.addImage('pulsing-dot', pulsingDot, { pixelRatio: 2 });

        MAP.addLayer({
            "id": "pulsing-dot",
            "type": "symbol",
            "source": {
                "type": "geojson",
                "data": {
                    "type": "FeatureCollection",
                    "features": [{
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": center
                        }
                    }]
                }
            },
            "layout": {
                "icon-image": "pulsing-dot"
            }
        });
    },
    moveCamera: function (center, zoom = 3) {
        MAP.flyTo({
            center: center,
            zoom: zoom
        })
    }
}
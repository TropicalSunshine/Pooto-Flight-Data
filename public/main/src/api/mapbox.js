
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
        
        MAP.on("load", function(){
          
            function pointsOnMap(data){
                console.log(data);
                console.log(localStorage.data);
              return {
                "type": "FeatureCollection",
                "features":localStorage.data
              }
            }

            getAllFlightCord((data) => {
                localStorage.data = data;
              pointsOnMap(data);
            })
          
            MAP.addSource("flightsAll", {
                type: "geojson",
                data: pointsOnMap()
            });

            MAP.addLayer({
                id: "flightsAll",
                source: "flightsAll",
                type: "circle", 
                paint: {
                    "circle-radius": 10,
                    "circle-color": "green"
                }
            });

            function updateFlights()
            {
              MAP.getSource("flightsAll").setData(pointsOnMap());
            }

            //var all_flight_interval = setInterval(updateFlights, 3000);

        });

    },
    renderLine: function (matrix) {
        MAP.addLayer({
            "id": "route",
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
    renderImage: function (img) {

    },
    moveCamera: function (center, zoom = 3) {
        MAP.flyTo({
            center: center,
            zoom: zoom
        })
    }
}
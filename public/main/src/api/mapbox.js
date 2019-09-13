var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
mapboxgl.accessToken = 'pk.eyJ1IjoidHJvcGljYWx0b2Z1IiwiYSI6ImNrMGc5cWJjcDA1ZGMzY241aGtoeWJnczYifQ.1lkF8CRWw2bxBUsnBKd4Aw';

var MAP;

function renderMap()
{
    MAP = new mapboxgl.Map({
        container: 'Map',
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 3,
        center: [-96, 37.8]
    })

    MAP.addControl(new mapboxgl.NavigationControl());

    MAP.setStyle('mapbox://styles/mapbox/light-v10');
}

module.exports = {
    renderMap: renderMap,
    MAP: MAP
}
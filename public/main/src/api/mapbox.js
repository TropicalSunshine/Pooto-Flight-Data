var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
mapboxgl.accessToken = 'pk.eyJ1IjoidHJvcGljYWx0b2Z1IiwiYSI6ImNrMGc5cWJjcDA1ZGMzY241aGtoeWJnczYifQ.1lkF8CRWw2bxBUsnBKd4Aw';


function renderMap()
{
    var map = new mapboxgl.Map({
    container: 'Map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 13,
    center: [4.899, 52.372]
    });
    
    map.addControl(new mapboxgl.NavigationControl());
    
    map.setStyle('mapbox://styles/mapbox/light-v10');
}

module.exports = {
    renderMap: renderMap
}
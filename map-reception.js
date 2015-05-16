L.mapbox.accessToken = 'pk.eyJ1IjoiZjFsdDNyIiwiYSI6IjZyc2FabUkifQ.L__PUg1a1x1n4wy5sn2J3Q';

var coords = [42.402003,-71.139613];

var map = L.mapbox.map('map', 'examples.map-i86nkdio')
    .setView(coords, 15);


L.mapbox.featureLayer({
    type: 'Feature',
    geometry: {
        type: 'Point',
        coordinates: coords.reverse()
    },
    properties: {
        title: 'Our Place',
        description: '29 Thorndike St, Arlington, MA 02373 <br> (617) 669-1768',
        'marker-size': 'large',
        'marker-color': '#BE9A6B',
        'marker-symbol': 'bar'
    }
}).addTo(map);


map.scrollWheelZoom.disable();
L.mapbox.accessToken = 'pk.eyJ1IjoiZjFsdDNyIiwiYSI6IjZyc2FabUkifQ.L__PUg1a1x1n4wy5sn2J3Q';

var coords = [42.3569, -71.0622];

var map = L.mapbox.map('map', 'examples.map-i86nkdio')
    .setView(coords, 15);

// var marker = L.marker(coords, {
//     icon: L.mapbox.marker.icon({
//       'marker-color': '#f86767'
//     })
// })
// .addTo(map)
// ;



L.mapbox.featureLayer({
    type: 'Feature',
    geometry: {
        type: 'Point',
        coordinates: coords.reverse()
    },
    properties: {
        title: 'Park Street Church',
        description: '1 Park Street, Boston, MA 02108, (617) 523-3383',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'large',
        'marker-color': '#BE9A6B',
        // 'marker-symbol': 'religious-christian'
        'marker-symbol': 'religious-christian'
    }
}).addTo(map);
document.addEventListener("DOMContentLoaded", function () {


});


function initMap() {

  var options = {
    zoom:   12,
    center: { lat: 41.8781, lng: -87.6298 },

    /* tried to match colors to website !*/
    styles: [
      { featureType: "all",          elementType: "geometry.fill",   stylers: [{ color: "#f5ede0" }] },
      { featureType: "water",        elementType: "geometry",        stylers: [{ color: "#aad3df" }] },
      { featureType: "road",         elementType: "geometry.fill",   stylers: [{ color: "#fffbe8" }] },
      { featureType: "road",         elementType: "geometry.stroke", stylers: [{ color: "#b47e59" }, { weight: 1 }] },
      { featureType: "transit.line", elementType: "geometry",        stylers: [{ color: "#9c7a5e" }] },
      { featureType: "poi.park",     elementType: "geometry.fill",   stylers: [{ color: "#c8e6c9" }] },
      {                              elementType: "labels.text.fill",stylers: [{ color: "#2c1a0e" }] }
    ],

    mapTypeControl:    false,
    streetViewControl: false
  };

  var container = document.getElementById("map");

  var map = new google.maps.Map(container, options);

};
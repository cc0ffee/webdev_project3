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

  var el = document.getElementById("map");

  var map = new google.maps.Map(el, options);

  var locations = [
    { title: "Ritual Coffeehouse", lat: 41.8965, lng: -87.6768, category: "coffee", desc: "My favorite coffeeshop! Right off Irving Park Brown Line stop." },
    { title: "Standing Passengers", lat: 41.8951, lng: -87.6602, category: "coffee", desc: "Best Vibes for a cafe, and awesome people always there!" },
    { title: "Wormhole Coffee", lat: 41.9086, lng: -87.6801, category: "coffee", desc: "Get the Ghostly Trio! One of the best speciality drinks in the city!" },
    { title: "Damen Blue Line Station", lat: 41.9095, lng: -87.6779, category: "cta", desc: "My favorite CTA station — great architecture and an iconic Chicago L stop." },
    { title: "Midway (Orange Line terminus)", lat: 41.7869, lng: -87.7378, category: "cta", desc: "Southern end of the Orange Line, my favorite train line on the CTA!" },
    { title: "Illinois Institute of Technology", lat: 41.8350, lng: -87.6272, category: "iit", desc: "The university!" },
    { title: "The Bog (IIT Arcade)", lat: 41.8348, lng: -87.6268, category: "iit", desc: "The arcade where I maintain the DDR machine. Going 2 years strong!" }
  ];

};
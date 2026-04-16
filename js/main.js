document.addEventListener("DOMContentLoaded", function () {


});

function initMap() {

  var options = {
    zoom:   10,
    center: { lat: 41.8781, lng: -87.6298 },

    /* tried to match colors to website !*/
    styles: [
      { featureType: "all", elementType: "geometry.fill", stylers: [{ color: "#f5ede0" }] },
      { featureType: "water", elementType: "geometry", stylers: [{ color: "#aad3df" }] },
      { featureType: "road", elementType: "geometry.fill", stylers: [{ color: "#fffbe8" }] },
      { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#b47e59" }, { weight: 1 }] },
      { featureType: "transit.line", elementType: "geometry", stylers: [{ color: "#9c7a5e" }] },
      { featureType: "poi.park", elementType: "geometry.fill", stylers: [{ color: "#c8e6c9" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#2c1a0e" }] }
    ],

    mapTypeControl:    false,
    streetViewControl: false
  };

  var el = document.getElementById("map");

  var map = new google.maps.Map(el, options);

  var locations = [
    { title: "Ritual Coffeehouse", lat: 41.9540523, lng: -87.6752372, category: "coffee", desc: "My favorite coffeeshop! Right off Irving Park Brown Line stop." },
    { title: "Standing Passengers", lat: 41.8962681, lng: -87.6647176, category: "coffee", desc: "Best Vibes for a cafe, and awesome people always there!" },
    { title: "Wormhole Coffee", lat: 41.9084133, lng: -87.6746028, category: "coffee", desc: "Get the Ghostly Trio! One of the best speciality drinks in the city!" },
    { title: "Illinois Institute of Technology", lat: 41.8350, lng: -87.6272, category: "iit", desc: "The university!" },
    { title: "The Bog (IIT Arcade)", lat: 41.8353544, lng: -87.6282624, category: "iit", desc: "The arcade where I maintain the DDR machine. Going 2 years strong!" }
  ];

  var infoBox = document.getElementById("info-box");

  locations.forEach(function (loc) {
    var marker = new google.maps.Marker({
      position: {lat: loc.lat, lng: loc.lng },
      map: map,
      title: loc.title,
    });

    marker.addListener("click", function () {
      if (infoBox) {
        infoBox.innerHTML = "<strong>" + loc.title + "</strong><br>" + loc.desc;
      }
      map.panTo(marker.getPosition());
    });
  });

}
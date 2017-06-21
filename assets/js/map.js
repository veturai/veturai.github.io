var map;
var mapCenter = {lat: 51.8686, lng: 10.57};

function setMapZoom() {
  var browserWidth = $(window).width();
  if (browserWidth > 1600) {
    map.setZoom(6);
  } else if (browserWidth > 730) {
    map.setZoom(5);
  } else {
    map.setZoom(4);
  }
}

function initMap() {
  var styles = [
    {
      "featureType": "administrative",
      "elementType": "all",
      "stylers": [
        {
          "saturation": "-100"
        }
      ]
    },
    {
      "featureType": "administrative.province",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [
        {
          "saturation": -100
        },
        {
          "lightness": 65
        },
        {
          "visibility": "on"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [
        {
          "saturation": -100
        },
        {
          "lightness": "50"
        },
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "all",
      "stylers": [
        {
          "saturation": "-100"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "all",
      "stylers": [
        {
          "lightness": "30"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "all",
      "stylers": [
        {
          "lightness": "40"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [
        {
          "saturation": -100
        },
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "hue": "#ffff00"
        },
        {
          "lightness": -25
        },
        {
          "saturation": -97
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels",
      "stylers": [
        {
          "lightness": -25
        },
        {
          "saturation": -100
        }
      ]
    }
  ];

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: mapCenter,
    styles: styles,
    draggable: false,
    zoomControl: false,
    scrollwheel: false,
    mapTypeControl: false,
    disableDoubleClickZoom: true,
    streetViewControl: false
  });

  var warsawPlace = {lat: 52.2297, lng: 21.0122};
  var londonPlace = {lat: 51.5074, lng: -0.1};

  var marker1 = new google.maps.Marker({
    position: warsawPlace,
    map: map
  });
  var marker2 = new google.maps.Marker({
    position: londonPlace,
    map: map
  });

  setMapZoom();
}

$(document).ready(function() {
  google.maps.event.addDomListener(window, "load", initMap);
  google.maps.event.addDomListener(window, "resize", function() {
    google.maps.event.trigger(map, "resize");
    map.setCenter(mapCenter);
    setMapZoom();
  });
});

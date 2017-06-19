function initMap() {
  var centerPlace = {lat: 51.8686, lng: 10.57};

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

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: centerPlace,
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
}

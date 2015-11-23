var map;

function initMap() {
  
  var center, styledMap, styleOptions, mapOptions;

  center = {lat: 51.9227019, lng: 4.5080807};
  
  mapOptions = {
    zoom: 13,
    center: center,
    disableDefaultUI: true
  };

  styleOptions = [{
    featureType: "all",
      "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "hue": "#006fff"
            },
            {
                "saturation": "-25"
            },
            {
                "gamma": "0.80"
            },
            {
                "weight": "1.00"
            },
            {
                "lightness": "0"
            }
      ]
  }];


  styledMap = new google.maps.StyledMapType(styleOptions);

  map = new google.maps.Map(document.getElementById('map'), mapOptions);
  
  map.mapTypes.set('map_style', styledMap);
  
  map.setMapTypeId('map_style');
}
var map, center, styledMap, styleOptions, mapOptions;

function initMap() {
  
  center = {lat: 51.9247133, lng: 4.4770082};
  
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

  mapOptions = {
    zoom: 13,
    center: center,
    disableDefaultUI: true
  };

  styledMap = new google.maps.StyledMapType(styleOptions);
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
  
  // Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Rotterdam</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Rotterdam</b>, also referred to as <b>Rotterdam</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
      'features of the Uluru - Kata Tjuta National Park. Uluru is '+
      'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
      'Aboriginal people of the area. It has many springs, waterholes, '+
      'rock caves and ancient paintings. Uluru is listed as a World '+
      'Heritage Site.</p>'+
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    position: center,
    map: map,
    title: 'Uluru (Ayers Rock)'
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

}
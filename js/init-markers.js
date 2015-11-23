function initMarkers () {
  
  var createListItem = function (marker){
    
    var el = $('<a href="#" class="list-group-item">' + marker.title + '</a>');
    
    el.on('click', function(){
      google.maps.event.trigger(marker, 'click');
    });

    $('#places-list').prepend(el);
  };

  var createMarker = function (marker_data){

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng( marker_data.coords.lat, marker_data.coords.lng),
      map: map,
      title: marker_data.name
    });
    
    google.maps.event.addListener(marker, 'click', onMarkerClick);

    createListItem(marker);
  };
  
  var onMarkerClick = function() {

    var marker = this;

    var contentString = '<div id="content"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading">' + marker.title + '</h1><div id="bodyContent"><p><b>' + marker.title + '</b>, is a very interesting place. A must see when visiting Rotterdam.</p></div></div>';

    infowindow.setContent(contentString);

    infowindow.open(map, marker);
  };

  var infowindow = new google.maps.InfoWindow;

  google.maps.event.addListener(map, 'click', function() {
    infowindow.close();
  });

  for (index in placesData) {
    createMarker( placesData[index] ); 
  }
}

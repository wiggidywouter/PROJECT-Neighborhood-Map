/*
  Description:
  1. Loops through all places data then calls _createMarker() for every item
  2. Within the _createMarker() function _createListItem() gets called for every item
*/

var placesList = ko.observableArray();

function initMarkers () {

  var _createListItem = function (marker){
    
    var triggerMarkClick = function() {
      google.maps.event.trigger(marker, 'click');
      appViewModel.searchField('');
      appViewModel.searchPlaces('');
    };

    placesList.push({name: marker.title, trigger: triggerMarkClick, show: ko.observable(true) });

  };

  var _createMarker = function (place_data){

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng( place_data.coords.lat, place_data.coords.lng ),
      map: map,
      icon: 'img/blue-marker.png',
      title: place_data.name
    });
    
    google.maps.event.addListener(marker, 'click', onMarkerClick);
    // -> _createListItem
    _createListItem(marker);
  };

  var onMarkerClick = function() {

    var marker = this;

    var contentString = '<div id="content" class="dragscroll"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading">' + marker.title + '</h1><div id="bodyContent"><div id="info-window"><p><b>' + marker.title + '</b>, is a very interesting place. A must see when visiting Rotterdam.</p><span data-bind="html: placeDetails"></span></div></div></div>';

    infowindow.setContent(contentString);

    infowindow.open(map, marker);
    
    infoViewModel.placeDetails('');
    
    ko.applyBindings(infoViewModel, document.getElementById('info-window'));
    
    getDetails(marker.title);
  };

  var infowindow = new google.maps.InfoWindow({maxWidth:350, maxHeight:50});

  google.maps.event.addListener(map, 'click', function() {
    infowindow.close();
  });

  for (index in placesData){
    _createMarker( placesData[index] );
  }

}

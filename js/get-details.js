function getDetails (query){

  var service = new google.maps.places.PlacesService(map);

  var _getdetails = function(place_id){
    service.getDetails({ placeId: place_id }, function(place, status) {

      console.log(place);

      var html = '';
      html += (place.photos[0]) ? '<img src="' + place.photos[0].getUrl({'maxWidth': 350, 'maxHeight': 350}) + '" alt="' + place.name +'">' : '';
      html += (place.formatted_address) ? '<span class="clearfix">' + place.formatted_address + '</span>' : '';
      html += (place.website) ? '<a href="' + place.website + '">' + place.website + '</a>' + '<br>' : '';
      html += (place.formatted_phone_number) ? 'Tel: ' + place.formatted_phone_number : '';   

      infoViewModel.placeDetails(html);
      dragscroll.reset();
    });
  } 

  var _getPlaceId = function (query){
    var request = { location: map.getCenter(), radius: '500', query: query };

    service.textSearch(request, function(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        // => _getdetails
        _getdetails(results[0].place_id);
      }
    });
  }
  
  _getPlaceId(query);

}
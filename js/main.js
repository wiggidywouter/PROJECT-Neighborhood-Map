function AppViewModel() {
    
    var self = this;
    
    self.searchField = ko.observable();
    
    self.placesList = placesList;

    self.searchPlaces = function() {

        jQuery.each(self.placesList(), function(index, place) {

            var patt = new RegExp(self.searchField(),"i");

            place.show( patt.test(place.name) );

        });
    }
}

function InfoViewModel() {
    
    var self = this;

    self.placeDetails = ko.observable();

}

function initialize () {
  initMap();
  initMarkers();
}

var appViewModel = new AppViewModel();

var infoViewModel = new InfoViewModel();

ko.applyBindings(appViewModel);
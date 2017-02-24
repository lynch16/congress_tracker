function SearchLegislatorsController($scope, $window, $state, NgMap) {

  var map, search = this;

  search.address = '';

  $scope.$on('mapInitialized', function(evt, evtMap) {
    map = evtMap;
    var geocoder = new google.maps.Geocoder();
    $scope.$watch(function(){
      return search.address;
    }, function(newVal, oldVal){
      geocodeAddress(geocoder, map)
    })
  })

  function geocodeAddress(geocoder, resultsMap){
    geocoder.geocode({'address': search.address}, function(results, status) {
      if (status === 'OK') {
        resultsMap.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location
        });
        var lat = results[0].geometry.location.lat();
        var long = results[0].geometry.location.lng();
        $state.go('legislators', {lat: lat, long: long});

      }
    });
  }
}

angular
  .module('app')
  .controller('SearchLegislatorsController', SearchLegislatorsController)

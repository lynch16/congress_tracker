function SearchController($scope, NgMap) {

  var marker, map, lat, long;

  $scope.getCoords = function(){
    NgMap.getMap().then(function(evtMap) {
      map = evtMap;
      marker = map.markers[0];
      lat = marker.getPosition().lat();
      long = marker.getPosition().lng();
      console.log(lat + ', ' + long);
    });
  }
  //stories contains each story returned from http get within stories.data
      // Do stuff with your $scope.
      // Note: Some of the directives require at least something to be defined originally!
      // e.g. $scope.markers = []

      // uiGmapGoogleMapApi is a promise.
      // The "then" callback function provides the google.maps object.
}

angular
  .module('app')
  .controller('SearchController', SearchController)

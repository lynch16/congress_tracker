function SearchController($scope, NgMap) {

  NgMap.getMap().then(function(map) {
    console.log(map.getCenter());
    console.log('markers', map.markers);
    console.log('shapes', map.shapes);
  });
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

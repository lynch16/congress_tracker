function SearchController($scope, $state, NgMap) {

  var marker, map, lat, long;

  $scope.getCoords = function(){
    NgMap.getMap().then(function(evtMap) {
      map = evtMap;
      marker = map.markers[0];
      lat = marker.getPosition().lat();
      long = marker.getPosition().lng();
      $state.go('legislators', {lat: lat, long: long});
    });
  }
}

angular
  .module('app')
  .controller('SearchController', SearchController)

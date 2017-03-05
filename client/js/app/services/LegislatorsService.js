function LegislatorsService($http){
  this.searchByLocation = function(lat, long){
    return $http({
      url: "http://localhost:3000/legislators/",
      method: 'GET',
      params: {
        lat: lat,
        long: long
      }
    });
  }

  this.searchByState = function(state){
    return $http({
      url: "http://localhost:3000/legislators/",
      method: 'GET',
      params: {
        state: state
      }
    });
  }
}

angular
  .module('app')
  .service('LegislatorsService', LegislatorsService)

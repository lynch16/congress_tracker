function LegislatorService($http){
  this.getLegislator = function(id){
    return $http.get('http://localhost:3000/legislators/' + id);
  }
}

angular
  .module('app')
  .service('LegislatorService', LegislatorService)

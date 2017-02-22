function StatesService($http){
  this.getStateLegislators = function(id){
    return $http.get('https://localhost:3000/states/' + id);
  }
}

angular
  .module('app')
  .service('StatesService', StatesService)

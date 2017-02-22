function StatesService($http){
  this.getAllStates = function(){
    return $http.get('http://localhost:3000/states')
  }

  this.getState = function(id){
    return $http.get('http://localhost:3000/states/' + id);
  }
}

angular
  .module('app')
  .service('StatesService', StatesService)

function StatesController(states, $scope) {

  var ctrl = this;
  ctrl.states = states.data
}

angular
  .module('app')
  .controller('StatesController', StatesController)

function StatesController(states, $scope) {

  var vm = this;
  vm.states = states.data
}

angular
  .module('app')
  .controller('StatesController', StatesController)

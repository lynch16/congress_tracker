function StateController(state){
  this.data = state.data;
}

angular
  .module('app')
  .controller('StateController', StateController)

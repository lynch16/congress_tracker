function HomeController(states) {
  //stories contains each story returned from http get within stories.data

  var ctrl = this;
  ctrl.states = states.data
}

angular
  .module('app')
  .controller('HomeController', HomeController)

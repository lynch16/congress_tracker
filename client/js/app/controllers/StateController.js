function StateController(state){
  this.data = state.data;
  var thisState = this;

  thisState.districts = state.data.districts.sort(function(a,b){
    return a.name - b.name;
  });
}

angular
  .module('app')
  .controller('StateController', StateController)

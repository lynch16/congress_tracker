function StateController(state){
  this.data = state.data;
  console.log(state.data);

  this.districts = state.data.districts.sort(function(a,b){
    return a.name - b.name;
  })
}

angular
  .module('app')
  .controller('StateController', StateController)

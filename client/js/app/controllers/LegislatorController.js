function LegislatorController(legislators){
  var vm = this;
  vm.legislators = legislators.data;
}

angular
  .module('app')
  .controller('LegislatorController', LegislatorController)

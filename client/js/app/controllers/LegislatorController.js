function LegislatorController(legislators){
  var vm = this;
  vm.legislators = legislators.data;
  vm.availableOptions = [
    {value: 'Senate', name: 'Senate'},
    {value: 'House', name: 'House'}
  ]
}

angular
  .module('app')
  .controller('LegislatorController', LegislatorController)

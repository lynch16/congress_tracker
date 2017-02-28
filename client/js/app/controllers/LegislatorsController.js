function LegislatorsController(legislators){
  var vm = this;
  vm.legislators = legislators.data;
  console.log(vm.legislators);
  vm.availableOptions = [
    {value: '', name: 'All'},
    {value: 'Senate', name: 'Senate'},
    {value: 'House', name: 'House'}
  ]
}

angular
  .module('app')
  .controller('LegislatorsController', LegislatorsController)

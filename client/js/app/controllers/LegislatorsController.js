function LegislatorsController(legislators){
  var vm = this;
  vm.legislators = legislators.data;
  vm.availableOptions = [
    {value: '', name: 'All'},
    {value: 'Senate', name: 'Senate'},
    {value: 'House', name: 'House'}
  ]
}

angular
  .module('app')
  .controller('LegislatorsController', LegislatorsController)

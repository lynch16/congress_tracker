function LegislatorsController(legislators){
  var district, foundDistrict, vm = this;
  vm.legislators = legislators.data;
  vm.availableOptions = [
    {value: '', name: 'All'},
    {value: 'Senate', name: 'Senate'},
    {value: 'House', name: 'House'}
  ]

  var l = vm.legislators.length;

  vm.legislators.districts = []

  for (let a = 0; a < l; a++){ //go through each legislator
    district = {}
    foundDistrict = {}
    district['name'] = vm.legislators[a].district;
    d = vm.legislators.districts.length;
    for (let i = 0; i < d; i++){ //search all distrits for one matching the above name
      if (vm.legislators.districts[i].name === district['name']){
        foundDistrict = vm.legislators.districts[i]
      }
    }
    if (typeof foundDistrict.name === 'undefined'){ //if district isn't found
      if (vm.legislators[a].chamber === 'Senate'){ //build district object
        district["senate"] = (vm.legislators[a]);
      } else if (vm.legislators[a].chamber === 'House of Representatives'){
        district["house"] = (vm.legislators[a]);
      }
      vm.legislators.districts.push(district); //and save to array
    } else {
      if (vm.legislators[a].chamber === 'Senate'){ //otherwise update legislators for district
        foundDistrict["senate"] = (vm.legislators[a]);
      } else if (vm.legislators[a].chamber === 'House of Representatives'){
        foundDistrict["house"] = (vm.legislators[a]);
      }
    }
  }
}

angular
  .module('app')
  .controller('LegislatorsController', LegislatorsController)

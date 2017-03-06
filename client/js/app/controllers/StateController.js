function StateController(state){
  this.data = state.data;
  var thisState = this;
  // thisState.legislators = legislators.data
  thisState.districts = state.data.districts.sort(function(a,b){
    return a.name - b.name;
  });

  // var d = thisState.districts.length;
  // var l = thisState.legislators.length;
  //
  // for (let i = 0; i < d; i++){ //roll through districts
  //   thisState.districts[i].legislators = {};
  //   for (let j = 0; j < l; j++){ //then through legislators
  //     if (thisState.districts[i].name === thisState.legislators[j].district){ //if they match
  //       if (thisState.legislators[j].chamber === 'Senate'){
  //         thisState.districts[i].legislators["senate"] = thisState.legislators[j]; //save the legislator in that district
  //       } else if (thisState.legislators[j].chamber === 'House of Representatives'){
  //         thisState.districts[i].legislators["house"] = thisState.legislators[j];
  //       }
  //     }
  //   }
  // }
}

angular
  .module('app')
  .controller('StateController', StateController)

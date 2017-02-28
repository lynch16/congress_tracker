function LegislatorController(legislator, $scope, $http){
  this.data = legislator.data;
  var legislator = this;

  function upVote($http){
    return $http.get('http://localhost:3000/legislators/' + this.data.id + '/upvote')
  }

  function downvote($http){
    return $http.get('http://localhost:3000/legislators/' + this.data.id + '/downvote')
  }


}

angular
  .module('app')
  .controller('LegislatorController', LegislatorController)

function LegislatorController(legislator, $scope, $http){
  this.data = legislator.data;
  var statesman = this;

  $scope.upVote = function(){
    $http.get('http://localhost:3000/legislators/' + statesman.data.id + '/upvote').success(function(data){
      statesman.data.popularity = data.popularity;
    });
  }

  $scope.downVote = function(){
    $http.get('http://localhost:3000/legislators/' + statesman.data.id + '/downvote').success(function(data){
      statesman.data.popularity = data.popularity;
    });
  }


}

angular
  .module('app')
  .controller('LegislatorController', LegislatorController)

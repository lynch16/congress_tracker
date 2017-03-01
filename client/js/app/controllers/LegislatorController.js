function LegislatorController(legislator, $scope, $http){
  this.data = legislator.data;
  console.log(this.data);
  var statesman = this;
  statesman.comment = '';

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

  $scope.comment = function(){
    if(statesman.comment != ''){
      $http.post('http://localhost:3000/legislators/' + statesman.data.id + '/comment', {comment: statesman.comment, author: 'me'}).success(function(data){
        statesman.data.comments.push(data.comment);
      })
    }
  }
}

angular
  .module('app')
  .controller('LegislatorController', LegislatorController)

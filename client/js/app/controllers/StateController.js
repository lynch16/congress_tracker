function StateController(post){
  this.data = post.data;
}

angular
  .module('app')
  .controller('StateController', StateController)

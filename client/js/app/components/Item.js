var Item = {
  templateUrl: 'views/item.html',
  bindings: {
    id: "="
  },
  controller: function(PostsService){
    var ctrl = this;
    console.log("post");

    PostsService
      .getStory(this.id)
      .then(function(res){
        ctrl.data = res.data;
      })
  },
  controllerAs: 'item'
};

angular
  .module('app')
  .component('item', Item)

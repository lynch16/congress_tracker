angular
    .module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'views/home.html',
          controller: 'HomeController as home',
          resolve: {
            posts: function(PostsService){
              return PostsService.getTopStories();
            }
          }
        })
        .state('state', {
          url: '/state/:id',
          templateUrl: 'views/state.html',
          controller: 'StateController as state',
          resolve: {
            post: function($stateParams, PostsService){
              return PostsService.getStory($stateParams.id);
            }
          }
        })

        $urlRouterProvider.otherwise('/home')
    })

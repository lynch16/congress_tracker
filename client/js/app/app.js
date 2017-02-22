angular
    .module('app', ['ui.router', 'ngMap'])
    .config(function($stateProvider, $urlRouterProvider){

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'views/home.html',
          controller: 'HomeController as home',
          resolve: {
            states: function(StatesService){
              return StatesService.getAllStates();
              }
            }
          })
          .state('search', {
            url: '/search',
            templateUrl: 'views/search.html',
            controller: 'SearchController as search',
            resolve: {
              }
            })
          .state('state', {
            url: '/state/:id',
            templateUrl: 'views/state.html',
            controller: 'StateController as state',
            resolve: {
              state: function($stateParams, StatesService){
                return StatesService.getDistricts($stateParams.id);
              }
            }
          })

        $urlRouterProvider.otherwise('/home')
    })

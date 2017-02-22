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
          .state('legislators', {
            url: '/legislator',
            templateUrl: 'views/legislators.html',
            controller: 'LegislatorController as legislator',
            resolve: {
              legislators: function($stateParams, LegislatorsService){
              }
            }
          })
          .state('legislators.profile', {
            url: '/legislator/:id',
            templateUrl: 'views/legislators/profile.html',
            controller: 'LegislatorProfileController as profile',
            resolve: {
              legislator: function($stateParams, LegislatorsService){
              }
            }
          })
          .state('legislators.search', {
            params: {
              lat: '',
              long: ''
            }
            templateUrl: 'views/state.html',
            controller: 'StateController as state',
            resolve: {
              legislator: function($stateParams, LegislatorsService){
                return LegislatorsService.searchLegislators($stateParams.lat, $stateParams.long)
              }
            }
          })

        $urlRouterProvider.otherwise('/home')
    })

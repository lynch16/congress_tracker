angular
    .module('app', ['ui.router', 'ngMap'])
    .config(function($stateProvider, $urlRouterProvider){

      $stateProvider
          .state('home',{
            url: '/',
            templateUrl: 'views/home.html'
          })
          .state('states', {
            url: '/states',
            templateUrl: 'views/states.html',
            controller: 'StatesController as vm',
            resolve: {
              states: function(StatesService){
                return StatesService.getAllStates();
                }
              }
            })
          .state('state', {
            url: '/states/:id',
            templateUrl: 'views/states/state.html',
            controller: 'StateController as state',
            resolve: {
              state: function($stateParams, StatesService){
                return StatesService.getDistricts($stateParams.id);
              }
            }
          })
          .state('state.legislators', {
            url: '/legislators',
            templateUrl: 'views/states/legislators.html',
            controller: 'LegislatorsController as vm',
            resolve: {
              legislators: function($stateParams, LegislatorsService){
                return LegislatorsService.searchByState($stateParams.id);
              }
            }
          })
          .state('search.legislators', {
            url: '/legislators',
            params: {
              lat: null,
              long: null
            },
            templateUrl: 'views/legislators.html',
            controller: 'LegislatorsController as ctrl',
            resolve: {
              legislators: function($stateParams, LegislatorsService){
                  return LegislatorsService.searchByLocation($stateParams.lat, $stateParams.long)
                }
              }
            })
          .state('search', {
            url: '/search',
            templateUrl: 'views/search.html',
            controller: 'SearchLegislatorsController as search',
          })
          .state('legislators', {
            url: '/legislators',
            templateUrl: 'views/legislators.html',
          })
          .state('legislator', {
            url: '/legislators/:id',
            templateUrl: 'views/legislators/profile.html',
            controller: 'LegislatorController as legislator',
            resolve: {
              legislator: function($stateParams, LegislatorService){
                return LegislatorService.getLegislator($stateParams.id)
              }
            }
          })

        $urlRouterProvider.otherwise('/')
    })

angular
    .module('app', ['ui.router', 'ngMap'])
    .config(function($stateProvider, $urlRouterProvider){

      $stateProvider
          .state('legislators', {
            url: '/legislators',
            params: {
              lat: null,
              long: null
            },
            templateUrl: 'views/legislator.html',
            controller: 'LegislatorsController',
            resolve: {
              legislators: function($stateParams, LegislatorsService){
                  return LegislatorsService.searchByLocation($stateParams.lat, $stateParams.long)
                }
              }
            });
          .state('legislators.search', {
            url: '/search',
            templateUrl: 'views/legislators/search.html',
            controller: 'SearchLegislatorsController as search',
          });
          .state('states', {
            url: '/',
            templateUrl: 'views/states.html',
            controller: 'StatesController as states',
            resolve: {
              states: function(StatesService){
                return StatesService.getAllStates();
                }
              }
            });
          .state('state', {
            url: '/state/:id',
            templateUrl: 'views/state.html',
            controller: 'StateController as state',
            resolve: {
              state: function($stateParams, StatesService){
                return StatesService.getDistricts($stateParams.id);
              }
            }
          });
          // .state('legislators.profile', {
          //   url: '/legislator/:id',
          //   templateUrl: 'views/legislators/profile.html',
          //   controller: 'LegislatorProfileController as profile',
          //   resolve: {
          //     legislator: function($stateParams, LegislatorsService){
          //     }
          //   }
          // })
          // .state('legislators', {
          //   url: '/legislators?lat&long',
          //
          //   templateUrl: 'views/legislator.html',
          //   controller: 'LegislatorController as legislator',
          //   resolve: {
          //     legislator: function($stateParams, LegislatorsService){
          //       return LegislatorsService.searchLegislators($stateParams.lat, $stateParams.long)
          //     }
          //   }
          // })

        $urlRouterProvider.otherwise('/home')
    })

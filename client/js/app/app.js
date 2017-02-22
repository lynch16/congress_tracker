angular
    .module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('state', {
          url: '/state/:id',
          templateUrl: 'views/state.html',
          controller: 'StateController as state',
          resolve: {
            state: function($stateParams, StatesService){
              return StatesService.getState($stateParams.id);
            }
          }
        })

        $urlRouterProvider.otherwise('/home')
    })

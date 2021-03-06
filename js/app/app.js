angular
    .module('app', ['ngRoute'])
    .config(function($routeProvider){
      $routeProvider
        .when('/user/:name', {
          templateUrl: 'views/user.html',
          controller: 'UserController as user',
          resolve: {
            user: function($http, $route, UserService){
              return UserService.getUser($route.current.params.name);
            }
          }
        })
    });

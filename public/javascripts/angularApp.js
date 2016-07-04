/* Main Angular Web App File*/

var app = angular.module('angularApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  // home display page
  .when('/', {
    templateUrl: 'index.html',
    controller: 'mainController'
  })

  .when('/login', {
    templateUrl: 'login.html',
    controller: 'authenticationController'
  });
}

app.controller('mainController',function() {

});


app.controller('authenticationController', function ($scope, $location) {
    $scope.submit = function() {
      $location.path('/');
    }
}]

);

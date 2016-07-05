/* Main Angular Web App File*/

var app = angular.module("angularApp", ['ngRoute']);


app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider

    // home display page
    .when('/', {
      templateUrl: 'main.html',
      controller: 'mainController'
    })
    // login display page
    .when('/login', {
      templateUrl: 'login.html',
      controller: 'authenticationController'
    });

    // check browser support
    if (window.history && window.history.pushState) {

      // documentation - docs.angularjs.org/error/$location/nobase
      // no base url
      $locationProvider.html5Mode({
        enabled:true,
        requireBase:false
      });

    }
}]);

app.controller('mainController',function() {

});


app.controller('authenticationController', ['$scope', '$location', function ($scope, $location) {

    $scope.registerMessage = "Register now!";

    $scope.submit = function() {
      $scope.registerMessage = "Thank you for registering!";
      $location.path('/');
    }

}]);

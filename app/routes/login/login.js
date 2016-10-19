'use strict';

angular.module('myApp')

.controller('LoginCtrl', ['$scope', '$state', 'AuthService', function($scope, $state, AuthService) {
  $scope.login = function() {
    var loggedIn = AuthService.login($scope.username, $scope.password);
    if (loggedIn) {
      $state.go('home');
    } else {
      $scope.error = 'Wrong username or password';
    }
  };
}]);

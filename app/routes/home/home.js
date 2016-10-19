'use strict';

angular.module('myApp')

.controller('HomeCtrl', ['$scope', '$state', 'AuthService', function($scope, $state, AuthService) {

  $scope.logout = function() {
    AuthService.logout();
    $state.go('login');
  };

}]);

'use strict';

angular.module('myApp')

.factory('AuthService', function() {
  var loggedIn = false;

  var login = function(username, password) {
    loggedIn = username === 'user' && password === '123';
    return loggedIn;
  };

  var logout = function() {
    loggedIn = false;
    return loggedIn;
  };

  var isLoggedIn = function() {
    return loggedIn;
  };

  return {
    login: login,
    logout: logout,
    isLoggedIn: isLoggedIn
  };
});

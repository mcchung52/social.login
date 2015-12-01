'use strict';

angular.module('socialLogin')
.controller('navCtrl', function($scope, $auth, $state) {
  
  $scope.isAuthenticated = function(){
    return $auth.isAuthenticated();
  };

  $scope.logout = function() {
    $auth.logout();
    $state.go('login');
  };

});

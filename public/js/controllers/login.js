'use strict';

angular.module('socialLogin')
.controller('loginCtrl', ['$rootScope','$scope','$auth','$state', function($rootScope,$scope, $auth, $state) {
  //$scope.toggleRegister();
  $rootScope.showRegister = !$rootScope.showRegister;

  $scope.authenticate = function(provider) {
    $auth.authenticate(provider)
    .then(function(res) {
      console.log('res',res);
      $state.go('home');
    })
    .catch(function(err){
      console.error(err);
    });
  };

}]);

'use strict';

angular.module('socialLogin')
.controller('loginCtrl', ['$scope','$auth','$state', function($scope, $auth, $state) {

  $scope.authenticate = function(provider) {
    $auth.authenticate(provider)
    .then(function(res) {
      console.log(res);
      $state.go('home');
    })
    .catch(function(err){
      console.error(err);
    });
  };

}]);

'use strict';

angular.module('socialLogin')
.controller('homeCtrl', ['$scope','$auth','$state','$http', function($scope, $auth, $state, $http) {//, svc) {
  if(!$auth.isAuthenticated()){
    return $state.go('login');
  }

  $http.get('/users/me')
  .then(function(res) {
    $scope.user = res.data;
    console.log('res:', res);
  }, function(err) {
    console.error(err);
  });

}]);

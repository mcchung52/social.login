'use strict';

angular.module('socialLogin')
.controller('profileCtrl', ['$scope','$auth','$state','$http', function($scope, $auth, $state, $http) {
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

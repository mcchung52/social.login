'use strict';

angular.module('socialLogin')
.controller('navCtrl', ['$scope','$auth','$state', function($scope, $auth, $state) {
  //$rootscope.showRegister = true;
  // $scope.toggleRegister = function() {
  //   $scope.showRegister = !$scope.showRegister;
  // };
  $scope.isAuthenticated = function(){
    console.log('$scope',$scope);
    console.log('$auth',$auth);
    return $auth.isAuthenticated();
  };

  $scope.logout = function() {
    $auth.logout();
    $state.go('login');
  };

}]);

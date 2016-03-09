'use strict';

angular.module('socialLogin')
.controller('registerCtrl', ['$rootScope',function($rootScope) {
  //$scope.toggleRegister();
  $rootScope.showRegister = !$rootScope.showRegister;
}]);
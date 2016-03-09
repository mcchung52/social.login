'use strict';

let app = angular.module('socialLogin', ['satellizer', 'ui.router']);
app.run(function($rootScope) {
    $rootScope.showRegister = false; //login on init will toggle this
});
app.config(function($stateProvider, $urlRouterProvider, $authProvider) {
  $urlRouterProvider.otherwise('/login');
  $stateProvider
    .state('login', { url: '/login', 
                      templateUrl: 'partials/login.html', 
                      controller: 'loginCtrl'})    
    .state('home', { url: '/home', 
                     templateUrl: 'partials/home.html', 
                     controller: 'homeCtrl'})
    .state('profile', { url: '/profile', 
                        templateUrl: 'partials/profile.html', 
                        controller: 'profileCtrl'})
    .state('register', { url: '/register', 
                        templateUrl: 'partials/register.html', 
                        controller: 'registerCtrl'})

    $authProvider.github({
      clientId: '1ce6d56f447ab635cfde'
    });
    $authProvider.google({
      clientId: '666092791035-53g1b2n8s2bhn1sojaf5n49ofu32b8u7.apps.googleusercontent.com'
    });
    $authProvider.facebook({
      clientId: '760544650716548'//'1493282791002039'
    });

    $authProvider.twitter();

    // $authProvider.live({
    //   clientId: '000000004C173030',
    //   authorizationEndpoint: 'https://login.live.com/oauth20_desktop.srf',
    //   redirectUri: 'http://mylocalwebsite.net:3000'

    // });
});

// app.service('svc', function($scope, $http){
//   console.log('inside svc');
// });
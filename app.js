var myApp = angular.module('mobileApp', ['ui.router', 'ngMaterial']);
myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'Template/login.html',
      controller: 'logincontroller'
    })
    .state('home', {
      url: '/home',
      templateUrl: 'Template/homepage.html',
      controller: 'homecontroller'
    })
    .state('home.dashboard', {
      url: '/dashboard',
      templateUrl: 'Template/dashBoard.html',
        controller: 'dashboardcontroller'
    });

  $urlRouterProvider.otherwise('/login');
}]);

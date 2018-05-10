var myApp = angular.module('mobileApp', ['ui.router', 'ngMaterial', 'jkAngularRatingStars']);
myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'Template/login.html',
      controller: 'loginController'
    })
    .state('home', {
      url: '/home',
      templateUrl: 'Template/homepage.html',
      controller: 'homeController'
    })
    .state('home.dashboard', {
      url: '/dashboard',
      templateUrl: 'Template/dashBoard.html',
      controller: 'dashboardController'
    })
    .state('home.cart', {
      url: '/cart',
      templateUrl: 'Template/cartDisplay.html',
      controller: 'cartController'
    });



  $urlRouterProvider.otherwise('/login');
}]);

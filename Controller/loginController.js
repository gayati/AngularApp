myApp.controller('logincontroller', function($scope,$state) {
  $scope.email = "gayatrikawade80@gmail.com";
  $scope.password = "12345678";

  $scope.goTohome = function() {
    $state.go('home.dashboard');
  }

});

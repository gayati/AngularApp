myApp.controller('cartController', function($rootScope, $scope, $window) {

  $scope.products = JSON.parse($window.localStorage.getItem('cart'));
  console.log($scope.products);

  $scope.listOfOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  $scope.selectedItem = $scope.listOfOptions[0];

  $scope.selectChanged = function(mobile, quantity) {
    mobile.sum = mobile.price * quantity;
    $scope.total1 = 0;
    $scope.products.forEach(function(mobile) {
    $scope.total1 = $scope.total1 + mobile.sum
    });
  }
  $scope.removeItemCart = function(mobile) {
    var index = $scope.products.indexOf(mobile);
    if (index > -1) {
      $scope.products.splice(index, 1);
      $scope.total1 = $scope.total1 - mobile.sum;
    $window.localStorage.setItem('cart', JSON.stringify($scope.products));
    $rootScope.cartArray1=JSON.parse($window.localStorage.getItem('cart'));
    }
  }
});

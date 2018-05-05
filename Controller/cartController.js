myApp.controller('cartController', function($rootScope, $scope) {

  $scope.products = $rootScope.cartArray;
  console.log($scope.products);

  $scope.listOfOptions = [1, 2, 3];

  $scope.selectChanged = function(mobile,quantity) {
    var Total = mobile.price * quantity;
    // console.log(Total);
  mobile.sum = Total;
   console.log(mobile.sum);
  }

});

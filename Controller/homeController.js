myApp.controller('homecontroller', function($scope, $mdSidenav, JsonService, $filter) {


  $scope.toggleLeft = buildToggler('left');
  $scope.toggleRight = buildToggler('right');

  function buildToggler(componentId) {
    return function() {
      $mdSidenav(componentId).toggle();
    };
  }


    JsonService.getData().then(function(response){
      //console.log(response);
      var data1 = response.data;
       $scope.mydata = data1;
    });

 function storearray(array,key) {
  var Array = [];
 }

});

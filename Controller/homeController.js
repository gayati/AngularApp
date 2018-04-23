myApp.controller('homecontroller', function($scope, $mdSidenav, JsonService, $filter) {


  $scope.toggleLeft = buildToggler('left');

  function buildToggler(componentId) {
    return function() {
      $mdSidenav(componentId).toggle();
    };
  }


  JsonService.getData().then(function(response) {
    //console.log(response);
    var data1 = response.data;
    $scope.mydata = data1;
  })


  var manufacturerArray = [];
  $scope.storearray = function(jsondata, key) {
    var index = manufacturerArray.indexOf(jsondata);
    if (index > -1) {
      manufacturerArray.splice(index, 1);
    } else {
      manufacturerArray.push(jsondata);
    }
  }
  $scope.manufacturerlist = manufacturerArray;

  var storageArray = [];
  $scope.storeStoragearray = function(jsondata, key) {
    var index = storageArray.indexOf(jsondata);
    if (index > -1) {
      storageArray.splice(index, 1);
    } else {
      storageArray.push(jsondata);
    }
  }
  $scope.storagelist = storageArray;

  var cameraArray = [];
    $scope.storeCameraarray = function (jsondata, key) {
    var index = cameraArray.indexOf(jsondata);
    if (index > -1) {
      cameraArray.splice(index, 1);
    } else {
      cameraArray.push(jsondata);
    }
  }
  $scope.cameralist = cameraArray;

  var operatingsystemArray = [];
    $scope.storeOperatingsystemarray = function (jsondata, key) {
    var index = operatingsystemArray.indexOf(jsondata);
    if (index > -1) {
      operatingsystemArray.splice(index, 1);
    } else {
      operatingsystemArray.push(jsondata);
    }
  }
  $scope.oslist = operatingsystemArray;

});

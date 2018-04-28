/******************************************************************************
 *  Purpose         :homecontroller to handle homepage.html
 *  @description
 *  @file           : homeController.js
 *  @overview       :
 *  @author         : Gayatri Kawade
 *  @version        : 1.0
 *  @since          : 16-04-2018
 ******************************************************************************/

myApp.controller('homeController', function($scope, $mdSidenav, JsonService, $filter, $state) {
  var manufacturerArray = [];
  var storeageArray = [];
  var cameraArray = [];
  var operatingsystemArray = [];

  /*
   * @description DialogController for handling dialog controls.
   * @param {service} $scope is a service
   */
  $scope.toggleLeft = buildToggler('left');

  function buildToggler(componentId) {
    return function() {
      $mdSidenav(componentId).toggle();
    };
  }

  $scope.goToLoginPage = function() {
    $state.go('login');
  }

  JsonService.getData().then(function(response) {
    var data1 = response.data;
    $scope.mydata = data1;
  })

  /*
   * @description pushSplicemethod for .
   * @param {service} $scope is a service
   *
   */

  pushSpliceMethod = function(array, itemSelected) {
    var index = array.indexOf(itemSelected);
    if (index > -1) {
      array.splice(index, 1);
    } else {
      array.push(itemSelected);
    }
  }

  $scope.storeArray = function(key, itemSelected) {
    switch (key) {
      case 'manufacturer':
        pushSpliceMethod(manufacturerArray, itemSelected);
        break;
      case 'storage':
        pushSpliceMethod(storeageArray, itemSelected);
        break;
      case 'camera':
        pushSpliceMethod(cameraArray, itemSelected);
        break;
      case 'os':
        pushSpliceMethod(operatingsystemArray, itemSelected);
        break;
    }
    $scope.manufacturerList = manufacturerArray;
    $scope.storageList = storeageArray;
    $scope.cameraList = cameraArray;
    $scope.osList = operatingsystemArray;
  }
});

myApp.filter('selectFilter', function() {
  return function(jsonData, manufacturerList, storageList, cameraList, osList) {
    var tempArray = [];
    var selectArray = [];

    var checkFunction = function(list, jsonData, key) {
      loopingFunction(list, jsonData, key);
      tempArray = selectArray;
      selectArray = [];
    }

    var loopingFunction = function(list, jsonData, key) {
      for (var i = 0; i < jsonData.length; i++) {
        var item = jsonData[i];
        for (var j = 0; j < list.length; j++) {
          var selectItem = list[j];
          if (item.specs[key] == selectItem) {
            selectArray.push(item);
          }
        }
      }
    }

    if (jsonData != undefined) {
      if (manufacturerList != undefined || storageList != undefined || cameraList != undefined || osList != undefined) {
        if (manufacturerList.length > 0) {
          checkFunction(manufacturerList, jsonData, "manufacturer");
        } else {
          tempArray = jsonData;
        }
        if (storageList.length > 0) {
          checkFunction(storageList, tempArray, "storage");
        }
        if (cameraList.length > 0) {
          checkFunction(cameraList, tempArray, "camera");
        }
        if (osList.length > 0) {
          checkFunction(osList, tempArray, "os");
        }
      } else {
        tempArray = jsonData;
      }
    }
    return tempArray;
  };
});

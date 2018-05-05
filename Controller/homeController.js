/******************************************************************************
 *  Purpose         :homecontroller to handle homepage.html
 *  @description
 *  @file           : homeController.js
 *  @overview       :
 *  @author         : Gayatri Kawade
 *  @version        : 1.0
 *  @since          : 16-04-2018
 ******************************************************************************/

myApp.controller('homeController', function($scope, $mdSidenav, JsonService, $filter, $state, $rootScope) {
  var manufacturerArray = [];
  var storeageArray = [];
  var cameraArray = [];
  var operatingsystemArray = [];

  /*
   * @description DialogController for handling dialog controls.
   * @function buildToggler to toggle the sidebar to left
   * @param {service} $mdSidenav is a service
   */
  $scope.toggleLeft = buildToggler('left');

  function buildToggler(componentId) {
    return function() {
      $mdSidenav(componentId).toggle();
    };
  }

  /*
   * @method goToLoginPage() - this method is for redirecting to login page.
   */
  $scope.goToLoginPage = function() {
    $state.go('login');
  }

  JsonService.getData().then(function(response) {
    var data = response.data;
    $scope.mydata = data;
  })

  /*
   * @description pushSplicemethod is for adding or removing items from the array.
   * @var {int} index - gives the index value of itemSelected.
   */
  pushSpliceMethod = function(array, itemSelected) {
    var index = array.indexOf(itemSelected);
    if (index > -1) {
      array.splice(index, 1);
    } else {
      array.push(itemSelected);
    }
  }



  /*
   * @description storeArray method to store the item selected in an array.
   * @param {string} key is the category of item.
   * @param {string} itemSelected is the item selected on clicking on the checkbox.
   * @param {array} manufacturerArray is to store the list of manufacturer of selected mobile.
   * @param {string} storeageArray is to store the list of storage of selected mobile.
   * @param {string} cameraArray is to store the list of camera of selected mobile.
   * @param {string} operatingsystemArray is to store the list of OS of selected mobile.
   */
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

/*
 * @description selectFilter to filter the items selected.
 * @param {array} selectArray is to store the selected items.
 * @param {array} tempArray is to store the whole list of different kinds of selectes items.
 */
myApp.filter('selectFilter', function() {
  return function(jsonData, manufacturerList, storageList, cameraList, osList) {
    var tempArray = [];
    var selectArray = [];
    var checkFunction = function(list, jsonData, key) {
      loopingFunction(list, jsonData, key);
      tempArray = selectArray;
      selectArray = [];
    }

    /*
     * @method loopingFunction -this method is to store the filtered items.
     * @param
     */
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

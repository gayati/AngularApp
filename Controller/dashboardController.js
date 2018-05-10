 /******************************************************************************
  *  Purpose         : Dashboard controller for controlling dashboard.html.
  *  @description
  *  @file           : dashboardController.js
  *  @overview       : to handle events on dashboard.html.
  *  @author         : Gayatri Kawade
  *  @version        : 1.0
  *  @since          : 16-04-2018
  ******************************************************************************/
 myApp.controller('dashboardController', function($scope, $rootScope, $mdDialog, $window,
   JsonService) {
   $scope.showDialogue = function(clickEvent, item) {
     $mdDialog.show({
       controller: dialogueController,
       templateUrl: 'Template/imageDialogue.html',
       parent: angular.element(document.body),
       targetEvent: clickEvent,
       clickOutsideToClose: true,
       fullscreen: $scope.customFullscreen,
       locals: {
         mobileData: item
       }
     });
   };


   /*
    * @description DialogController for handling dialog controls.
    * @param {service} $scope is a service
    * @param {service} $mdDialog is a service
    * @param {object} mobileData clicked object data
    */
   function dialogueController($scope, mobileData) {
     $scope.mobileData = mobileData;
   }



   var jsonArray = JSON.parse($window.localStorage.getItem('cart'));
   if (jsonArray != undefined) {
     $scope.cartArray = jsonArray;
   } else {
     $scope.cartArray = [];
   }

   console.log($scope.cartArray);
   $scope.addTocart = function(jsonData) {
     if (jsonData != undefined) {
       if ($scope.cartArray.length === 0) {
         jsonData.count = 1;
         $scope.cartArray.push(jsonData);
         $window.localStorage.setItem('cart', JSON.stringify($scope.cartArray));
         $rootScope.cartArray1 = JSON.parse($window.localStorage.getItem('cart'));
       } else {
         var repeat = false;
         for (var i = 0; i < $scope.cartArray.length; i++) {
           if ($scope.cartArray[i].id === jsonData.id) {
             repeat = true;
             $scope.cartArray[i].count += 1;
             $window.localStorage.setItem('cart', JSON.stringify($scope.cartArray));
             $rootScope.cartArray1 = JSON.parse($window.localStorage.getItem('cart'));
           }
         }
         if (!repeat) {
           jsonData.count = 1;
           $scope.cartArray.push(jsonData);
           $window.localStorage.setItem('cart', JSON.stringify($scope.cartArray));
           console.log(JSON.parse($window.localStorage.getItem('cart')));
           $rootScope.cartArray1 = JSON.parse($window.localStorage.getItem('cart'));
         }
       }
     }
   }
 });

 /******************************************************************************
  *  Purpose         : Dashboard controller for controlling dashboard.html.
  *  @description
  *  @file           : dashboardController.js
  *  @overview       : to handle events on dashboard.html.
  *  @author         : Gayatri Kawade
  *  @version        : 1.0
  *  @since          : 16-04-2018
  ******************************************************************************/
 myApp.controller('dashboardController', function($scope, $rootScope, $mdDialog) {
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

   //   var cart=[];
   //   $rootScope.count = 0;
   // $scope.addTocart = function(jsonData) {
   //   if(jsonData !=undefined){
   //     cart.push(jsonData);
   //     if(cart.length == 0){
   //
   //     }
   //   }
   //
   // }


   $rootScope.cartArray = [];
   //$rootScope.count = 0;
   $scope.addTocart = function(jsonData) {
     //console.log(jsonData);
     if (jsonData != undefined) {
       if ($rootScope.cartArray.length === 0) {
         jsonData.count = 1;
         // $rootScope.count =jsonData.count;
         // $rootScope.count = 1;
         $rootScope.cartArray.push(jsonData);
         // console.log( jsonData.count );
         // console.log($scope.cartArray);
            //    console.log($rootScope.cartArray);
       } else {
         var repeat = false;
         for (var i = 0; i < $rootScope.cartArray.length; i++) {
           if ($rootScope.cartArray[i].id === jsonData.id) {
             //       console.log("cid" + $rootScope.cartArray[i].id);
             //       console.log("id" + jsonData.id);
             repeat = true;
             $rootScope.cartArray[i].count += 1;
             // $rootScope.count =  $scope.cartArray[i].count ;
             //console.log($scope.cartArray[i].count );
             //       console.log($rootScope.cartArray.length);
             // console.log($scope.cartArray);
           }
         }
         if (!repeat) {
           jsonData.count = 1;
           //  $rootScope.count =jsonData.count;
           $rootScope.cartArray.push(jsonData);
           //console.log(jsonData.count);
           //     console.log($rootScope.cartArray.length);
           // console.log($scope.cartArray);

         }
       }
     }
   }



 });

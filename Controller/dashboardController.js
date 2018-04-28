 /******************************************************************************
  *  Purpose         : Dashboard controller for controlling dashboard.html.
  *  @description
  *  @file           : dashboardController.js
  *  @overview       : to handle events on dashboard.html.
  *  @author         : Gayatri Kawade
  *  @version        : 1.0
  *  @since          : 16-04-2018
  ******************************************************************************/
 myApp.controller('dashboardController', function($scope, $mdDialog) {
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
 });

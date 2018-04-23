myApp.controller('dashboardcontroller', function($scope,$mdDialog) {
$scope.showDialogue = function(ev,item) {
    $mdDialog.show({
      controller: dialoguecontroller,
      templateUrl: 'Template/imageDialogue.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen, // Only for -xs, -sm breakpoints.
      locals : {mydata1 : item}
    //  $scope.mydata1 = mydata;
  });
  };

     function dialoguecontroller($scope,mydata1) {
       $scope.mydata2 = mydata1;
     }

    // .then(function(answer) {
    //   $scope.status = 'You said the information was "' + answer + '".';
    // }, function() {
    //   $scope.status = 'You cancelled the dialog.';
    //});




});

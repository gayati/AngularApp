/******************************************************************************
 *  Purpose         :Login controller to handle login.html
 *  @description
 *  @file           : loginController.js
 *  @overview       :
 *  @author         : Gayatri Kawade
 *  @version        : 1.0
 *  @since          : 16-04-2018
 ******************************************************************************/
myApp.controller('loginController', function($scope, $state) {

  // $scope.email = ""
  // $scope.password = "";
  // $scope.demo =function() {
  //
  // }

  $scope.goTohome = function() {
    var mailId = document.getElementById("email").value;
    var passWord = document.getElementById("password").value;
    console.log(mailId);
    console.log(passWord);
    $state.go('home.dashboard');
  }


});

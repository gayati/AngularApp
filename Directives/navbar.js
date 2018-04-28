/******************************************************************************
 *  Purpose         : Navbar custom directive
 *  @description    : This is custome directive for redirecting to toolBar.html 
 *  @file           : navbar.js
 *  @overview       :
 *  @author         : Gayatri Kawade
 *  @version        : 1.0
 *  @since          : 16-04-2018
 ******************************************************************************/
myApp.directive('navbar', function() {
      return {
        templateUrl: 'Template/toolBar.html',
      };
    });

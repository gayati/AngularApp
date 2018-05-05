/******************************************************************************
 *  Purpose         : sidebar custom directive
 *  @description    : This is custome directive for redirecting to sideBar.html 
 *  @file           : sidebar.js
 *  @overview       : custom directive for sidebar
 *  @author         : Gayatri Kawade
 *  @version        : 1.0
 *  @since          : 16-04-2018
 ******************************************************************************/
myApp.directive('sidebar', function() {
      return {
        templateUrl: 'Template/sideBar.html',
      };
    });

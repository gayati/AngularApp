/******************************************************************************
 *  Purpose         :
 *  @description
 *  @file           :readJsonfile.js
 *  @overview       :
 *  @author         : Gayatri Kawade
 *  @version        : 1.0
 *  @since          : 16-04-2018
 ******************************************************************************/
myApp.service('JsonService', function ($http) {
    this.getData = function () {
        return $http.get('data.json');
    }
});

myApp.service('JsonService', function ($http) {
    this.getData = function () {
        return $http.get('data.json');
    }
});

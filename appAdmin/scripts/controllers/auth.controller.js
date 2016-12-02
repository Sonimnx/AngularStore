var app = angular.module("sportsStoreAdmin");

var authController = function($http, $location, authUrl) {
    var vm = this;
    vm.authenticate = function (user, pass) {
        $http.post(authUrl, {
            username: user,
            password: pass
        }, {
            withCredentials: true
        }).success(function (data) {
            $location.path("/main");
        }).error(function (error) {
            vm.authenticationError = error;
        });
    }
};

app.controller("authCtrl", authController);
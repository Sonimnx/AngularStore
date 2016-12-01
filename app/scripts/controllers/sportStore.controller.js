var app = angular.module("sportsStore");

var sportsStoreCtrl = function ($http, dataUrl) {
    var vm = this;
    vm.data = {};

    $http.get(dataUrl)
        .success(function (data) {
            vm.data.products = data;
        })
        .error(function (error) {
            vm.data.error = error;
        });
};

app.controller("sportsStoreCtrl", sportsStoreCtrl);
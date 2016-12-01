var app = angular.module("sportsStore");

var sportsStoreCtrl = function ($http, $location, dataUrl, orderUrl, cart) {
    var vm = this;
    vm.data = {};

    $http.get(dataUrl)
        .success(function (data) {
            vm.data.products = data;
        })
        .error(function (error) {
            vm.data.error = error;
        });

    vm.sendOrder = function (shippingDetails) {
        console.log("Send order function");
        var order = angular.copy(shippingDetails);
        order.products = cart.getProducts();
        $http.post(orderUrl, order)
            .success(function (data) {
                vm.data.orderId = data.id;
                cart.getProducts().length = 0;
            })
            .error(function (error) {
                vm.data.orderError = error;
            }).finally(function () {
            $location.path("/complete");
        });
    }
};

app.controller("sportsStoreCtrl", sportsStoreCtrl);
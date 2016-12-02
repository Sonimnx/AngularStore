var app = angular.module("sportsStoreAdmin");

app.controller("ordersCtrl", function ($http, ordersUrl) {
    var vm = this;
    $http.get(ordersUrl, {withCredentials : true})
        .success(function (data) {
            vm.orders = data;
        })
        .error(function (error) {
            vm.error = error;
        });
    vm.selectedOrder;

    vm.selectOrder = function(order) {
        vm.selectedOrder = order;
    };

    vm.calcTotal = function(order) {
        var total = 0;
        for (var i = 0; i < order.products.length; i++) {
            total +=
                order.products[i].count * order.products[i].price;
        }
        return total;
    }
});
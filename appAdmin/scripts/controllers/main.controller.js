var app = angular.module("sportsStoreAdmin");

app.controller("mainCtrl", function () {
    var vm = this;
    vm.screens = ["Products", "Orders"];
    vm.current = vm.screens[0];
    vm.setScreen = function (index) {
        vm.current = vm.screens[index];
    };
    vm.getScreen = function () {
        return vm.current == "Products"
            ? "views/adminProducts.html" : "views/adminOrders.html";
    };

    vm.getBootstrapClass = function (item) {
        if(item===vm.current)
        {
            return "btn-primary"
        }
    }
});
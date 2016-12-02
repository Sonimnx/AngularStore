var app = angular.module("sportsStoreAdmin", ["ngRoute","ngResource"]);

app.constant("authUrl", "http://localhost:2403/users/login")
    .constant("ordersUrl", "http://localhost:2403/orders")
    .constant("productUrl", "http://localhost:2403/products/");

app.config(function ($routeProvider) {
    $routeProvider.when("/login", {
        templateUrl: "views/adminLogin.html"
    });
    $routeProvider.when("/main", {
        templateUrl: "views/adminMain.html"
    });
    $routeProvider.otherwise({
        redirectTo: "/login"
    });
})
    .config(function($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
});
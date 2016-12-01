(function () {
    var app = angular.module("sportsStore", ["ngRoute"]);
    app.constant("productListActiveClass", "btn-primary")
        .constant("productListPageCount", 3)
        .constant("dataUrl", "http://localhost:2403/products")
        .constant("orderUrl", "http://localhost:2403/orders");

    app.config(function ($routeProvider) {
        $routeProvider.when("/checkout", {
            templateUrl: "views/checkoutSummary.html"
        });
        $routeProvider.when("/products", {
            templateUrl: "views/productList.html"
        });
        $routeProvider.when("/complete", {
            templateUrl: "views/thankYou.html"
        });
        $routeProvider.when("/placeorder", {
            templateUrl: "views/placeOrder.html"
        });
        $routeProvider.otherwise({
            templateUrl: "views/productList.html"
        });
    });
}());
(function () {
    var app = angular.module("sportsStore", ["ngRoute"]);
    app.constant("productListActiveClass", "btn-primary")
        .constant("productListPageCount", 3)
        .constant("dataUrl", "http://localhost:2403/products")
        .constant("orderUrl", "http://localhost:2403/orders");

    app.config(function ($routeProvider) {
        $routeProvider.when("/checkout", {
            templateUrl: "scripts/views/checkoutSummary.html"
        });
        $routeProvider.when("/products", {
            templateUrl: "scripts/views/productList.html"
        });
        $routeProvider.when("/complete", {
            templateUrl: "scripts/views/thankYou.html"
        });
        $routeProvider.when("/placeorder", {
            templateUrl: "scripts/views/placeOrder.html"
        });
        $routeProvider.otherwise({
            templateUrl: "scripts/views/productList.html"
        });
    });
}());
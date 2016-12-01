(function () {
    var app = angular.module("sportsStore", []);
    app.constant("productListActiveClass", "btn-primary")
        .constant("productListPageCount", 3)
        .constant("dataUrl", "http://localhost:2403/products");
}());
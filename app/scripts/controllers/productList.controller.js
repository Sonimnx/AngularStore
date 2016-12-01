var app = angular.module("sportsStore");

var productList = function ($filter, productListActiveClass, productListPageCount) {
    var vm = this;
    var selectedCategory = null;
    vm.selectedPage = 1;
    vm.pageSize = productListPageCount;

    vm.selectCategory = function (newCategory) {
        selectedCategory = newCategory;
        vm.selectedPage = 1;
    };

    vm.categoryFilterFn = function (product) {
        return selectedCategory == null ||
            product.category == selectedCategory;
    };

    vm.getCategoryClass = function (category) {
        return selectedCategory == category ? productListActiveClass : "";
    };

    vm.selectPage = function (newPage) {
        vm.selectedPage = newPage;
    };

    vm.getPageClass = function (page) {
        return vm.selectedPage == page ? productListActiveClass : "";
    }

};

app.controller("productListCtrl", productList);
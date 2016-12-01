var app = angular.module("sportsStore");

var pageCount = function () {
    return function (data, size) {
        console.log("pageCount was fired");
        if (angular.isArray(data)) {
            var result = [];
            for (var i = 0; i < Math.ceil(data.length / size); i++) {
                result.push(i);
            }
            return result;
        } else {
            return data;
        }
    }
};

app.filter("pageCount", pageCount);

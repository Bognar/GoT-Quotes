var app = angular.module('quote', [])
app.controller('Hello', function ($scope, $http) {
    $http.get('https://got-quotes.herokuapp.com/quotes').
        then(function (response) {
            $scope.quotes = response.data;
        });
});
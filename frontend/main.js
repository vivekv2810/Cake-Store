const app = angular.module('cakeStoreApp', []);

app.controller('HomeController', ['$scope', function($scope) {
    $scope.message = 'Discover delicious cakes from around the world!';
}]);

angular.module('cakeStoreApp', ['ngRoute']).config(function($routeProvider) {
    $routeProvider
        .when('/products', {
            template: '<product-list></product-list>'
        })
        .when('/cart', {
            template: '<cart></cart>'
        })
        .when('/shipping', {
            template: '<shipping-form></shipping-form>'
        })
        .otherwise({
            redirectTo: '/products'
        });
});
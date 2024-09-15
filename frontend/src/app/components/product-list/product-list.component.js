angular.module('cakeStoreApp').component('productList', {
    templateUrl: 'app/components/product-list/product-list.component.html',
    controller: ['$http', 'CartService', function($http, CartService) {
        var ctrl = this;
        ctrl.products = [];

        $http.get('/api/products').then(function(response) {
            ctrl.products = response.data;
        });

        ctrl.addToCart = function(productId) {
            CartService.addToCart(productId).then(function(response) {
                alert('Product added to cart');
            });
        };
    }]
});
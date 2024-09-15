angular.module('cakeStoreApp').factory('CartService', ['$http', function($http) {
    return {
        addToCart: function(productId) {
            return $http.post('/api/cart/add', { userId: 1, productId: productId });
        },
        getCart: function(userId) {
            return $http.get(`/api/cart/${userId}`);
        }
    };
}]);
angular.module('cakeStoreApp').component('shippingForm', {
    templateUrl: 'app/components/shipping/shipping.component.html',
    controller: ['$http', function($http) {
        var ctrl = this;
        ctrl.shippingAddress = {};

        ctrl.submitShipping = function() {
            $http.post('/api/shipping/add', { userId: 1, address: ctrl.shippingAddress.address })
                .then(function(response) {
                    alert('Shipping address saved');
                });
        };
    }]
});
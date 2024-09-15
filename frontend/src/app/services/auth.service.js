angular.module('cakeStoreApp').factory('AuthService', ['$http', function($http) {
    return {
        register: function(user) {
            return $http.post('/api/auth/register', user);
        },
        login: function(user) {
            return $http.post('/api/auth/login', user);
        }
    };
}]);
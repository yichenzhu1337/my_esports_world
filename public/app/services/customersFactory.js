(function() {
    var customersFactory = function($http) {

        var factories = {};

        factories.getCustomers = function() {
            return $http.get('/api/v1/profiles');
        };

        factories.getCustomer = function(customerId) {
            return $http.get('/api/v1/profiles' + customerId);
        };

        factories.getOrders = function() {
            return $http.get('/orders');
        };

        factories.deleteCustomer = function(customerId) {
            return $http.delete('/customers/' + customerId);
        }

        return factories;
    };

    customersFactory.$inject = ['$http'];

    angular.module('MewApp').factory('customersFactory', customersFactory);

}());
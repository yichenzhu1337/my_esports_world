(function() {

    'use strict';

    angular
        .module('app.account')
        .config(config);

    function config($stateProvider) {

        var path = 'app/js/modules/account/';

        $stateProvider
            .state('auth.account', {
                url: '/account',
                templateUrl: path + 'edit/account.edit.html',
                controller: 'AccountEditController',
                controllerAs: 'vm'
            });

    }

})();

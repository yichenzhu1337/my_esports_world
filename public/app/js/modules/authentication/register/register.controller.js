(function() {

    'use strict';

    angular
        .module('app.auth')
        .controller('AuthenticationRegisterController', AuthenticationRegisterController);

    function AuthenticationRegisterController($state, AuthenticationService) {

        var vm = this;

        vm.input = {
            email: 'test1@test.com',
            password: 'password',
            auth_type: 'normal'
        };

        vm.register = function(auth_type)
        {
            var data = vm.input;
            if(auth_type != null)
            {
                data = {
                    auth_type: auth_type
                }
            }
            AuthenticationService
                .register(data)
                .then(function successCallback(response)
                {
                    console.log('---------------------------------');
                    console.log('---------- Success --------------');
                    console.log('---------------------------------');
                    console.log('Code:', response.data.code);
                    console.log('Message:', response.data.message);
                    console.log('Data:', response.data.data);
                    console.log('Status Code: ' + response.status);
                    console.log('Status Text: ' + response.statusText);
                    $state.go('auth.home');
                    toastr.success('You will now be automatically logged in and redirected to the home page.', 'Registration Success!');
                }, function errorCallback(response)
                {
                    console.log('---------------------------------');
                    console.log('---------- Error ----------------');
                    console.log('---------------------------------');
                    console.log(response);
                    console.log('Code:', response.data.code);
                    console.log('Message:', response.data.message);
                    console.log('Data:', response.data.data);
                    console.log('Status Code: ' + response.status);
                    console.log('Status Text: ' + response.statusText);

                    _(response.data.data).forEach(function(value, key) {
                        toastr.error(value, 'Registration Failed.');
                    });
                });
        };
    }

})();
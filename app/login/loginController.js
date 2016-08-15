(function () {
    'use strict';

    angular
        .module('app')
        .controller('loginController', loginController);

    loginController.$inject = ['authenticationService', '$location'];

    function loginController(authenticationService, $location) {
        var vm = this;
        vm.username = '';
        vm.password = '';
        vm.invalidLogin = false;
        vm.logIn = logIn;

        function logIn () {
            var response = authenticationService.login(vm.username, vm.password)

            if (response.success) {
                authenticationService.setCredentials(vm.username, vm.password);
                $location.path( "/home" );
            }
            else {
                vm.invalidLogin = true;
            }
         }
    }
})();
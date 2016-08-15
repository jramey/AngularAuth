(function () {
    'use strict';

    angular
        .module('app')
        .controller('navigationController', navigationController);

    navigationController.$inject = ['$rootScope', 'authenticationService', '$location'];

    function navigationController($rootScope, authenticationService, $location) {
        var vm = this;
        vm.logOut = logOut;

        function logOut () {
            authenticationService.clearCredentials();
            $location.path( "/login" );
         }
    }
})();
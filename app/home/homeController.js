(function () {
    'use strict';

    angular
        .module('app')
        .controller('homeController', homeController);

    homeController.$inject = ['$rootScope'];

    function homeController($rootScope) {
        var vm = this;
        vm.message = "Welcome Home, " + $rootScope.session.currentUser.username;
    }
})();
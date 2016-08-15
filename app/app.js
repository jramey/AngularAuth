(function () {
    'use strict';
 
    angular
        .module('app', ['ngRoute', 'ngCookies'])
        .config(config)
        .run(run)
        .constant('SESSION', 'session');
 
    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true).hashPrefix('!');
        $routeProvider
            .when('/login', {
                controller: 'loginController',
                templateUrl: '/login/login.view.html',
                controllerAs: 'vm'
            })
             .when('/home', {
                controller: 'homeController',
                templateUrl: '/home/home.view.html',
                controllerAs: 'vm'
            })
 
            .otherwise({ redirectTo: '/login' });
    }
 
    run.$inject = ['$rootScope', '$location', '$cookieStore', 'SESSION'];
    function run($rootScope, $location, $cookieStore, SESSION) {
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            $rootScope.session = $cookieStore.get(SESSION) || {};
            var user = $rootScope.session.currentUser;
            var loginPage = $location.path().includes("/login");

            if (!loginPage && !user) {
                $location.path('/login');
            }
        });
    }
})();
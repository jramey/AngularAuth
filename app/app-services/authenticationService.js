(function () {
    'use strict';

    angular
        .module('app')
        .service('authenticationService', authenticationService);

    authenticationService.$inject = ['$rootScope', '$cookieStore', 'SESSION'];

    function authenticationService($rootScope, $cookieStore, SESSION) {
        return {
            login: login,
            setCredentials: setCredentials,
            clearCredentials: clearCredentials
        };

        function login(username, password) {
            var testPassword = 'test'
        
            if (password === testPassword) 
                return{ success: true };
            else 
                return { success: false, message: 'Username or password is incorrect' };
        }

          function setCredentials(username, password) {
            $rootScope.session = {
                currentUser: {
                    username: username
                }
            };

            $cookieStore.put(SESSION, $rootScope.session);
        }

         function clearCredentials() {
            $rootScope.session = {};
            $cookieStore.remove(SESSION);
        }
    }
})();
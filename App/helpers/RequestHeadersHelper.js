angular.module('contextInfo').factory('RequestHeadersHelper', [
    '$rootScope', function ($rootScope) {
        var headers = {
            RequestVerificationToken: $rootScope.verificationTokken
        };
        return {
            headers: headers
        };
    }
]);
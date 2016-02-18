angular.module('contextInfo').factory('RequestHandlerHelper', [
    '$q', '$rootScope', '$timeout',
    function ($q, $rootScope, $timeout) {
        var handleRequest = function (promise) {
            var dfd = $q.defer(),
                loadingStarted = true;
            $timeout(function () {
                if (loadingStarted) {
                    $rootScope.isLoading = true;
                }
            }, 300);
            promise.then(function (data) {
                $timeout(function () {
                    if (!loadingStarted) {
                        $rootScope.isLoading = false;
                        $rootScope.isError = false;
                    }
                }, 300);
                loadingStarted = false;
                dfd.resolve(data);
            }, function () {
                $timeout(function () {
                    $rootScope.isLoading = false;
                    $rootScope.isError = true;
                }, 300);
                loadingStarted = false;
                dfd.reject();
            });
            return dfd.promise;
        };
        return {
            handleRequest: handleRequest
        }
    }
]);
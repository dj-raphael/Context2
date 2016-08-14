(function () {
    'use strict';
    angular
        .module('app')
        .service('requestHandlerHelper', requestHandlerHelper);

    requestHandlerHelper.$inject = [
        '$q',
        '$rootScope',
        '$timeout'
    ];

    function requestHandlerHelper($q, $rootScope, $timeout) {
        this.handleRequest = handleRequest;

        var showLoaderDelay = 300,
            hideLoaderDelay = 300,
            loadingCounter = 0;

        function handleRequest(promise, key) {

            var dfd = $q.defer();
            startLoading();

            promise.then(function (data) {
                stopLoading();

                dfd.resolve(data);
            }, function (errorInfo) {
                setError(errorInfo);
                stopLoading();

                dfd.reject(errorInfo);
            });
            return dfd.promise;

            function startLoading() {
                loadingCounter++;
                $timeout(function () {
                    if (loadingCounter !== 0) {
                        $rootScope.isLoading = true;                        
                    }
                }, showLoaderDelay);
            }

            function stopLoading() {
                loadingCounter--;
                $timeout(function () {
                    if (loadingCounter <= 0 || $rootScope.isError) {
                        loadingCounter = 0;
                        $rootScope.isLoading = false;                        
                    }
                }, hideLoaderDelay);
            }

            function setError(errorInfo) {
                if (errorInfo == null) {
                    $rootScope.isError = true;                    
                }
            }
        }
    }
})();
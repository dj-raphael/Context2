angular.module('contextInfo').factory('ErrorHandlerHelper', ['$q', function ($q) {
    var handleError = function (promise) {
        var dfd = $q.defer();
        promise.success(function (data) {
            dfd.resolve(data);
        }).error(function (errorMsg, status) {
            switch (status) {
                case 401:
                    window.location = 'account/login?ReturnUrl=' + window.location.hash;
                    break;
                default:
                    dfd.reject();
            }
        });
        return dfd.promise;
    };
    return {
        handleError: handleError
    }
}]);

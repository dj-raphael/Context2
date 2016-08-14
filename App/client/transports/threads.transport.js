(function () {
    'use strict';
    angular
        .module('app')
        .service('threadsTransport', threadsTransport);

    threadsTransport.$inject = [
        '$q',
        '$http',
        'configService'
    ];

    function threadsTransport($q, $http, configService) {
        this.getThreads = getThreads;
        this.searchThreads = searchThreads;
        this.getThread = getThread;
        this.addThread = addThread;
        this.renameThread = renameThread;

        function getThreads(params) {
            return $http.post(configService.getUrl('getThreads'), params).then(function (data) {
                return data.data;
            }, function () {
                return $q.reject(null);
            });
        }

        function searchThreads(params) {
            return $http.get(configService.getUrl('searchThreads'), { params: params }).then(function (data) {
                return data.data;
            }, function () {
                return $q.reject(null);
            });
        }

        function getThread(params) {
            return $http.get(configService.getUrl('getThread'), { params: params }).then(function (data) {
                return data.data;
            }, function () {
                return $q.reject(null);
            });
        }

        function addThread(params) {
            return $http.post(configService.getUrl('addThread'), params).then(function (data) {
                return data.data;
            }, function (data) {
                if (data.status === 401) {
                    return $q.reject(true);
                } else {
                    return $q.reject(null);
                }
            });
        }

        function renameThread(params) {
            return $http.post(configService.getUrl('renameThread'), params).then(function (data) {
                return data.data;
            }, function () {
                return $q.reject(null);
            });
        }
    }
})();

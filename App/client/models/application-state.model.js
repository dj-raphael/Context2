(function () {
    'use strict';
    angular
        .module('app')
        .factory('ApplicationStateModel', ApplicationStateModel);

    ApplicationStateModel.$inject = [];

    function ApplicationStateModel() {
        return applicationStateModel;
        function applicationStateModel() {
            this.threadFirstTimeLoaded = false;
        }
    }
})();

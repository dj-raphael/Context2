(function () {
    'use strict';
    angular
        .module('app')
        .service('settingsDialogOptions', settingsDialogOptions);

    settingsDialogOptions.$inject = [];

    function settingsDialogOptions() {
        return {
            animation: true,
            templateUrl: '/app/client/dialogs/settings/settings.html',
            controller: 'settingsDialogController',
            controllerAs: 'vm',
            size: 'md'
        };
    }
})();

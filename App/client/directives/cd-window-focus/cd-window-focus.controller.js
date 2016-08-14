(function () {
    'use strict';
    angular
        .module('app')
        .controller('cdWindowFocusDirectiveController', cdWindowFocusDirectiveController);

    cdWindowFocusDirectiveController.$inject = [
        '$window',
        'eventsService'
    ];

    function cdWindowFocusDirectiveController($window, eventsService) {
        var vm = this;
        activate();
        function activate() {
            $window.visibly.onVisible(function () {
                var windowFocusCallback = eventsService.getWindowFocusCallback();
                windowFocusCallback();
            });
        }
    }
})();
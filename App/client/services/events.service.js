(function () {
    'use strict';
    angular
        .module('app')
        .service('eventsService', eventsService);

    eventsService.$inject = [];

    function eventsService() {
        var windowFocusCallback = function () { };        
        this.setWindowFocusCallback = setWindowFocusCallback;
        this.getWindowFocusCallback = getWindowFocusCallback;

        function setWindowFocusCallback(callback) {
            windowFocusCallback = callback;
        }

        function getWindowFocusCallback() {
            return windowFocusCallback;
        }
    }
})();
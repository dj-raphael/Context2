(function () {
    'use strict';
    angular
        .module('app')
        .service('scrollService', scrollService);

    scrollService.$inject = [
        '$window',
        '$timeout',
        '$uiViewScroll'
    ];

    function scrollService($window, $timeout, $uiViewScroll) {
        this.scrollToTop = scrollToTop;

        function scrollToTop() {
            $timeout(function () {
                $uiViewScroll(angular.element($window.document.body));
            }, 0);
        }
    }
})();

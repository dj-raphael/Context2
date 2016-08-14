(function () {
    'use strict';
    angular
        .module('app')
        .filter('percentage', percentageFilter);

    percentageFilter.$inject = [
        '$filter'
    ];

    function percentageFilter($filter) {
        return percentage;
        function percentage(input, decimals) {
            return $filter('number')(input * 100, decimals) + '%';
        }
    }
})();

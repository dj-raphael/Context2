(function () {
    'use strict';
    angular
        .module('app')
        .directive('cdRating', cdRatingDirective);

    cdRatingDirective.$inject = [];

    function cdRatingDirective() {
        var directive = {
            restrict: 'E',
            templateUrl: '/app/client/directives/cd-rating/cd-rating.html',
            scope: {
                cdValue: '=',
                cdIsModerator: '='
            },
            controller: 'cdRatingDirectiveController',
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;
    }
})();

(function () {
    'use strict';
    angular
        .module('app')
        .constant('wikiModeEnum', {
            none: 0,
            url: 1,
            text: 2
        });
})();

(function () {
    'use strict';
    angular
        .module('app')
        .constant('commentsTabsEnum', {
            wiki: 0,
            discussion: 1,
            faq: 2,
            moderate: 3
        });
})();

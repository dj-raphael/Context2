(function () {
    'use strict';
    angular
        .module('app')
        .factory('TopMenuModel', TopMenuModel);

    TopMenuModel.$inject = [];

    function TopMenuModel() {
        return topMenuModel;
        function topMenuModel() {
            this.search = '';
            this.showSearch = true;
            this.threadTitle = '';
            this.threadCode = '';
            this.language = null;
            this.languages = [];
            this.showBack = false;
            this.initialized = false;
            this.extInstalled = true;
            this.showBanners = false;
            this.pageTitle = '';
        }
    }
})();
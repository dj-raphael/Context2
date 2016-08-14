(function () {
    'use strict';
    angular
        .module('app')
        .factory('ModerateModel', ModerateModel);

    ModerateModel.$inject = [];

    function ModerateModel() {
        return moderateModel;
        function moderateModel() {
            this.title = '';
        }
    }
})();

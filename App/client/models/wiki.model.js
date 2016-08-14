(function () {
    'use strict';
    angular
        .module('app')
        .factory('WikiModel', WikiModel);

    WikiModel.$inject = [
        'wikiModeEnum'
    ];

    function WikiModel(wikiModeEnum) {
        return wikiModel;
        function wikiModel() {
            this.editMode = wikiModeEnum.none;
            this.viewMode = wikiModeEnum.none;
            this.url = '';
            this.text = '';
        }
    }
})();

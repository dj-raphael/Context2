(function () {
    'use strict';
    angular
        .module('app')
        .factory('ExternalDataModel', ExternalDataModel);

    ExternalDataModel.$inject = [
        'layoutEnum'
    ];

    function ExternalDataModel(layoutEnum) {
        return externalDataModel;
        function externalDataModel() {            
            this.keywords = [];
            this.type2 = '';
            this.title = '';
            this.layout = layoutEnum.desktop;
            this.url = '';
            this.language = null;
        }
    }
})();

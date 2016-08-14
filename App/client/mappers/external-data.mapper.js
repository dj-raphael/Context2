(function () {
    'use strict';
    angular
        .module('app')
        .service('externalDataMapper', externalDataMapper);

    externalDataMapper.inject = [
        'ExternalDataModel',
        'BaseMapper'
    ];

    function externalDataMapper(ExternalDataModel, BaseMapper) {
        ExternalDataMapper.prototype = Object.create(BaseMapper.prototype);
        ExternalDataMapper.prototype.mapFrom = mapFrom;

        return new ExternalDataMapper();

        function ExternalDataMapper() {
            BaseMapper.call(this);
        }

        function mapFrom(data) {
            var result = new ExternalDataModel();

            result.keywords = data.keywords;
            result.type2 = data.type2;
            result.title = data.title;
            result.layout = data.layout;
            result.url = data.url;
            result.language = data.language;
            return result;
        }
    }
})();

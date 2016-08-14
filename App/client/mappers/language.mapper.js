(function () {
    'use strict';
    angular
        .module('app')
        .service('languageMapper', languageMapper);

    languageMapper.inject = [
        'LanguageModel',
        'BaseMapper'
    ];

    function languageMapper(LanguageModel, BaseMapper) {
        LanguageMapper.prototype = Object.create(BaseMapper.prototype);
        LanguageMapper.prototype.mapFrom = mapFrom;

        return new LanguageMapper();

        function LanguageMapper() {
            BaseMapper.call(this);
        }

        function mapFrom(data) {
            var result = new LanguageModel();

            result.code = data.UniCode;
            result.label = data.NativeTitle;
            return result;
        }
    }
})();

(function () {
    'use strict';
    angular
        .module('app')
        .service('wikiMapper', wikiMapper);

    wikiMapper.inject = [
        'WikiModel',
        'BaseMapper',
        'wikiModeEnum'
    ];

    function wikiMapper(WikiModel, BaseMapper, wikiModeEnum) {
        WikiMapper.prototype = Object.create(BaseMapper.prototype);
        WikiMapper.prototype.mapFrom = mapFrom;

        return new WikiMapper();

        function WikiMapper() {
            BaseMapper.call(this);
        }

        function mapFrom(data) {
            var result = new WikiModel(),
                isEmpty = data === '';
            result.editMode = wikiModeEnum.none;
            if (isEmpty) {
                result.viewMode = wikiModeEnum.none;
            } else {
                var isUrl = !isEmpty && (data.lastIndexOf('http://', 0) === 0 || data.lastIndexOf('https://', 0) === 0);
                result.viewMode = isUrl ? wikiModeEnum.url : wikiModeEnum.text;
                result.url = isUrl ? data : '';
                result.text = isUrl ? '' : data;
            }

            return result;
        }
    }
})();

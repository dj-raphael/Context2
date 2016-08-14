(function () {
    'use strict';
    angular
        .module('app')
        .service('faqFilterMapper', faqFilterMapper);

    faqFilterMapper.inject = [
        'BaseMapper'
    ];

    function faqFilterMapper(BaseMapper) {
        FaqFilterMapper.prototype = Object.create(BaseMapper.prototype);
        FaqFilterMapper.prototype.mapTo = mapTo;

        return new FaqFilterMapper();

        function FaqFilterMapper() {
            BaseMapper.call(this);
        }

        function mapTo(data) {
            return {
                language: data.languageCode,
                threadId: data.threadId
            }
        }
    }
})();

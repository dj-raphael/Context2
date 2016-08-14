(function () {
    'use strict';
    angular
        .module('app')
        .service('commentsFilterMapper', commentsFilterMapper);

    commentsFilterMapper.inject = [
        'BaseMapper'
    ];

    function commentsFilterMapper(BaseMapper) {
        CommentsFilterMapper.prototype = Object.create(BaseMapper.prototype);
        CommentsFilterMapper.prototype.mapTo = mapTo;

        return new CommentsFilterMapper();

        function CommentsFilterMapper() {
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

(function () {
    'use strict';
    angular
        .module('app')
        .service('threadInfoMapper', threadInfoMapper);

    threadInfoMapper.inject = [
        'ThreadInfoModel',
        'BaseMapper'
    ];

    function threadInfoMapper(ThreadInfoModel, BaseMapper) {
        ThreadInfoMapper.prototype = Object.create(BaseMapper.prototype);
        ThreadInfoMapper.prototype.mapFrom = mapFrom;

        return new ThreadInfoMapper();

        function ThreadInfoMapper() {
            BaseMapper.call(this);
        }

        function mapFrom(data) {
            var result = new ThreadInfoModel();

            result.id = data.ThreadId;
            result.title = data.Title;
            result.code = data.Code;
            result.rating = data.Raiting?  Math.round(data.Raiting) : 0;
            result.weight = data.Weight;
            result.isDiscussedHere = data.IsDiscussedHere;
            result.commentsQty = data.CommentsQty;
            result.isModerator = data.IsModerator;
            result.newCommentsQty = data.NewCommentsQty;
            return result;
        }
    }
})();

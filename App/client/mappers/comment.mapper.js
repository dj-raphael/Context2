(function () {
    'use strict';
    angular
        .module('app')
        .service('commentMapper', commentMapper);

    commentMapper.inject = [
        'CommentModel',
        'BaseMapper'
    ];

    function commentMapper(CommentModel, BaseMapper) {
        CommentMapper.prototype = Object.create(BaseMapper.prototype);
        CommentMapper.prototype.mapFrom = mapFrom;
        CommentMapper.prototype.mapTreeFrom = mapTreeFrom;

        return new CommentMapper();

        function CommentMapper() {
            BaseMapper.call(this);
        }

        function mapFrom(data) {
            var result = new CommentModel();

            result.id = data.CommentId;
            result.created = BaseMapper.parseDate(data.Created);
            result.hasChildren = data.HasChildren;
            result.message = data.Message;
            result.parentId = data.ParentId;
            result.userName = data.UserName;
            result.voteDown = data.VoteDown;
            result.voteUp = data.VoteUp;
            result.voteSum = data.VoteUp - data.VoteDown;
            result.children = [];
            result.showChildren = data.HasChildren && data.Children != null && data.Children.length !== 0;
            result.childrenCount = data.ChildrenCount;
            result.moderatorMessage = data.ModeratorMessage;
            result.isDeleted = data.IsDeleted;
            result.moderatedBy = data.ModeratedBy;
            result.moderatedDate = BaseMapper.parseDate(data.ModeratedDate);
            result.originalMessage = data.OriginalMessage == null ? data.Message : data.OriginalMessage;
            result.moderatedByName = data.ModeratedByName;
            return result;
        }

        function mapTreeFrom(data) {
            return mapTreeFromRecursive(data, null);
        }

        function mapTreeFromRecursive(items) {
            var results = [];
            items.forEach(function (item) {
                var result = mapFrom(item);
                if (result.hasChildren) {
                    result.children = mapTreeFromRecursive(item.Children);
                }
                results.push(result);
            });
            return results;
        }
    }
})();

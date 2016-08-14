(function () {
    'use strict';
    angular
        .module('app')
        .service('commentsListMapper', commentsListMapper);

    commentsListMapper.inject = [
        'CommentsListModel',
        'BaseMapper',
        'commentMapper',
        'commentsFilterMapper'
    ];

    function commentsListMapper(CommentsListModel, BaseMapper, commentMapper, commentsFilterMapper) {
        CommentsListMapper.prototype = Object.create(BaseMapper.prototype);
        CommentsListMapper.prototype.mapFrom = mapFrom;
        CommentsListMapper.prototype.mapTo = mapTo;
        CommentsListMapper.prototype.mapExistingFrom = mapExistingFrom;

        return new CommentsListMapper();

        function CommentsListMapper() {
            BaseMapper.call(this);
        }

        function mapFrom(data) {
            return mapExistingFrom(new CommentsListModel(), data);
        }

        function mapExistingFrom(model, data) {
            model.paginationModel.totalItems = data.commentsCount;
            model.paginationModel.current++;
            model.list = commentMapper.mapTreeFrom(data.comments);
            model.paginationModel.pagesCount = Math.ceil(data.commentsCount / model.paginationModel.itemsPerPage);
            return model;
        }

        function mapTo(data) {
            data.paginationModel.current--;
            var result = commentsFilterMapper.mapTo(data.filter);
            result.page = data.paginationModel.current;
            result.count = data.paginationModel.itemsPerPage;

            return result;
        }
    }
})();

(function () {
    'use strict';
    angular
        .module('app')
        .factory('CommentsListModel', CommentsListModel);

    CommentsListModel.$inject = [
        'CommentsFilterModel',
        'PaginationCollectionModel',
        'configService'
    ];

    function CommentsListModel(CommentsFilterModel, PaginationCollectionModel, configService) {
        commentsListModel.prototype = Object.create(PaginationCollectionModel.prototype);
        
        return commentsListModel;
        function commentsListModel() {
            PaginationCollectionModel.call(this);
            this.paginationModel.itemsPerPage = configService.getConfiguration().commentsItemsPerPage;
            this.list = [];
            this.filter = new CommentsFilterModel();
        }
    }
})();

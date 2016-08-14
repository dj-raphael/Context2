(function () {
    'use strict';
    angular
        .module('app')
        .factory('PaginationCollectionModel', PaginationCollectionModel);

    PaginationCollectionModel.$inject = [
        'PaginationModel'
    ];

    function PaginationCollectionModel(PaginationModel) {
        return paginationCollectionModel;
        function paginationCollectionModel() {
            this.paginationModel = new PaginationModel();
            this.list = [];
            this.filter = {};
        }
    }
})();

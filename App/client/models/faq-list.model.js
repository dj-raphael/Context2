(function () {
    'use strict';
    angular
        .module('app')
        .factory('FaqListModel', FaqListModel);

    FaqListModel.$inject = [
        'FaqFilterModel',
        'PaginationCollectionModel',
        'configService'
    ];

    function FaqListModel(FaqFilterModel, PaginationCollectionModel, configService) {
        faqListModel.prototype = Object.create(PaginationCollectionModel.prototype);

        return faqListModel;
        function faqListModel() {
            PaginationCollectionModel.call(this);
            this.paginationModel.itemsPerPage = configService.getConfiguration().faqItemsPerPage;
            this.list = [];
            this.filter = new FaqFilterModel();
        }
    }
})();

(function () {
    'use strict';
    angular
        .module('app')
        .service('faqListMapper', faqListMapper);

    faqListMapper.inject = [
        'FaqListModel',
        'BaseMapper',
        'faqMapper',
        'faqFilterMapper'
    ];

    function faqListMapper(FaqListModel, BaseMapper, faqMapper, faqFilterMapper) {
        FaqListMapper.prototype = Object.create(BaseMapper.prototype);
        FaqListMapper.prototype.mapFrom = mapFrom;
        FaqListMapper.prototype.mapTo = mapTo;
        FaqListMapper.prototype.mapExistingFrom = mapExistingFrom;

        return new FaqListMapper();

        function FaqListMapper() {
            BaseMapper.call(this);
        }

        function mapFrom(data) {
            return mapExistingFrom(new FaqListModel(), data);
        }

        function mapExistingFrom(model, data) {
            model.paginationModel.totalItems = data.totalRecords;
            model.paginationModel.current++;
            model.paginationModel.pagesCount = Math.ceil(data.totalRecords / model.paginationModel.itemsPerPage);
            model.list = faqMapper.mapArrayFrom(data.list);

            return model;
        }

        function mapTo(data) {
            data.paginationModel.current--;
            var result = faqFilterMapper.mapTo(data.filter);
            result.start = data.paginationModel.current * data.paginationModel.itemsPerPage;
            result.qty = data.paginationModel.itemsPerPage;

            return result;
        }
    }
})();

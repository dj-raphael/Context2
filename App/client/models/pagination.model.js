(function () {
    'use strict';
    angular
        .module('app')
        .factory('PaginationModel', PaginationModel);

    PaginationModel.$inject = [];

    function PaginationModel() {
        return paginationModel;
        function paginationModel() {
            this.next = 2;
            this.prev = 0;
            this.current = 1;
            this.pagesCount = 1;
            this.totalItems = null;
            this.itemsPerPage = 10;
            this.canNext = false;
            this.canPrev = false;
            this.maxSize = 5;
        }
    }
})();

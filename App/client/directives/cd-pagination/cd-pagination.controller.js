(function () {
    'use strict';
    angular
        .module('app')
        .controller('cdPaginationDirectiveController', cdPaginationDirectiveController);

    cdPaginationDirectiveController.$inject = [
        'scrollService'
    ];

    function cdPaginationDirectiveController(scrollService) {
        var vm = this;
        vm.pageChange = pageChange;

        function pageChange() {
            if (typeof vm.cdOnChange === 'function') {
                var onChangeResult = vm.cdOnChange();
                if (typeof onChangeResult.then === 'function') {
                    onChangeResult.then(function () {
                        scrollService.scrollToTop();
                    });
                } else {
                    scrollService.scrollToTop();
                }
            }
        }
    }
})();
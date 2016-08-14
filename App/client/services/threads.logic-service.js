(function () {
    'use strict';
    angular
        .module('app')
        .service('threadsLogicService', threadsLogicService);

    threadsLogicService.$inject = [
        'configService'
    ];

    function threadsLogicService(configService) {
        this.getMainThread = getMainThread;
        this.findByTitle = findByTitle;

        function getMainThread(threads) {
            if (threads.length === 0) {
                return null;
            }
            var diff = configService.getConfiguration().mainThreadDiff,
                prevMainThread = threads[0],
                currentMainThread = threads[0];
            for (var i = 0; i < threads.length; i++) {
                var thread = threads[i];
                if (thread.isDiscussedHere) {
                    return thread.id;
                }
                if (thread.weight > currentMainThread.weight) {
                    prevMainThread = currentMainThread;
                    currentMainThread = thread;
                }
            }
            if ((currentMainThread.weight - prevMainThread.weight) * 100 >= diff) {
                return currentMainThread.id;
            }

            return null;
        }

        function findByTitle(title, threads) {
            for (var i = 0; i < threads.length; i++) {
                var thread = threads[i];
                if (thread.title === title) {
                    return thread;
                }
            }

            return null;
        }
    }
})();
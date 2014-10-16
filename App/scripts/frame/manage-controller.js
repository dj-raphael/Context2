define('frame/manage-controller', ['frame/app', 'services/manage'], function (app, manageService) {
    app.controller('manageController', ['$scope', '$sce',
        function ($scope, $sce) {

            function init() {
                if ($('.CI_scrollable') !== undefined) {
                    $('.CI_scrollable').height($(window).height() - 107);
                }

                var parentScope = $scope.$parent.$parent.$parent.$parent.$parent.$parent;

                $scope.thread = parentScope.thread;
                $scope.language = parentScope.language;

                $scope.htmlcode = $sce.trustAsHtml('<p>Loading..</p>');
                $scope.content = '<p>Loading..</p>';
                $scope.editorcontent = '';

                $scope.wikiTypeIsLink = true;

            }

            init();
        }
    ]);

})
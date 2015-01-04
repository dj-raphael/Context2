define('frame/profile-toolbar-controller', ['frame/app'], function (app) {
    app.controller('profileController_toolbar', ['$scope', '$rootScope',
        function ($scope, $rootScope) {
            $scope.click = function (parameter) {
                switch (parameter) {
                    case 'edit':
                        $rootScope.$broadcast('editWikiClick');
                        break;
                    case 'view history':
                        //TODO
                        break;
                    default:
                        break;
                }
            };
        }
    ]);
})
define('frame/banner-controller', ['frame/app', 'services/banner'], function(app, bannerService) {
    app.controller('bannerCtrl', [
        '$scope', '$sce', "$rootScope",
        function($scope, $sce, $rootScope) {
            $scope.Style = "width: 100%;height:0px;background:beige;float:left";
            //$scope.Style = "display: none;";

            function init() {
                $scope.urlBanners = 'banners.html';
                $scope.$watch('keywords', function() {
                    getBanners($scope.keywords);
                });

            }

            function getBanners(keywords) {
                var banners = [];
                var threadId = $rootScope.thread;
                if (Array.isArray(keywords) && threadId != null) {
                    bannerService.getBanners(keywords, threadId).done(function (data) {
                        if (data == null || data.length === 0) {
                            $('.CI_scrollable').height($(window).height() - 77);
                            $scope.Style = "width: 100%;height:0px;background:beige;float:left";
                            $scope.contentBanners = null;
                        } else {
                            data.forEach(function(entry) {
                                banners.push(entry);
                            });
                            $scope.Style = "width: 100%;height:32px;background:beige;float:left;line-height:30px;white-space:nowrap;";
                            $('.CI_scrollable').height($(window).height() - 107);
                            $scope.contentBanners = banners;
                        }
                    });
                }
            }

            init();
        }
    ]);

})
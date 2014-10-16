define('frame/banner-controller', ['frame/app', 'services/banner'], function(app, bannerService) {
    app.controller('bannerCtrl', [
        '$scope', '$sce',
        function($scope, $sce) {
            $scope.Height = "width: 100%;height:30px;background:beige;float:left";

            function init() {
                $scope.urlBanners = 'banners.html';
                getBanners();

            }

            function getBanners(keywords) {
                var banners = [];
                if (event.data.type2 == "keywords") {
                    bannerService.getBanners(event.data.data).done(function(data) {
                        if (data == null || data.length == 0) {
                            $('.CI_scrollable').height($(window).height() - 77);
                            $scope.Height = "width: 100%;height:0px;background:beige;float:left";
                            $scope.contentBanners = null;
                        } else {
                            data.forEach(function(entry) {
                                banners.push(entry);
                            });

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
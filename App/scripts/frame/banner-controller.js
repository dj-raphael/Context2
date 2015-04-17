define('frame/banner-controller', ['frame/app', 'services/banner'], function(app, bannerService) {
    app.controller('bannerCtrl', [
        '$scope', '$sce', "$rootScope",
        function($scope, $sce, $rootScope) {
            $scope.Style = "width: 100%;height:0px;background:beige;float:left";
            //$scope.Style = "display: none;";

            function init() {
                $scope.urlBanners = 'banners.html';
                $scope.$watch('keywords', function () {
                    if (!chrome) {
                        getBanners($scope.keywords, true);
                    } else {
                        // The ID of the extension we want to talk to.
                        var contextCommentExtensionId = "ngplihjnnmnmhalcelmeojjedmmbhpan";

                        // Make a simple request:
                        chrome.runtime.sendMessage(contextCommentExtensionId, { message: 'contextcomment' },
                          function (response) {
                              if (response == 'contextcomment') {
                                  getBanners($scope.keywords, true);
                              } else {
                                  getBanners($scope.keywords, false);
                              }
                          });
                    }
                });

            }

            function getBanners(keywords, extentionInstalled) {
                var banners = [];
                var threadId = $rootScope.thread;

                if (!extentionInstalled) {
                    banners.push({
                        BannerId: 0,
                        Text: navigator.language == "ru" ? "Хотите такие комментари везде? Установите рассширение в браузер!" : "Like comments? install extension! ->",
                        Href: "/download"
                    });
                    $scope.Style = "width: 100%; height:32px; background:#ffc; color:#320; float:left; line-height:30px; white-space:nowrap; padding-left: 20px;text-overflow: ellipsis;overflow: hidden;";
                    $('.CI_scrollable').height($(window).height() - 107);
                    $scope.contentBanners = banners;
                } else {
                    return;
                    if (Array.isArray(keywords) && threadId != null) {
                        bannerService.getBanners(keywords, threadId).done(function(data) {
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
            }

            init();
        }
    ]);

})
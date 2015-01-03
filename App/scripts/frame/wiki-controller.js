define('frame/wiki-controller', ['frame/app', 'services/wiki'], function (app, wikiService) {
    app.controller('wikiController', ['$scope', '$sce',
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

                updateWiki();

                $scope.$on('editWikiClick', function () {
                    $scope.editmode = true;
                });
            }

            function updateWiki() {
                if ($scope.thread != null)
                    wikiService.getWiki($scope.thread, $scope.language)
                        .success(function(data) {
                            if (data.indexOf('https://') == 0 || data.indexOf('http://') == 0) {
                                $scope.content = '<iframe src="' + data + '" class="CI_iframe" ></iframe>';
                                $scope.link = data;
                                $scope.StyleForWiki = "height: 100%;font-size: 0;";
                                window.addEventListener('message', messageHandler, false);
                            } else {
                                $scope.wikiTypeIsLink = false;
                                $scope.content = data;
                                $scope.StyleForWiki = "height: 100%;";
                            }
                            $scope.htmlcode = $sce.trustAsHtml($scope.content);
                            window.setTimeout(function() {
                                $scope.$apply();
                            });

                        });
            }

            function isUrl(s) {
                var regexp = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
                return regexp.test(s);
            }

            function messageHandler(event) {
                console.log(event);
                if(event.data.type2==null)
                if (event.data.indexOf('ready:') == 0) {
                    var host = event.data.substring(6);
                    var hh = host.split('.');
                    if (hh.length > 2) {
                        host = hh[hh.length - 2] + '.' + hh[hh.length - 1];
                    }
                    var style = '';
                    switch (host) {
                        case 'wikipedia.org':
                            style = 'style:#mw-page-base,#mw-head-base,#mw-navigation{display:none;} div#content{-webkit-transition:all 0 step-start !important;transition:all 0 step-start !important;margin-left:0;border:0 none white;} .mw-editsection{display:none}';
                            break;
                    }
                    event.source.postMessage(style, '*');
                }
            }

            $scope.submitUrl = function() {
                $scope.linkInvalid = '';

                if (isUrl($scope.link)) {
                    wikiService.setWiki($scope.thread, $scope.language, $scope.link).done(function(data) {
                        if (data == 'invalid') {
                            $scope.linkInvalid = 'Link invalid: domain should be *.wikipedia.org';
                            window.setTimeout(function() {
                                $scope.$apply();
                            });
                        } else {
                            $scope.editmode = false;
                            updateWiki();
                        }
                    });
                } else {
                    $scope.linkInvalid = 'Link invalid: not a link';
                }
            };

            $scope.submitEditor = function() {
                $scope.editorcontent = document.getElementById('wiki_edit').value;
                wikiService.setWiki($scope.thread, $scope.language, $scope.editorcontent).done(function () {
                    $scope.content = $scope.editorcontent;
                    $scope.htmlcode = $sce.trustAsHtml($scope.content);
                    $scope.editmode = false;
                    $scope.StyleForWiki = "height: 100%;";
                    window.setTimeout(function() {
                        $scope.$apply();
                    });
                });
            };

            $scope.cancel = function cancel() {
                $scope.editorcontent = '';
                $scope.editmode = false;
            };

            $scope.$watch('editmode', function (newValue, oldValue) {
                if (newValue === true) {
                    if ($scope.content.indexOf('<iframe src=') == 0) {
                        $scope.editorcontent = '';
                    } else {
                        $scope.editorcontent = $scope.content;
                    }
                }
            });
            $scope.tinymceOptions = {
                selector: "textarea.tinymce-editor",
                theme: "modern",
                plugins: [
                    "anchor code contextmenu image insertdatetime link lists media paste preview searchreplace table wordcount"
                ],
                toolbar1: "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
                toolbar2: "media | forecolor backcolor | code | image ",
                image_advtab: true,
                height: "200px",
                width: "650px"
            };

            init();
        }
    ]);

    app.controller('wikiController_toolbar', ['$scope', '$rootScope',
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
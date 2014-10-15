require(['angular', 'options/app', 'jquery', 'services/auth', 'services/languages','services/account', 'configuration','jquery-ui'],
    function(ng, app, $, authService, langService, accService, configuration) {
        "use strict";
        function init() {
            var injector = ng.bootstrap(document, ['app']);
            injector.invoke(function ($rootScope) {});
        }

        app.controller('mainCtrl', function($scope, $rootScope) {
            $scope.user = {};
            $scope.user.isAuthenticated = authService.isAuthenticated(
                function(data) {
                    $scope.user.isAuthenticated = data.isAuthenticated;
                    $scope.$apply();
                }
            );

            langService.getLanguages().done(function(data) {
                $scope.languages = data;
                $scope.selectedLanguages = langService.getSelectedLanguages();
                if ($scope.selectedLanguages.length === 0) {
                    $scope.languages.forEach(function(l) {
                        if (l.uniCode === window.navigator.language) {
                            langService.setSelectedLanguages([l]);
                            $scope.selectedLanguages = langService.getSelectedLanguages();
                        }
                    });
                }
                $scope.$apply();
            });

            $scope.addSelectedLanguage = function(lang) {
                $scope.selectedLanguages.push(lang);
                $scope.selectedLanguages.sort(function(a, b) {
                    return a.uniCode > b.uniCode;
                });
                langService.setSelectedLanguages($scope.selectedLanguages);
            };
            $scope.removeSelectedLanguage = function(lang) {
                for (var i = 0; i < $scope.selectedLanguages.length; i++) {
                    if ($scope.selectedLanguages[i].uniCode == lang.uniCode) {
                        $scope.selectedLanguages.splice(i, 1);
                    }
                }
                langService.setSelectedLanguages($scope.selectedLanguages);
            }
            $scope.signout = function () {
                authService.logoff()
                    .done(function (data) {
                        if (data.result === 'logoff success') {
                            $scope.user.isAuthenticated = false;
                            $scope.$apply();
                        }
                    });
            }

        });

        app.filter('exept', function () {
            return function (items, filter) {
                if (!items)
                    return null;
                var filtered = [];
                for (var i = 0; i < items.length; i++) {
                    var found = false;
                    for (var j = 0; j < filter.length; j++) {
                        if (items[i].uniCode == filter[j].uniCode) {
                            found = true;
                            break;
                        }
                    }
                    if (!found) {
                        filtered.push(items[i]);
                    }
                }

                return filtered;
            };
        });

        init();

        function removeAccount(e){
            var pui = $(e.currentTarget).data('provider_user_id');
            var p = $(e.currentTarget).data('provider');
            accService.removeAccount(p,pui).done(function(data){
                //alert(data);
                viewExternalAccount();
            });
        }

        function socialLogin(e) {
            var provider = $(e.currentTarget).data('provider');
            var returnUrl = configuration.urls.localUrl + "success.html?param=set_cookie";
            window.location.href = configuration.urls.socialLogin + provider + '&returnUrl=' + returnUrl;
        }

        function viewExternalAccount(){
            $('#external-login-list').html('');
            accService.listExternalAccount().done(function(data){
                data.externalLogins.forEach(function(it){
                    var displayName = it.ProviderDisplayName;
                    var btnRem = '<button id="remBtn_'+it.Provider+'"data-provider_user_id="'+it.ProviderUserId+'" data-provider="'+it.Provider+'">Remove</button></br>';
                    if(!data.showRemoveButton){btnRem='';}
                    $('#external-login-list').append(displayName+btnRem);
                    $('#remBtn_'+it.Provider).click(removeAccount);
                });
                $('#external-login-list').append('<h3>Add an external login</h3>');
                data.registeredExtLogin.forEach(function(it){
                    var btnAdd = '<button id="addBtn_'+it+'"data-provider="'+it+'">'+it+'</button></br>';
                    $('#external-login-list').append(btnAdd);
                    $('#addBtn_'+it).click(socialLogin);
                });
            });
        }

    }
);

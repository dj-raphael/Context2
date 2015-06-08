define("directives/answer-form", ["frame/app", "services/comments"], function (app, commentService) {
    var $localScope = null;
    var commentsBanned = false,
        addComment = function(language, threadId, parentId, message, url, keywords, threadCode, threadTitle, username, successCallback) {
            if (!commentsBanned) {
                commentService.addComment(
                    language,
                    threadId,
                    parentId,
                    message,
                    url,
                    keywords,
                    threadCode,
                    threadTitle,
                    username
                ).then(function(data) {
                    var banTime = parseInt(data, 10),
                        getTimeStampString = function(time) {
                            var diff = time;
                            var days = Math.floor(diff / (1000 * 60 * 60 * 24));
                            diff -= days * (1000 * 60 * 60 * 24);
                            var hours = Math.floor(diff / (1000 * 60 * 60));
                            diff -= hours * (1000 * 60 * 60);
                            var minutes = Math.floor(diff / (1000 * 60));
                            diff -= minutes * (1000 * 60);
                            var seconds = Math.floor(diff / (1000));
                            diff -= seconds * (1000);
                            if (days > 0)
                                return days + ' days ' + hours + ' hours';
                            else if (hours > 0)
                                return hours + ' hours ' + minutes + ' minutes';
                            else
                                return minutes + ' minutes ' + seconds + ' seconds';

                        };
                    if (!isNaN(banTime)) {
                        commentsBanned = true;
                        $('.popup-ban-time-counter').show();
                        var banTimeCounter = banTime;
                        $('.ban-time-count').html(getTimeStampString(banTimeCounter));
                        var handler = setInterval(function() {
                            if (banTimeCounter >= 1000) {
                                banTimeCounter -= 1000;
                                $('.ban-time-count').html(getTimeStampString(banTimeCounter));
                            } else {
                                clearInterval(handler);
                            }
                        }, 1000);
                        setTimeout(function() {
                            commentsBanned = false;
                            $('.popup-ban-time-counter').hide();
                        }, banTime);
                    } else {
                        successCallback();
                    }

                }).fail(function (e) {
                    if (e.responseJSON != null) {
                        if (e.responseJSON.ExceptionType === "System.Web.Security.MembershipCreateUserException") {
                            $localScope.username_tooltip = window.localization.userExists;
                            $localScope.username_error = true;
                        }
                    }
                });
                ;
            } else {
                $('.popup-ban-time-counter').show();
            }
        };

    app.directive("answerForm", function() {
        return {
            restrict: "E",
            templateUrl: "answer-form.html",
            replace: false,
            transclude: true,
            scope: {
                show: "=show",
                parentCommentId: "=parentCommentId"
            },
            link: function(scope, element, attrs) {

            },
            controller: function ($scope, $rootScope, $sce) {
                $localScope = $scope;
                $scope.user = $rootScope.user;
                $scope.close = function() {
                    $scope.show = false;
                };
                $scope.login = function() {
                    $('.popup-authorize').show();
                    return false;
                };
                $scope.sendAnswer = function sendAnswer() {
                    addComment($rootScope.language,
                        $rootScope.thread,
                        $scope.parentCommentId,
                        $scope.text,
                        $rootScope.currentUrl,
                        $rootScope.keywords,
                        $('#thread_box').select2('data').code,
                        $('#thread_box').select2('data').text,
                        $scope.username,
                        function() {
                            if ($rootScope.thread == "00000000-0000-0000-0000-000000000000") {
                                location.reload();
                            } else {
                                $scope.show = false;
                                $scope.answerIsExpanded = false;
                                $rootScope.$broadcast('commentAdded');
                            }
                        });

                };
            }
        };
    });

})

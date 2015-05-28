define("frame/discussion-controller", ["frame/app", "services/comments", "services/auth", "directives/social-login-buttons", "directives/answer-form"], function (app, commentService, authService) {
    var commentsBanned = false,
		addComment = function (language, threadId, parentId, message, url, keywords, threadCode, threadTitle, successCallback) {
		    if (!commentsBanned) {
		        commentService.addComment(
			        language,
			        threadId,
			        parentId,
			        message,
			        url,
			        keywords,
			        threadCode,
			        threadTitle
			    ).then(function (data) {
			        var banTime = parseInt(data, 10),
			            getTimeStampString = function (time) {
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
			            var handler = setInterval(function () {
			                if (banTimeCounter >= 1000) {
			                    banTimeCounter -= 1000;
			                    $('.ban-time-count').html(getTimeStampString(banTimeCounter));
			                } else {
			                    clearInterval(handler);
			                }
			            }, 1000);
			            setTimeout(function () {
			                commentsBanned = false;
			                $('.popup-ban-time-counter').hide();
			            }, banTime);
			        } else {
			            successCallback();
			        }

			    });
		    } else {
		        $('.popup-ban-time-counter').show();
		    }
		};

    app.controller('discussionController', ['$scope', '$rootScope',
      function ($scope, $rootScope) {
          if ($('.CI_scrollable') !== undefined) {
              //$('.CI_scrollable').width($(window).width() - 12);
              $('.CI_scrollable').height($(window).height() - 107);
          }


          var parentScope = $scope.$parent.$parent.$parent.$parent.$parent.$parent;

          parentScope.tabs.forEach(function (entry) {
              if (entry.id == 'discussion') {
                  $scope.content = entry.content;
              }
          });

          $scope.title = 'discussionController Tab';
          $scope.thread = parentScope.thread;
          $scope.language = parentScope.language;
          $scope.aaa = "TEST TEST TEST";
          $scope.currenturl = decodeURIComponent(location.search.substr(5));
          $scope.item = {};
          $scope.item.CommentId = '';
          $scope.isAuthenticated = authService.isAuthenticated();

          $scope.sendAnswer = function sendAnswer() {
              var text = null;
              if ($scope.$$childTail.$$childTail)
                  text = $scope.$$childTail.$$childTail.text;
              else if ($scope.$$childHead.$$childHead)
                  text = $scope.$$childHead.$$childHead.text;
              addComment(
                    $rootScope.language,
                    $rootScope.thread,
                    null,
                    text,
                    $scope.currenturl,
                    $rootScope.keywords,
                    $('#thread_box').select2('data').code,
                    $('#thread_box').select2('data').text,
                function () {

                    if ($rootScope.thread == "00000000-0000-0000-0000-000000000000") {
                        location.reload();
                    } else {
                        $scope.answerIsExpanded = false;
                        $rootScope.$broadcast('commentAdded');
                    }
                });
          };

          $scope.clickNewComment = function () {
              $rootScope.isAuthenticated = authService.isAuthenticated();
              $scope.answerIsExpanded = !$scope.answerIsExpanded;
              window.setTimeout(function () {
                  $('#' + $scope.item.CommentId + '_CommentTextArea').focus();
              });
          };

          $scope.close = function close() {
              $scope.answerIsExpanded = false;
              window.setTimeout(function () {
                  $('#' + $scope.item.CommentId + '_CommentTextArea').blur();
              });
          };

      }
    ]);


    app.directive('treeview', function () {
        return {
            restrict: 'E',
            templateUrl: 'tree.html',
            replace: false,
            transclude: true,
            scope: {},
            link: function (scope, element, attrs) {

            },
            controller: function ($scope, $rootScope, $sce) {

                function getMessagesTrusted(data) {
                    if (data === undefined) return data;
                    for (var i = 0; i < data.length; i++) {
                        data[i].Message = $sce.trustAsHtml(data[i].Message);
                        if (data[i].Children && data[i].Children.length > 0) data[i].Children = getMessagesTrusted(data[i].Children);
                    }
                    return data;
                };

                function addNewChildren(items, children) {
                    if (children === undefined) return children;
                    for (var i = 0; i < items.length; i++) {
                        children.forEach(function (entry) {
                            if (entry.ParentId == items[i].CommentId) {
                                if (items[i].Children === undefined) items[i].Children = [];
                                items[i].Children.push(entry);
                            }
                        });
                        if (items[i].Children && items[i].Children.length > 0) items[i].Children = addNewChildren(items[i].Children, children);
                    }
                    return items;
                };

                $scope.page = 1;

                commentService.getCommentsByThread($rootScope.thread, $rootScope.language, 0, 10)
                    .done(function (data) {
                        data.comments = getMessagesTrusted(data.comments);
                        $scope.items = data.comments;
                        $scope.lastTimeLoaded = data.time;
                        $scope.itemsInited = true;
                        window.setTimeout(function () {
                            $scope.$apply();
                        });
                    });


                $rootScope.depth = 0;
                $scope.scrollDisabled = false;
                $scope.immediateCheck = true;

                $scope.busy = false;
                $scope.addMoreItems = function () {
                    if ($scope.busy) return;
                    $scope.busy = true;
                    var getItems = function (i) {
                        i++;
                        if ($scope.itemsInited) {
                            commentService.getCommentsByThread($rootScope.thread, $rootScope.language, $scope.page, 10)
                                .always(function () {
                                    $scope.busy = false;
                                })
                                .done(function (data) {
                                    //data = data.comments;
                                    if (!data || !data.comments || !data.comments.length || data.comments.length == 0) {
                                        $scope.scrollDisabled = true;
                                    } else {
                                        data.comments = getMessagesTrusted(data.comments);
                                        data.comments.forEach(function (entry) {
                                            $scope.items.push(entry);
                                        });
                                        $scope.page++;
                                        window.setTimeout(function () {
                                            $scope.$apply();
                                        });
                                    }
                                });
                        } else {
                            window.setTimeout(function () {
                                getItems(i);
                            }, 100 * i * i);
                        }
                    };
                    getItems();
                };

                $scope.$on('commentAdded', function () {
                    commentService.getNewCommentsByThread($rootScope.thread, $rootScope.language, $scope.lastTimeLoaded)
                        .done(function (data) {
                            $scope.lastTimeLoaded = data.time;
                            if (data.comments !== undefined) {

                                data.comments = getMessagesTrusted(data.comments);

                                data.comments.forEach(function (comment) {
                                    comment.isNew = true;
                                    if (comment.ParentId == null) $scope.items.unshift(comment);
                                });

                                $scope.items = addNewChildren($scope.items, data.comments);

                                window.setTimeout(function () {
                                    $scope.$apply();
                                });
                            }
                        });
                });
            }
        };
    });

    app.directive('treeviewItem', function ($compile) {
        return {
            restrict: 'E',
            templateUrl: "item.html",
            replace: true,
            scope: {
                item: "="
            },
            link: function (scope, element, attrs) {
                element.append($compile('<div collapse="isCollapsed" class="collapse treeview-item"><treeview-item ng-repeat="Child in item.Children" item="Child"></treeview-item></div>')(scope));
            },
            controller: function ($scope, $rootScope, $sce) {
                $scope.user = $rootScope.user;

                $scope.voteAvaliable = function () {
                    return authService.getUsername() != $scope.item.UserName && $rootScope.user.isAuthenticated;
                };

                function getMessagesTrusted(data) {
                    for (var i = 0; i < data.length; i++) {
                        data[i].Message = $sce.trustAsHtml(data[i].Message);
                        if (data[i].Children && data[i].Children.length > 0) data[i].Children = getMessagesTrusted(data[i].Children);
                    }
                    return data;
                };
                $scope.currenturl = decodeURIComponent(location.search.substr(5));

                $scope.isCollapsed = false;

                if ($scope.item.HasChildren && (!$scope.item.Children || $scope.item.Children.length == 0)) {
                    $scope.isCollapsed = true;
                }

                $scope.expandClick = function expandClick() {
                    if ($scope.item.HasChildren && (!$scope.item.Children || $scope.item.Children.length == 0)) {
                        commentService.getCommentsByParent($scope.item.CommentId, 8)
                            .done(function (data) {
                                data.comments = getMessagesTrusted(data.comments);
                                $scope.item.Children = data.comments;
                                $scope.isCollapsed = true;
                                window.setTimeout(function () {
                                    $scope.$apply();
                                    $scope.isCollapsed = false;
                                    $scope.$apply();
                                });
                            });
                    }
                };

                $scope.sendAnswer = function sendAnswer() {
                    var text = null;
                    if ($scope.$$childTail.$$childTail)
                        text = $scope.$$childTail.$$childTail.text;
                    else if ($scope.$$childHead.$$childHead)
                        text = $scope.$$childHead.$$childHead.text;
                    addComment($rootScope.language,
                        $rootScope.thread,
                        $scope.item.CommentId,
                        text,
                        $scope.currenturl,
                        $rootScope.keywords,
                        $('#thread_box').select2('data').code,
                        $('#thread_box').select2('data').text,
                        function () {
                            $scope.answerIsExpanded = false;
                            $rootScope.$broadcast('commentAdded');
                        });

                };

                $scope.close = function close() {
                    $scope.answerIsExpanded = false;
                    window.setTimeout(function () {
                        $('#' + $scope.item.CommentId + '_CommentTextArea').blur();
                    });
                };

                $scope.clickAnswer = function clickAnswer() {
                    $scope.answerIsExpanded = !$scope.answerIsExpanded;
                    $scope.isCollapsed = false;
                    $scope.expandClick();
                    window.setTimeout(function () {
                        $('#' + $scope.item.CommentId + '_CommentTextArea').focus();
                    });

                };

                $scope.vote = function vote(isGood) {
                    commentService.addCommentVote($scope.item.CommentId, isGood, $scope.currenturl)
                        .done(function (comment) {
                            $scope.item.VoteUp = comment.VoteUp;
                            $scope.item.VoteDown = comment.VoteDown;
                            window.setTimeout(function () {
                                $scope.$apply();
                            });
                        });
                };
            }
        };
    });

})

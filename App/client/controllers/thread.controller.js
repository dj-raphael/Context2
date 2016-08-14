(function () {
    'use strict';
    angular
        .module('app')
        .controller('threadController', threadController);

    threadController.$inject = [
        '$stateParams',
        'sessionService',
        'modalDialogService',
        'threadsService',
        'languageService',
        'authorizationService',
        'TopMenuModel',
        'CommentsTabsModel',
        'AuthUserModel',
        'commentsTabsEnum',
        'CommentsListModel',
        'settingsDialogOptions',
        'popupWindowService',
        'WikiModel',
        'wikiModeEnum',
        'wikiService',
        'FaqModel',
        'FaqListModel',
        'topMenuViewService',
        'authorizationViewService',
        'faqViewService',
        'commentsViewService',
        'CommentModel',
        'tabsViewService',
        'wikiViewService',
        'eventsService',
        'ApplicationStateModel',
        'commentsService',
        'ModerateModel'
    ];

    function threadController($stateParams,
                            sessionService,
                            modalDialogService,
                            threadsService,
                            languageService,
                            authorizationService,
                            TopMenuModel,
                            CommentsTabsModel,
                            AuthUserModel,
                            commentsTabsEnum,
                            CommentsListModel,
                            settingsDialogOptions,
                            popupWindowService,
                            WikiModel,
                            wikiModeEnum,
                            wikiService,
                            FaqModel,
                            FaqListModel,
                            topMenuViewService,
                            authorizationViewService,
                            faqViewService,
                            commentsViewService,
                            CommentModel,
                            tabsViewService,
                            wikiViewService,
                            eventsService,
                            ApplicationStateModel,
                            commentsService,
                            ModerateModel) {
        var vm = this;
        vm.topMenu = sessionService.set('topMenu', new TopMenuModel());
        vm.comments = new CommentsListModel();
        vm.selectLanguage = selectLanguage;
        vm.tabs = sessionService.set('commentsTabs', new CommentsTabsModel());
        vm.commentsTabsEnum = commentsTabsEnum;
        vm.authUser = new AuthUserModel();
        vm.showLogin = showLogin;
        vm.logout = logout;
        vm.expandComment = commentsViewService.expandComment;
        vm.collapseComment = commentsViewService.collapseComment;
        vm.newComment = new CommentModel();
        vm.toggleAddComment = commentsViewService.toggleAddComment;
        vm.addComment = addComment;
        vm.voteUp = voteUp;
        vm.voteDown = voteDown;
        vm.canVote = canVote;
        vm.showSettings = showSettings;
        vm.showAccount = showAccount;
        vm.wiki = new WikiModel();
        vm.wikiEditMode = wikiEditMode;
        vm.saveWikiUrl = saveWikiUrl;
        vm.saveWikiText = saveWikiText;
        vm.wikiModeEnum = wikiModeEnum;
        vm.loadMoreComments = loadMoreComments;
        vm.newQuestion = new FaqModel();
        vm.addQuestion = addQuestion;
        vm.faq = new FaqListModel();
        vm.updateQuestion = updateQuestion;
        vm.toggleQuestion = faqViewService.toggleQuestion;
        vm.showEditQuestion = faqViewService.showEditQuestion;
        vm.faqChangePage = faqChangePage;
        vm.voteQuestionDown = voteQuestionDown;
        vm.voteQuestionUp = voteQuestionUp;
        vm.setShowWiki = setShowWiki;
        vm.setShowFaq = setShowFaq;
        vm.close = topMenuViewService.close;
        vm.reloadPage = topMenuViewService.reloadPage;
        vm.toggleModerate = commentsViewService.toggleModerate;
        vm.removeComment = removeComment;
        vm.updateComment = updateComment;
        vm.moderate = new ModerateModel();
        vm.renameThread = renameThread;
        activate();
        function activate() {
            var state = sessionService.set('applicationState', new ApplicationStateModel());
            state.threadFirstTimeLoaded = true;
            eventsService.setWindowFocusCallback(function () {
                var prevAuth = angular.copy(vm.authUser);
                return getAuthorizedThread().then(function () {
                    if (JSON.stringify(vm.authUser) !== JSON.stringify(prevAuth)) {
                        return getThread();
                    }
                });
            });
            vm.topMenu.showSearch = false;
            vm.tabs.active = commentsTabsEnum.discussion;
            return topMenuViewService.init(vm.topMenu).then(function () {
                return getAuthorizedThread().then(function () {
                    return getThread();
                });
            });
        }

        function getAuthorizedThread() {
            return authorizationService.isAuthenticated($stateParams.id).then(function (authUser) {
                vm.authUser = authUser;
            });
        }

        function selectLanguage(item) {
            topMenuViewService.changeLanguage(vm.topMenu, item);
            vm.comments.paginationModel.current = 1;
            return getTabs();
        }

        function getThread() {
            return threadsService.getThread($stateParams.id, vm.topMenu.language.code).then(function (thread) {
                topMenuViewService.changeThread(vm.topMenu, thread);
                vm.moderate.title = vm.topMenu.threadTitle;
                return getTabs();
            });
        }

        function getTabs() {
            return getFaq().then(function () {
                return getWiki().then(function () {
                    tabsViewService.setTabsVisibility(vm.tabs, vm.faq, vm.wiki);
                    return getComments();
                });
            });
        }

        function getWiki() {
            return wikiService.getWiki($stateParams.id, vm.topMenu.language.code).then(function (wiki) {
                vm.wiki = wiki;
            });
        }

        function getFaq() {
            return faqViewService.getFaq(vm.faq, $stateParams.id, vm.topMenu.language.code).then(function (faqList) {
                vm.faq = faqList;
            });
        }

        function getComments() {
            vm.comments = new CommentsListModel();
            return commentsViewService.getComments(vm.comments, $stateParams.id, vm.topMenu.language.code).then(function (commentsList) {
                vm.comments = commentsList;
            });
        }

        function showLogin() {
            return authorizationViewService.showLoginDialog().then(function (authUser) {
                vm.authUser = authUser;
            });
        }

        function logout() {
            return authorizationService.logout().then(function (data) {
                vm.authUser = data;
            });
        }

        function addComment(parentComment, addCommentModel) {
            return commentsViewService.addComment(parentComment, addCommentModel, $stateParams.id, vm.topMenu, vm.authUser.isAuthenticated).then(function (comment) {
                if (parentComment.id == null) {
                    vm.comments.list.unshift(comment);
                    vm.newComment = new CommentModel();
                }

                if (!vm.authUser.isAuthenticated) {
                    return authorizationService.isAuthenticated().then(function (authUser) {
                        vm.authUser = authUser;
                    });
                }
            });
        }

        function voteUp(comment) {
            return commentsViewService.vote(comment, true);
        }

        function voteDown(comment) {
            return commentsViewService.vote(comment, false);
        }

        function canVote(comment) {
            return commentsViewService.canVote(comment, vm.authUser);
        }

        function showSettings() {
            return modalDialogService.openDialog(settingsDialogOptions).then(function (langs) {
                vm.topMenu.languages = langs;
            });
        }

        function showAccount() {
            return languageService.getUrlLangRelated('account').then(function (url) {
                popupWindowService.open(url, 'Account');
            });
        }

        function wikiEditMode(mode) {
            wikiViewService.setWikiMode(vm.wiki, mode);
        }

        function saveWikiUrl() {
            return wikiViewService.setWikiUrl(vm.wiki, $stateParams.id, vm.topMenu.language.code);
        }

        function saveWikiText() {
            return wikiViewService.setWikiText(vm.wiki, $stateParams.id, vm.topMenu.language.code);
        }

        function loadMoreComments() {
            return commentsViewService.loadMoreComments(vm.comments, $stateParams.id, vm.topMenu.language.code).then(function (commentsList) {
                vm.comments = commentsList;
            });
        }

        function addQuestion(faqModel) {
            return faqViewService.addQuestion(faqModel, vm.faq, $stateParams.id, vm.topMenu.language.code).then(function (data) {
                vm.newQuestion = new FaqModel();
            });
        }

        function updateQuestion(faqModel, index) {
            return faqViewService.updateQuestion(faqModel, index, vm.faq);
        }

        function faqChangePage() {
            return getFaq();
        }

        function voteQuestionDown(faq) {
            return faqViewService.voteQuestion(faq, false, $stateParams.id);
        }

        function voteQuestionUp(faq) {
            return faqViewService.voteQuestion(faq, true, $stateParams.id);
        }

        function setShowWiki() {
            tabsViewService.setShowWiki(vm.tabs);
        }

        function setShowFaq() {
            tabsViewService.setShowFaq(vm.tabs);
        }

        function removeComment(comment) {
            return commentsService.deleteComment(comment.id).then(function (data) {
                updateCommentFromComments(data);
            });
        }

        function updateComment(comment, moderateCommentModel) {
            return commentsService.updateComment(comment.id, moderateCommentModel).then(function (data) {
                updateCommentFromComments(data);
            }, function () {
                moderateCommentModel.moderateFail = true;
            });
        }

        function updateCommentFromComments(comment) {
            updateCommentFromCommentsRecursive(vm.comments.list, comment);
        }

        function updateCommentFromCommentsRecursive(comments, comment) {
            for (var i = 0; i < comments.length; i++) {
                if (comments[i].id === comment.id) {
                    comments[i] = comment;
                    return true;
                }
                if (comments[i].children != null && comments[i].children.length !== 0) {
                    if (updateCommentFromCommentsRecursive(comments[i].children, comment)) {
                        return true;
                    }
                }
            }

            return false;
        }

        function renameThread() {
            return threadsService.renameThread($stateParams.id, vm.topMenu.language.code, vm.moderate.title).then(function () {
                vm.topMenu.threadTitle = vm.moderate.title;
            });
        }
    }
})();
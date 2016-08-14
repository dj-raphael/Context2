(function () {
    'use strict';
    angular
        .module('app')
        .constant('appConfiguration', {
            //baseUrl: 'https://context2.com/',
            baseUrl: 'http://localhost:2341/',
            authCookieName: '.ASPXAUTH',
            externalLoginWindowWidth: 1000,
            externalLoginWindowHeight: 600,
            externalLoginWindowName: 'Login',            
            faqItemsPerPage: 10,
            commentsItemsPerPage: 10,
            mainThreadDiff: 30,
            showBanners: false,
            storageKeys: {
                availableLanguages: 'available-languages',
                currentLanguage: 'current-language'
            },
            urls: {
                /* Account2 */
                isAuthenticated: 'api/Account2/isAuthenticated',
                restoreAuthCookie: 'api/Account2/RestoreAuthCookie',
                login: 'api/Account2/Login',
                logout: 'api/Account2/Logoff',
                register: 'api/Account2/Register',
                socialLogin: 'Account/SocialLogin?provider=',
                getCookie: 'api/Account2/GetCookie',
                listExternalAccount: 'api/Account2/ListExternalAccount',
                removeAccount: 'api/Account2/RemoveAccount',

                /* Language */
                getLanguages: 'api/Language/GetAllowedLanguages',

                /* Thread */
                getThreads: 'api/Thread/GetThreads',
                addThread: 'api/Thread/AddThread',
                searchThreads: 'api/Thread/SearchThreads',
                getThread: 'api/Thread/GetThread',
                renameThread: 'api/Thread/Rename',

                /* Comment */
                getComments: 'api/Comment/GetComments',
                addComment: 'api/Comment/AddComment',
                addCommentVote: 'api/Comment/AddCommentVotes',
                updateComment: 'api/Comment/UpdateComment',
                deleteComment: 'api/Comment/DeleteComment',

                /* Faq */
                getFaqList: 'api/Faq/GetList',
                addQuestion: 'api/Faq/AddQuestion',
                updateQuestion: 'api/Faq/UpdateQuestion',
                addFaqVotes: 'api/Faq/AddFaqVotes',

                /* Wiki */
                getWiki: 'api/Wiki/Get',
                setWiki: 'api/Wiki/Set',

                //Pages
                getTerms: 'Account/Terms',
                getExternalLogin: 'login?ReturnUrl=/close.html&provider=',
                account: 'Account/Manage'
            }
        });
})();
define('configuration',
    [],
    function() {
        "use strict";
        //var baseUrl = '/';
        var baseUrl = 'https://context2.com/';
        var configuration = {
            authCookieName: '.ASPXAUTH',
            urls: {
                localUrl: window.location.protocol + "//" + window.location.hostname + "/app/",

                /* Account2 */
                isAuthenticated: baseUrl + 'api/Account2/isAuthenticated',
                restoreAuthCookie: baseUrl + 'api/Account2/RestoreAuthCookie',
                login: baseUrl + 'api/Account2/Login',
                logoff: baseUrl + 'api/Account2/Logoff',
                register: baseUrl + 'api/Account2/Register',
                socialLogin: baseUrl + 'Account/SocialLogin?provider=',
                getCookie: baseUrl + 'api/Account2/GetCookie',
                listExternalAccount: baseUrl + 'api/Account2/ListExternalAccount',
                removeAccount: baseUrl + 'api/Account2/RemoveAccount',

                /* Language */
                getLanguages: baseUrl + 'api/Language/GetAllowedLanguages',

                /* Thread */
                getThreads: baseUrl + "api/Thread/GetThreads",
                addThread: baseUrl + "api/Thread/AddThread",
                searchThreads: baseUrl + "api/Thread/SearchThreads",

                /* Comment */
                getComments: baseUrl + 'api/Comment/GetComments',
                addComment: baseUrl + 'api/Comment/AddComment',
                addCommentVote: baseUrl + 'api/Comment/AddCommentVotes',

                /* Faq */
                getFaqList: baseUrl + 'api/Faq/GetList',
                addQuestion: baseUrl + 'api/Faq/AddQuestion',
                updateQuestion: baseUrl + 'api/Faq/UpdateQuestion',
                addFaqVotes: baseUrl + 'api/Faq/AddFaqVotes',

                /* Wiki */
                getWiki: baseUrl + 'api/Wiki/Get',
                setWiki: baseUrl + 'api/Wiki/Set',

                //Banner
                getBanners: baseUrl + 'api/Banner/GetBanners',
    }

        };
        return configuration;
    }
);

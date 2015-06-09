define('services/comments',
['configuration', 'services/transport'],
    function (configuration, transport) {
        "use strict";

        function getCommentsByParent(parentId, deep) {
            var promize = transport.request('GET',
                configuration.urls.getComments,
                {
                    parentId: parentId,
                    deep: deep
                }
            );
            return promize;
        }

        function getCommentsByThread(threadId, language, page, count) {
            if (threadId === undefined || language === undefined) {
                console.log('getComments aborted: language=' + language + ' threadId=' + threadId);
                var nullFunc = function() {
                };
                return { done: nullFunc, success: nullFunc, error: nullFunc };
            }
            var promize = transport.request('GET',
                configuration.urls.getComments,
                {
                    threadId: threadId,
                    language: language,
                    page: page,
                    count: count
                }
            );
            return promize;
        }
        function getNewCommentsByThread(threadId, language, dateFrom) {
            if (threadId === undefined || language === undefined) {
                console.log('getComments aborted: language=' + language + ' threadId=' + threadId);
                var nullFunc = function () {
                };
                return { done: nullFunc, success: nullFunc, error: nullFunc };
            }
            var promize = transport.request('GET',
                configuration.urls.getComments,
                {
                    threadId: threadId,
                    language: language,
                    dateFrom: dateFrom
                }
            );
            return promize;
        }

        function addComment(language, threadId, parentId, message, url, keywords, threadCode, threadTitle, username) {
            var promize = transport.request('POST',
                configuration.urls.addComment,
            {
                Language: language,
                ThreadId: threadId,
                ParentId: parentId,
                Message: message,
                Url: url,
                Keywords: keywords,
                ThreadCode: threadCode,
                ThreadTitle: threadTitle,
                UserName: username
            }
            );
            return promize;
        }

        function addCommentVote(commentId, isGood, url) {
            //['http://mail.ru:90/aaa/index.html?a=qqq&gfd=qwwww#99', 'http:', 'http', '//mail.ru:90', 'mail.ru:90', 'mail.ru', '90', '/aaa/index.html', '?a=qqq&gfd=qwwww', 'a=qqq&gfd=qwwww', '#99', '99']
            var urlRx = new RegExp('^(([^:/\\?#]+):)?(//(([^:/\\?#]*)(?::([^/\\?#]*))?))?([^\\?#]*)(\\?([^#]*))?(#(.*))?$');
            var parts = urlRx.exec(url);
            var host = parts[5];
            var promize = transport.request('POST',
                configuration.urls.addCommentVote,
            {
                CommentId: commentId,
                IsGood: isGood,
                Domain: host,
             }
            );
            return promize;
        }

        var service = {
            getCommentsByParent: getCommentsByParent,
            getCommentsByThread: getCommentsByThread,
            addComment: addComment,
            addCommentVote: addCommentVote,
            getNewCommentsByThread: getNewCommentsByThread
        };
        return service;
    }
);

define('services/faq',
    ['configuration', 'services/transport'],
    function (configuration, transport) {
        "use strict";

        function getList(threadId, language, start, qty) {
            if (!threadId) return {done: function() {}};
            var promize = transport.request('GET',
                configuration.urls.getFaqList,{
                    threadId: threadId,
                    language: language,
                    start: start,
                    qty: qty
                }
            );
            return promize;
        }

        function addQuestion(language, question, answer, threadId, questionId) {
            var promize = transport.request('POST',
                configuration.urls.addQuestion, {
                    Language: language,
                    Question: question,
                    Answer: answer,
                    ThreadId: threadId,
                    QuestionId: questionId
                }
            );
            return promize;
        }
        function updateQuestion(question, answer, questionId) {
            var promize = transport.request('POST',
                configuration.urls.updateQuestion, {
                    Question: question,
                    Answer: answer,
                    QuestionId: questionId
                }
            );
            return promize;
        }
        function voteQuestion(questionId, threadId, isGood) {
            var promize = transport.request('POST',
                configuration.urls.addFaqVotes, {
                    QuestionId: questionId,
                    ThreadId: threadId,
                    IsGood: isGood
                }
            );
            return promize;
        }
        var service = {
            getList: getList,
            addQuestion: addQuestion,
            updateQuestion: updateQuestion,
            voteQuestion: voteQuestion
        };
        return service;
    }
);


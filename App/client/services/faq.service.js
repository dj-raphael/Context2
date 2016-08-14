(function () {
    'use strict';
    angular
        .module('app')
        .service('faqService', faqService);

    faqService.$inject = [
        'requestHandlerHelper',
        'faqTransport',
        'faqListMapper',
        'faqMapper'
    ];

    function faqService(requestHandlerHelper, faqTransport, faqListMapper, faqMapper) {
        this.getQuestions = getQuestions;
        this.addQuestion = addQuestion;
        this.updateQuestion = updateQuestion;
        this.addQuestionVote = addQuestionVote;

        function getQuestions(faqListModel) {
            return requestHandlerHelper.handleRequest(faqTransport.getQuestions(faqListMapper.mapTo(faqListModel))).then(function (data) {
                return faqListMapper.mapExistingFrom(faqListModel, data);
            });
        }

        function addQuestion(faqModel, threadId, languageCode) {
            var requestData = {
                Answer: faqModel.answer,
                Language: languageCode,
                Question: faqModel.question,
                ThreadId: threadId
            };

            return requestHandlerHelper.handleRequest(faqTransport.addQuestion(requestData)).then(function (data) {
                return faqMapper.mapFrom(data);
            });
        }

        function updateQuestion(faqModel) {
            return requestHandlerHelper.handleRequest(faqTransport.updateQuestion(faqMapper.mapTo(faqModel))).then(function (data) {
                return faqModel;
            });
        }

        function addQuestionVote(questionId, threadId, isGood) {
            var requestData = {
                QuestionId: questionId,
                ThreadId: threadId,
                IsGood: isGood
            };

            return requestHandlerHelper.handleRequest(faqTransport.addQuestionVote(requestData)).then(function (data) {
                return data;
            });
        }
    }
})();
(function () {
    'use strict';
    angular
        .module('app')
        .service('faqViewService', faqViewService);

    faqViewService.$inject = [
        'faqService'
    ];

    function faqViewService(faqService) {
        this.getFaq = getFaq;
        this.addQuestion = addQuestion;
        this.updateQuestion = updateQuestion;
        this.toggleQuestion = toggleQuestion;
        this.showEditQuestion = showEditQuestion;
        this.voteQuestion = voteQuestion;

        function getFaq(faqListModel, threadId, languageCode) {
            faqListModel.filter = {
                languageCode: languageCode,
                threadId: threadId
            };

            return faqService.getQuestions(faqListModel);
        }

        function addQuestion(faqModel, faqListModel, threadId, languageCode) {
            return faqService.addQuestion(faqModel, threadId, languageCode).then(function (data) {
                faqListModel.list.unshift(data);
            }, function () {
                faqModel.saveFail = true;
            });
        }

        function updateQuestion(faqModel, index, faqListModel) {
            return faqService.updateQuestion(faqModel).then(function (data) {
                data.editMode = false;
                data.saveFail = false;
                faqListModel.list[index] = data;
            }, function () {
                faqModel.saveFail = true;
            });
        }

        function toggleQuestion(faqModel) {
            faqModel.expanded = !faqModel.expanded;
        }

        function showEditQuestion(faqModel) {
            faqModel.editMode = true;
        }

        function voteQuestion(faqModel, isGood, threadId) {
            return faqService.addQuestionVote(faqModel.id, threadId, isGood).then(function (data) {
                faqModel.voteSum = data;
            });
        }
    }
})();
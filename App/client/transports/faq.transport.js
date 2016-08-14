(function () {
    'use strict';
    angular
        .module('app')
        .service('faqTransport', faqTransport);

    faqTransport.$inject = [
        '$q',
        '$http',
        'configService'
    ];

    function faqTransport($q, $http, configService) {
        this.getQuestions = getQuestions;
        this.addQuestion = addQuestion;
        this.updateQuestion = updateQuestion;
        this.addQuestionVote = addQuestionVote;

        function getQuestions(params) {
            return $http.get(configService.getUrl('getFaqList'), { params: params }).then(function (data) {
                return data.data;
            }, function () {
                return $q.reject(null);
            });
        }

        function addQuestion(params) {
            return $http.post(configService.getUrl('addQuestion'), params).then(function (data) {
                return {
                    Answer: params.Answer,
                    Question: params.Question,
                    QuestionId: data.data,
                    Weight: 0
                };
            }, function () {
                return $q.reject(null);
            });
        }

        function updateQuestion(params) {
            return $http.post(configService.getUrl('updateQuestion'), params).then(function (data) {
                return data.data;
            }, function () {
                return $q.reject(null);
            });
        }

        function addQuestionVote(params) {
            return $http.post(configService.getUrl('addFaqVotes'), params).then(function (data) {
                return data.data;
            }, function () {
                return $q.reject(null);
            });
        }
    }
})();

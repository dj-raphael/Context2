(function () {
    'use strict';
    angular
        .module('app')
        .service('faqMapper', faqMapper);

    faqMapper.inject = [
        'FaqModel',
        'BaseMapper'
    ];

    function faqMapper(FaqModel, BaseMapper) {
        FaqMapper.prototype = Object.create(BaseMapper.prototype);
        FaqMapper.prototype.mapFrom = mapFrom;
        FaqMapper.prototype.mapTo = mapTo;

        return new FaqMapper();

        function FaqMapper() {
            BaseMapper.call(this);
        }

        function mapFrom(data) {
            var result = new FaqModel();

            result.id = data.QuestionId;
            result.question = data.Question;
            result.answer = data.Answer;
            result.voteSum = data.Weight;
            return result;
        }

        function mapTo(data) {
            return {
                Question: data.question,
                Answer: data.answer,
                QuestionId: data.id
            };
        }
    }
})();

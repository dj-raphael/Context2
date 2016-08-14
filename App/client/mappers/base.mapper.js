(function () {
    'use strict';
    angular
        .module('app')
        .factory('BaseMapper', BaseMapper);

    BaseMapper.inject = [];

    function BaseMapper() {
        baseMapper.prototype.mapTo = mapTo;
        baseMapper.prototype.mapFrom = mapFrom;
        baseMapper.prototype.mapArrayFrom = mapArrayFrom;
        baseMapper.prototype.mapArrayTo = mapArrayTo;
        baseMapper.parseDate = parseDate;

        return baseMapper;

        function baseMapper() {
        }

        function mapFrom(data) {
            return data;
        }

        function mapTo(data) {
            return data;
        }

        function mapArrayFrom(data) {
            var results = [];
            for (var i = 0; i < data.length; i++) {
                results.push(this.mapFrom(data[i]));
            }
            return results;
        }

        function mapArrayTo(data) {
            var results = [];
            for (var i = 0; i < data.length; i++) {
                results.push(this.mapTo(data[i]));
            }
            return results;
        }

        function parseDate(val) {
            if (typeof val !== 'string') {
                return null;
            }

            var result = new Date();
            result.setTime(Date.parse(val));
            return result;
        }
    }
})();

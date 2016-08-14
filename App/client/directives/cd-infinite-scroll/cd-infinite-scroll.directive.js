(function () {
	'use strict';
	angular
        .module('app')
        .directive('cdInfiniteScroll', cdInfiniteScrollDirective);

	cdInfiniteScrollDirective.$inject = [
		'$rootScope',
		'$timeout',
		'$parse',
		'$window',
		'$document'
	];

	function cdInfiniteScrollDirective($rootScope, $timeout, $parse, $window, $document) {
		var directive = {
			restrict: 'A',
			link: cdInfiniteScrollDirectiveLink
		};

		return directive;

		function cdInfiniteScrollDirectiveLink(scope, elem, attrs) {
			var checkWhenEnabled, handler, scrollDistance, scrollEnabled, fetchItems;
			scrollDistance = 0;

			if (attrs.infiniteScrollDistance) {
				scope.$watch(attrs.infiniteScrollDistance, function (value) {
					scrollDistance = parseInt(value, 10);
				});
			}

			scrollEnabled = true;
			checkWhenEnabled = false;

			if (attrs.infiniteScrollDisabled) {
				scope.$watch(attrs.infiniteScrollDisabled, function (value) {
					scrollEnabled = !value;
					if (scrollEnabled && checkWhenEnabled) {
						checkWhenEnabled = false;
						return handler();
					}
				});
			}

			fetchItems = (function () {
				return $parse(attrs.cdInfiniteScroll).bind(null, scope);
			})();

			var target;

			handler = function () {
				var viewBottom = (target[0] === $window ? target[0].scrollY + target[0].innerHeight : target[0].scrollTop + target[0].offsetHeight);
				var remaining = (target[0] === $window ? $document[0].body.scrollHeight : target[0].scrollHeight) - viewBottom;
				var shouldScroll = remaining <= scrollDistance;

				if (shouldScroll && scrollEnabled) {
					return scope.$applyAsync(fetchItems);
				} else if (shouldScroll) {
					return (checkWhenEnabled = true);
				}
			};

			if (attrs.infiniteScrollContainer) {
				target = attrs.infiniteScrollContainer;

				if (target === 'window') {
					target = angular.element($window);
				} else if (target === 'document') {
					target = $document;
				} else if (target === 'body') {
					target = angular.element($document[0].body);
				} else {
					target = angular.element(target);
				}
			}

			if (!target) {
				target = elem;
			}

			target.on('scroll', handler);
			scope.$on('$destroy', function () {
				return target.off('scroll', handler);
			});

			return $timeout((function () {
				if (attrs.infiniteScrollImmediateCheck) {
					if (scope.$eval(attrs.infiniteScrollImmediateCheck)) {
						return handler();
					}
				} else {
					return handler();
				}
			}), 0);
		}
	}
})();
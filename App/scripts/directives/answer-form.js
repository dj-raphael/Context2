define("directives/answer-form", ["frame/app"], function (app) {
    app.directive("answerForm", function () {
        return {
            restrict: "E",
            templateUrl: "answer-form.html",
            replace: false,
            transclude: true,
            scope: {},
            link: function (scope, element, attrs) {
                
            },
            controller: function ($scope, $rootScope, $sce) {
                $scope.externalLoginList = [
                    { name: "facebook", cssClass: "fa-facebook", bg: "#3b5998" },
                    { name: "google", cssClass: "fa-google-plus ", bg: "#d62d20" },
                    { name: "twitter", cssClass: "fa-twitter", bg: "#326ada" },
                    { name: "vkontakte", cssClass: "fa-vk", bg: "#45668e" },
                    { name: "linkedin", cssClass: "fa-linkedin", bg: "#007bb6" },
                    { name: "yahoo", cssClass: "fa-yahoo", bg: "#7B0099" },
                    { name: "microsoft", cssClass: "fa-windows", bg: "#2672EC" }
                ];
                $scope.socialLogin = function (name) {
                    var w = 1000;
                    var h = 600;
                    var left = window.screen.availWidth / 2 - (w / 2);
                    var top = window.screen.availHeight / 2 - -(h / 2);
                    var newwindow = window.open("/login?ReturnUrl=/close.html&provider=" + name, "login", 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
                    if (window.focus) newwindow.focus();
                };
            }
        };
    });

})

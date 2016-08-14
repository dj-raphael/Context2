(function () {
    'use strict';
    angular
        .module('app')
        .constant('externalLoginOptions', [
                    { name: "facebook", cssClass: "fa-facebook", bg: "#3b5998" },
                    { name: "google", cssClass: "fa-google-plus ", bg: "#d62d20" },
                    { name: "twitter", cssClass: "fa-twitter", bg: "#326ada" },
                    { name: "vkontakte", cssClass: "fa-vk", bg: "#45668e" },
                    { name: "linkedin", cssClass: "fa-linkedin", bg: "#007bb6" },
                    { name: "yahoo", cssClass: "fa-yahoo", bg: "#7B0099" },
                    { name: "microsoft", cssClass: "fa-windows", bg: "#2672EC" }
        ]);
})();
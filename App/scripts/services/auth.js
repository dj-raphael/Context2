define("services/auth",
    ["configuration", "services/transport"],
    function (configuration, transport) {
        "use strict";
        /// Method return bool value
        function isAuthenticated(callback) {
            var res = !!localStorage["username"];
            if (callback) {
                transport.request("GET", configuration.urls.isAuthenticated)
                    .done(function(data) {
                        if (data.isAuthenticated !== true) {
                            localStorage.removeItem("username");
                        } else {
                            localStorage["username"] = data.username;
                        }
                        if (callback) {
                            callback(data.isAuthenticated);
                        }
                    });
            }
            return res;
        }

        function login(userName, password, rememberMe) {
            var promize = transport.request("POST",
                configuration.urls.login,
                {
                    UserName: userName,
                    Password: password,
                    RememberMe: rememberMe
                }
            ).done(function (data) {
                    localStorage["uid"] = data.uid;
                    localStorage["username"] = data.username;
                    localStorage[configuration.authCookieName] = data.cookie;
            });
            return promize;
        }

        function register(userName, password, confirmPassword) {
            var promize = transport.request("POST",
                configuration.urls.register,
                {
                    UserName: userName,
                    Password: password,
                    ConfirmPassword: confirmPassword
                }
            ).done(function (data) {
                    localStorage["uid"] = data.uid;
                    localStorage["username"] = data.username;
                    localStorage[configuration.authCookieName] = data.cookie;
            });
            return promize;
        }

        function logoff() {
            var promize = transport.request("GET", configuration.urls.logoff)
                .done(function (data) {
                    localStorage["uid"] = undefined;
                    localStorage.removeItem(configuration.authCookieName);
                });
            return promize;
        }

        function setCookie(){
            var promize = transport.request("GET",configuration.urls.getCookie)
                .done(function(data){
                    localStorage[configuration.authCookieName] = data.cookie;
                    localStorage["username"] = data.username;
                });
            return promize;
        }

        var service = {
            isAuthenticated: isAuthenticated,
            login: login,
            logoff: logoff,
            register: register,
            setCookie: setCookie
        };
        return service;
    }
);

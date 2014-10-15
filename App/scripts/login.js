require(['jquery', 'services/auth', 'configuration', 'jquery-ui', 'validate','showPassword'],
    function($, authService, configuration) {
        "use strict";

        function init() {
            $('#login_button').click(loginValidation);
            $('#register_button').click(registerValidation);
            $('#google').click(socialLogin);
            $('#facebook').click(socialLogin);
            $('#password').showHidePassword();
            $('#register_pass').showHidePassword({ retypeInput: "#register_pass_conf" });
            $('#LogInForm').submit(function() { return false; });
            $('#RegistForm').submit(function() { return false; });



        }

        function loginValidation() {

            $("#LogInForm").validate({
                rules: {
                    username: {
                        required: true,
                        minlength: 4
                    },
                    password: {
                        required: true,
                        minlength: 5
                    },

                    error: {
                        username: {
                            required: "Please enter a username",
                            minlength: "Your username must consist of at least 4 characters"
                        },
                        password: {
                            required: "Please provide a password",
                            minlength: "Your password must be at least 5 characters long"
                        }
                    }
                },
                errorPlacement: function(error, element) {

                    $(element).attr("title", error.text());
                    $(element).tooltip({
                        position: {
                            my: "center bottom-20",
                            at: "center top",
                            using: function(position, feedback) {
                                $(this).css(position);
                                $("<div>")
                                    .addClass("arrow")
                                    .addClass(feedback.vertical)
                                    .addClass(feedback.horizontal)
                                    .appendTo(this);
                            }
                        }
                    }).tooltip('open');
                    setTimeout(function() {
                        $(element).tooltip('close');
                        $(element).removeAttr('Title');
                        $(element).removeAttr('class');
                    }, 2000);
                    

                },
                focusInvalid: false,
                onkeyup: false,
                               
                success:
                    login()
        });
            
        }

        function registerValidation() {
            $("#RegistForm").validate({
                rules: {
                    mail: {
                        required: true,
                        email: true
                    },
                    reg_password: {
                        required: true,
                        minlength: 5
                    },
                    conf_password: {
                        required: true,
                        minlength: 5,
                        equalTo: "#register_pass"
                    },
                    messages: {
                        mail: {
                            required: "Please enter a email",
                            email: "Please enter a valid email address"
                        },
                        register_pass: {
                            required: "Please provide a password",
                            minlength: "Your password must be at least 5 characters long"
                        },
                        conf_password: {
                            required: "Please provide a password",
                            minlength: "Your password must be at least 5 characters long",
                            equalTo: "Please enter the same password as above"
                        }
                    }
                },
                errorPlacement: function(error, element) {

                    $(element).attr("title", error.text());
                    $(element).tooltip({
                        position: {
                            my: "center bottom-20",
                            at: "center top",
                            using: function(position, feedback) {
                                $(this).css(position);
                                $("<div>")
                                    .addClass("arrow")
                                    .addClass(feedback.vertical)
                                    .addClass(feedback.horizontal)
                                    .appendTo(this);
                            }
                        }
                    }).tooltip('open');
                    setTimeout(function() {
                        $(element).tooltip('close').removeAttr('Title', 'class');

                    }, 2000);
                },
                focusInvalid: false,
                onkeyup: false,
                success:
                    register()
            });
        }

       
        function login() {
            var userName = $('#login').val();
            var password = $('#password').val();
            var rememberMe = true;
            authService.login(userName, password, rememberMe)
                    .done(function(data) {
                        if (data.result === 'success') {
                            window.location.href = 'options.html';
                        }
                        if (data.result !== 'success') {
                            dbValidation('The user name or password provided is incorrect.', '#login');
                        }
                    });
        }
        

        function dbValidation(error, element) {
            $(element).attr("title", error);
            $(element).tooltip({
                position: {
                    my: "center bottom-20",
                    at: "center top",
                    using: function (position, feedback) {
                        $(this).css(position);
                        $("<div>")
                            .addClass("arrow")
                            .addClass(feedback.vertical)
                            .addClass(feedback.horizontal)
                            .appendTo(this);
                    }
                }
            }).tooltip('open');
            setTimeout(function () {
                $(element).tooltip('close').removeAttr('Title', 'class');

            }, 2000);
        }


       
            
       

        function register() {
            var userName = $('#register_login').val();
            var password = $('#register_pass').val();
            var confirmPassword = $('#register_pass_conf').val();
            authService.register(userName, password, confirmPassword)
                .done(function (data) {
                    if (data.result === 'register success') {
                        window.location.href = 'options.html';
                    }
                    if (data.result !== 'register success') {
                        dbValidation('User name already exists. Please enter a different user name.', '#register_login');
                    }
                });
        }

        function socialLogin(e){
            var returnUrl = configuration.urls.localUrl + "success.html?param=set_cookie";
            window.location.href = configuration.urls.socialLogin + e.currentTarget.id + '&returnUrl=' + returnUrl;
        }

        init();
    }
);

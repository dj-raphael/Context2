﻿require(['jquery', 'services/auth', 'services/threads', 'services/languages', 'angular', 'frame/app', 'combobox', 'select2', 'frame/tabs'],
    function ($, authService, threadService, langService, ng, app) {
        "use strict";

        //Initialize

        var currenturl = decodeURIComponent(window.location.search.substr(5));
        var currentlang = langService.getCurrentLanguage();
        var threads = [];
        var wasNoMatch = false;
        var lastThread;
        var keywords = null;
        var pageTitle = null;
        var layout = 'desktop';
        var maxAutoThreadRaiting = 1;

        function init() {
            var onSendKeywords = function (e) {
                layout = e.data.layout;

                /**** Layout start ****/
                if (layout === 'desktop') {
                    var helpButton = $('<a href="/help" target="_blank" class="CI_icon-help CI_icon"></a>');
                    $('.CI_panel-buttons').prepend(helpButton);
                } else if (layout === 'mobile') {
                    var backButton = $('<i class="CI_back-button">&#9668</i>').click(function () {
                        window.parent.postMessage('context2-frameclose', '/');
                    });
                    $('.CI_panel-buttons').prepend(backButton);
                }
                /* ^^^ Layout end ^^^ */

                if (e.data.type2 === "keywords") {
                    keywords = e.data.data;
                    pageTitle = e.data.title;

                    if (Array.isArray(keywords)) {
                        var injector = ng.bootstrap(document, ['app']);
                        injector.invoke(function ($rootScope) {
                            $rootScope.keywords = keywords;
                            $rootScope.user = { isAuthenticated: false, username: window.localization.userGuest };
                            $rootScope.currentUrl = decodeURIComponent(location.search.substr(5));
                            $rootScope.isAuthenticatedCalback = function (isAuthenticated, username) {
                                $rootScope.user.isAuthenticated = isAuthenticated;
                                if (isAuthenticated) {
                                    $rootScope.user.username = username;
                                } else {
                                    $rootScope.user.username = window.localization.userGuest;
                                }
                                if ($rootScope.$$phase !== "$apply" && $rootScope.$$phase !== "$digest") {
                                    $rootScope.$apply();
                                }
                            };
                            authService.isAuthenticated($rootScope.isAuthenticatedCalback);
                            $(window).on("focus", function () {
                                authService.isAuthenticated($rootScope.isAuthenticatedCalback);
                            });
                        });

                        /**** Create ThreadBox start ****/
                        $("#thread_box").select2({
                            width: "100%",
                            placeholder: "Loading...",
                            data: function () {
                                return { results: { text: 'LOADING...' } };
                            },
                        });
                        $("#thread_box").select2("enable", false);
                        getThreads(currentlang, currenturl, keywords, pageTitle);
                        /* ^^^ Create ThreadBox end ^^^ */

                        /**** Create LanguageBox start ****/
                        $("#language_box").select2({
                            width: "100%",
                            placeholder: "Loading...",
                            data: function () {
                                return { results: { text: 'LOADING...' } };
                            },
                        });
                        $("#language_box").select2("enable", false);

                        var data = [];
                        var langs = langService.getSelectedLanguages();
                        if (langs.length > 0) {
                            for (var i = 0; i < langs.length; i++) {
                                data.push({ id: langs[i].uniCode, text: langs[i].NativeTitle });
                            };
                            $("#language_box").select2("enable", true);
                            $("#language_box").val(currentlang).trigger("change");
                        } else {
                            langService.getLanguages().done(function () {
                                langService.initSelectedLanguages();
                                langs = langService.getSelectedLanguages();
                                for (var i = 0; i < langs.length; i++) {
                                    data.push({ id: langs[i].uniCode, text: langs[i].NativeTitle });
                                };
                                $("#language_box").select2("enable", true);
                                $("#language_box").val(currentlang).trigger("change");
                            });
                        }

                        createLanguageBox(data);
                        /* ^^^ Create LanguageBox end ^^^ */

                        $(".CI_icon-refresh").click(function () {
                            location.reload();
                        });
                        $('body').on('DOMMouseScroll mousewheel', '.CI_scrollable', function (ev) {
                            var $this = $(this),
                                scrollTop = this.scrollTop,
                                scrollHeight = this.scrollHeight,
                                height = $this.height(),
                                delta = ev.originalEvent.wheelDelta,
                                up = delta > 0;

                            var prevent = function () {
                                ev.stopPropagation();
                                ev.preventDefault();
                                ev.returnValue = false;
                                return false;
                            };


                            if (!up && -delta > scrollHeight - height - scrollTop) {
                                // Scrolling down, but this will take us past the bottom.
                                $this.scrollTop(scrollHeight);
                                return prevent();
                            } else if (up && delta > scrollTop) {
                                // Scrolling up, but this will take us past the top.
                                $this.scrollTop(0);
                                return prevent();
                            }
                        });

                        $(window).on('resize', function () {
                            if ($('.CI_scrollable') !== undefined) {
                                //$('.CI_scrollable').width($(window).width());
                                $('.CI_scrollable').height($(window).height() - 107);
                            }
                        });

                        $('#CI_popup_login_link, .CI_popup_close').on('click', function () {
                            $(this).closest('.CI_popup').hide();
                        });


                    } else {
                        window.parent.postMessage('context2-frameready', '/');
                    }
                }
            }
            var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent",
                eventer = window[eventMethod],
                messageEvent = eventMethod === "attachEvent" ? "onmessage" : "message";
            eventer(messageEvent, onSendKeywords, false);
            if (window.location.origin.indexOf(".mtproxy.yandex.net") > 0) {
                window.setTimeout(function () {
                    var e = {
                        data: {
                            type2: "keywords",
                            data: [[], [], [], []],
                            title: "metrika"
                        }
                    }
                    onSendKeywords(e);
                }, 100);
            } else {
                window.parent.postMessage('context2-frameready', currenturl);
            }
        }

        /********************************** \/ Define functions \/ *************************************/

        function weightComparator(a, b) {
            if (a.fromAnotherUrl && !b.fromAnotherUrl) return 1;
            if (!a.fromAnotherUrl && b.fromAnotherUrl) return -1;
            if (a.weight > b.weight) return -1;
            if (a.weight < b.weight) return 1;
            return 0;
        }

        function noMatch(term) {
            wasNoMatch = true;
            var newdata = [];
            var selectedData = $("#thread_box").select2("data");
            threadService.searchThreads(term, currentlang).done(function (response) {

                response.forEach(function (entry) {
                    if (!(threads.some(function (tr) { return tr.id == entry.ThreadId }))) {
                        newdata.push({ id: entry.ThreadId, code: entry.Code, text: entry.Title, raiting: entry.Raiting, fromAnotherUrl: true });
                    }
                });

                threads = threads.concat(newdata);

                if (newdata.length < 1) {
                    $("#thread_box").removeClass('select2-offscreen').select2({
                        width: '100%',
                        data: function () { return { results: threads }; },
                        formatNoMatches: function () {
                            setTimeout(function () {
                                $('.CI_addThreadButton').click(addThread);
                            });
                            return '<div class="CI_addThreadButton">Add Thread</div>';
                        },
                        escapeMarkup: function (m) { return m; },
                        placeholder: "Search or New Thread Name type here"
                    });
                    $("#thread_box").val(selectedData.id).trigger("change");
                    $("#thread_box").select2("open");
                    $("input.select2-input").val(term).trigger("input");
                } else {
                    createThreadBox(threads);
                    $("#thread_box").val(selectedData.id).trigger("change");
                    $("#thread_box").select2("open");
                    $("input.select2-input").val(term).trigger("input");
                }

            }).error(function () {
                $(".CI_thread-selector .select2-chosen").text("Service unavailable");
                $("#thread_box").select2("enable", false);
            });
            return "Searching...";
        }


        function createThreadBox(data) {
            $("#thread_box").removeClass('select2-offscreen').select2('destroy').select2({
                width: '100%',
                data: function () {
                    return { results: data };
                },
                placeholder: 'Search or New Thread Name type here',
                formatNoMatches: noMatch,
                formatSelection: function (entry) {
                    if (entry.fromAnotherUrl) return '<div style="color: #630; background-color:#ffd;">' + entry.text + '</div>';
                    return entry.text;
                },
                formatResult: function (entry, container, query) {
                    if (entry.fromAnotherUrl) return '<div style="opacity: 0.7">' + entry.text + '</div>';
                    return entry.text;
                },
                escapeMarkup: function (m) { return m; },
                sortResults: function (results, container, query) {
                    if (query.term && results.length < 3) {
                        noMatch(query.term);
                    }
                    return results;
                }
            }).on("select2-open", function () {
                $('#select2-drop > div.select2-search > input.select2-input.select2-focused').attr('placeholder', window.localization.SearchPlaceholder);
            });
            var selection = data[0].id;
            for (var k = 0; k < threads.length; k++) {
                if (threads[k].id == lastThread) {
                    selection = lastThread;
                    break;
                }
            };
            $("#thread_box").val(selection).trigger("change");
            $("#thread_box").select2("enable", true);

        }

        function getThreads(currlang, currurl, keywords, pageTitle) {
            threadService.getThreads(currurl, currlang, keywords).done(function (data) {
                var addPageTitleEnabled = true;
                data.forEach(function (entry) {
                    threads.push({ id: entry.ThreadId, code: entry.Code, text: entry.Title, raiting: entry.Raiting, weight: entry.Weight, fromAnotherUrl: !entry.IsDiscussedHere });
                    if (entry.IsDiscussedHere === true) {
                        addPageTitleEnabled = false;
                    }
                });
                if (addPageTitleEnabled)
                    threads.push({ id: '00000000-0000-0000-0000-000000000000', code: pageTitle, text: pageTitle, raiting: 0, weight: 100, fromAnotherUrl: true });
                threads.sort(weightComparator);
                createThreadBox(threads);
                //if (threads[0].fromAnotherUrl == true) {
                //    $("#thread_box").select2("open");
                //}
            }).error(function () {
                $(".CI_thread-selector .select2-chosen").text("Service unavailable");
            });
        }
        function createLanguageBox(data) {
            $("#language_box").select2({
                width: '100%',

                data: function () {
                    return { results: data };
                },
                placeholder: 'Select language...',

                minimumResultsForSearch: -1,
            }).on("select2-selecting", function (e) {
                lastThread = $("#thread_box").select2("data").id;
                langService.setCurrentLanguage(e.val);
                currentlang = e.val;
                threads = [];
                getThreads(currentlang, currenturl, keywords, pageTitle);
            }).on("select2-opening", function (e) {
                if (wasNoMatch) {
                    wasNoMatch = false;
                    e.preventDefault();
                    setTimeout(function () {
                        $("#language_box").select2("open");
                        $("#language_box").select2("close");
                        $("#language_box").select2("open");
                    });
                }
            });
            if (((langService.getSelectedLanguages().length > 1))) {
                $("#language_box").select2("enable", true);
            }
            $("#language_box").val(currentlang).trigger("change");
        }
        /* Reset noMatch onKeyUp*/
        $(document).on("keyup", "input.select2-input", function (event) {
            if (event.keyCode == 8 || event.keyCode == 46)  // 8 -backspace, 46 - delete
            {
                var selectedData = $("#thread_box").select2("data");
                $("input.select2-input").trigger("change");
                var term = this.value;
                createThreadBox(threads);
                $("#thread_box").val(selectedData.id).trigger("change");
                $("#thread_box").select2("open");
                $("input.select2-input").val(term).trigger("input");

                return true;
            }
        });


        function addThread(e) {
            var title = $('body > .select2-drop input.select2-input').val();
            threads.push({ id: '00000000-0000-0000-0000-000000000000', code: title, text: title });
            createThreadBox(threads);
            $("#thread_box").val('00000000-0000-0000-0000-000000000000').trigger("change");

        }
        /********************************** ^ Define functions END ^ *************************************/


        $('body').on('DOMMouseScroll mousewheel', '.CI_scrollable', function (ev) {
            var $this = $(this),
                scrollTop = this.scrollTop,
                scrollHeight = this.scrollHeight,
                height = $this.height(),
                delta = ev.originalEvent.wheelDelta,
                up = delta > 0;

            var prevent = function () {
                ev.stopPropagation();
                ev.preventDefault();
                ev.returnValue = false;
                return false;
            };


            if (!up && -delta > scrollHeight - height - scrollTop) {
                // Scrolling down, but this will take us past the bottom.
                $this.scrollTop(scrollHeight);
                return prevent();
            } else if (up && delta > scrollTop) {
                // Scrolling up, but this will take us past the top.
                $this.scrollTop(0);
                return prevent();
            }
        });


        init();
    }
);

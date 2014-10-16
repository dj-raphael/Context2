require(['jquery', 'services/auth', 'services/threads', 'services/languages', 'angular', 'frame/app', 'combobox', 'select2', 'frame/tabs'],
    function ($, authService, threadService, langService, ng, app) {
        "use strict";

        //Initialize

        var currenturl = decodeURIComponent(location.search.substr(5));
        var currentlang = langService.getCurrentLanguage();
        var threads = [];
        var wasNoMatch = false;
        var lastThread;
        var keywords = null;

        

        function init() {
            var onSendKeywords = function (e) {
                if (e.data.type2 == "keywords")
                    keywords = e.data.data;

                if (keywords && e.data.type2 == "keywords") {
                    var injector = ng.bootstrap(document, ['app']);
                    injector.invoke(function ($rootScope) {
                        $rootScope.keywords = keywords;
                    });

                    $("#thread_box").select2({
                        width: '100%',
                        placeholder: 'Loading...',
                        data: function () {
                            return { results: { text: 'LOADING...' } };
                        },
                    });
                    $("#thread_box").select2("enable", false);
                    getThreads(currentlang, currenturl, keywords);

                    $("#language_box").select2({
                        width: '100%',
                        placeholder: 'Loading...',
                        data: function () {
                            return { results: { text: 'LOADING...' } };
                        },
                    });
                    $("#language_box").select2("enable", false);

                    createLanguageBox();
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
                    if (keywords == null)
                        window.parent.postMessage('context2-frameready', '/');
                }
            }
            var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent",
                eventer = window[eventMethod],
                messageEvent = eventMethod === "attachEvent" ? "onmessage" : "message";
            eventer(messageEvent, onSendKeywords, false);
            window.parent.postMessage('context2-frameready', currenturl);
            authService.isAuthenticated(function(r) {});
        }

        /********************************** \/ Define functions \/ *************************************/

        function noMatch(term) {
            wasNoMatch = true;
            var newdata = [];
            var selectedData = $("#thread_box").select2("data");
            threadService.searchThreads(term, currentlang).done(function (response) {
                response.forEach(function (entry) {
                    newdata.push({ id: entry.ThreadId, code: entry.Code, text: entry.Title, fromAnotherUrl: true });
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
                    if (entry.fromAnotherUrl) return '<div style="opacity: 0.7">' + entry.text + '</div>';
                    return entry.text;
                },
                formatResult: function (entry) {
                    if (entry.fromAnotherUrl) return '<div style="opacity: 0.7">' + entry.text + '</div>';
                    return entry.text;
                },
                escapeMarkup: function (m) { return m; }
            }).on("select2-open", function () {
                $('#select2-drop > div.select2-search > input.select2-input.select2-focused').attr('placeholder', 'Search thread or type New Thread Name here');
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

        function getThreads(currlang, currurl, keywords) {
            threadService.getThreads(currurl, currlang, keywords).done(function (data) {
                data.forEach(function (entry) {
                    threads.push({ id: entry.ThreadId, code: entry.Code, text: entry.Title });
                });

                createThreadBox(threads);
            }).error(function () {
                $(".CI_thread-selector .select2-chosen").text("Service unavailable");
            });
        }
        function createLanguageBox() {
            $("#language_box").select2({
                width: '100%',

                data: function () {
                    var data = [];
                    langService.getSelectedLanguages().forEach(function (entry) {
                        data.push({ id: entry.uniCode, text: entry.NativeTitle });
                    });
                    return { results: data };
                },
                placeholder: 'Select language...',

                minimumResultsForSearch: -1,
            }).on("select2-selecting", function (e) {
                lastThread = $("#thread_box").select2("data").id;
                langService.setCurrentLanguage(e.val);
                currentlang = e.val;
                threads = [];
                getThreads(currentlang, currenturl, keywords);
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

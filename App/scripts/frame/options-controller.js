﻿define('frame/options-controller', ['jquery', 'services/auth', 'services/languages', 'jquery-ui', 'jquery-lwMultiSelect'],
    function ($, authService, langService) {
        "use strict";

        var fullLanguagesArray = [];
        var selectedItemsInList = [];

        jQuery.fn.filterByText = function (textbox, selectSingleMatch) {
            return this.each(function () {
                var select = this;
                var options = [];


                var arrayTitles = $('#lang-select option').map(function (e) { return ($(this).attr('data-title')); });
                var arrayUniCodes = $('#lang-select option').map(function (e) { return ($(this).attr('data-unicode')); });


                $(select).find('option').each(function () {
                    options.push({ value: $(this).val(), text: $(this).text() });
                });
                $(select).data('options', options);
                $(textbox).bind('change keyup', function () {

                    var options = $(select).data('options');

                    var selectLength = $(select).data('options').length;
                    var array = $(select).data('options');

                    for (var i = 0; i < selectLength; i++) {
                        if (selectedItemsInList.some(function (item) {
                            return array[i].text === item.Title;
                        }) == false) {
                            $('select option[value=' + i + ']').remove();
                        }
                    }

                    var search = $.trim($(this).val());
                    var regex = new RegExp(search, 'gi');


                    $.each(options, function (i) {
                        var option = options[i];
                        if ((option.text.match(regex) != null
                            || arrayTitles[i].toString().match(regex) != null || arrayUniCodes[i].toString().match(regex) != null)
                            && selectedItemsInList.some(function (item) {
                                return option.text == item.Title;
                        }) == false) {
                            $(select).append(
                                $('<option>').text(option.text).val(option.value).attr('data-title', arrayTitles[i]).attr('data-unicode', arrayUniCodes[i])
                            );
                        }
                    });
                    if (selectSingleMatch === true &&
                        $(select).children().length === 1) {
                        $(select).children().get(0).selected = true;
                    }

                    $('#lang-select').data('plugin_lwMultiSelect').updateList();

                });
            });
        };

        $(document).ready(function () {

            langService.getLanguages().done(function (data) {
                fullLanguagesArray = data;
                selectedItemsInList = langService.getSelectedLanguages();

                var selectInnerHTML = '';
                for (var i in fullLanguagesArray) {
                    selectInnerHTML += '<option value="' + i + '" data-title="' + fullLanguagesArray[i].Title +
                        '" data-unicode="' + fullLanguagesArray[i].uniCode + '">' + fullLanguagesArray[i].NativeTitle + '</option> \n';
                }
                $('#lang-select').html(selectInnerHTML);
                $('#lang-select').lwMultiSelect({
                    onChange: function() {
                        var options = $('#lang-select option:selected');
                        var selectedLangs = [];
                        for (var index = 0; index < options.length; index++) {
                            var lang = {
                                Title: $(options[index]).attr('data-title'),
                                UniCode: $(options[index]).attr('data-unicode'),
                                NativeTitle: $(options[index]).text()
                            };
                            selectedLangs.push(lang);
                        }
                        langService.setSelectedLanguages(selectedLangs);
                    }
                });
                for (var i = 0; i < selectedItemsInList.length; i++) {
                    $("li:contains('" + selectedItemsInList[i].Title + "')").click();
                }
                $(function () {
                    $('#lang-select').filterByText($('#lang-textbox'), false);
                });
            });
            $('.popup-settings .close').on('click', function() {
                $('.popup-settings').hide();
            });
        });
    });

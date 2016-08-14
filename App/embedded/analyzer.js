function analyzer(config, common) {
    "use strict";
    return {
        extractKeywords: extractKeywords,
        extractTitle: extractTitle
    };
    function extractKeywords(el, options, domainStopWords) {
        function mergeStopWords() {
            if (options.stopLangs.length == 0) {
                options.stopLangs = Object.keys(config.stopWordsLangs);
            }
            if (options.stopLangs[0] === 'none') return;
            for (var i in options.stopLangs) {
                options.stopWords = options.stopWords.concat(config.stopWordsLangs[options.stopLangs[i]]);
            }
            options.stopWords.concat(domainStopWords);
        }

        // extract text from all elements in required tag,
        // ignore links
        function extractText(tagName) {
            var res = '';
            var tags = el.querySelectorAll(tagName);
            for (var i = 0; i < tags.length; i++) {
                // ignore links
                if ((tags[i].parentNode && tags[i].parentNode.tagName == 'a') ||
                    (tags[i].parentNode.parentNode && tags[i].parentNode.parentNode.tagName == 'a') ||
                    (tags[i].getElementsByTagName('a').length > 0)) continue;
                if (tags[i].innerText) res = res + '\n ' + tags[i].innerText;
            }
            return res;
        }

        function multiple(text, multiplier) {
            var res = text;
            for (var i = 1; i < multiplier; i++) {
                res = res + '\n ' + text;
            }
            return res;
        }

        function wordIsValid(s) {
            if (s.length <= 1) return false;
            if (s.match(/\d{1,3}/)) return false;
            if (options.stopWords.indexOf(s) >= 0) return false;
            return true;
        }

        function calculateWordFrequency(text) {
            var i, j, k;
            var keys = [null]; //"keys[0] = null", a word boundary with length zero is empty
            for (i = 1; i <= options.numWords; i++) {
                keys.push({});
            }

            // Create a hash
            var rows = text.split('\n');
            var rowsCount = rows.length;
            for (i = 0; i < rowsCount; i++) {
                var row = rows[i];
                var words = row.split(/\s+/);
                var wordsCount = words.length;
                for (j = 0; j < wordsCount; j++) {
                    var word = words[j];
                    var isValid = wordIsValid(word);
                    if (isValid) {
                        keys[1][word] = (keys[1][word] || 0) + 1;
                    }
                    for (k = 2; k <= options.numWords; k++) {
                        if (j + k <= wordsCount) {
                            isValid = isValid | wordIsValid(words[j + k - 1]);
                            word += " " + words[j + k - 1];
                            if (isValid) {
                                keys[k][word] = (keys[k][word] || 0) + 1;
                            }
                        } else break;
                    }
                }
            }
            var res = [];
            for (i = 1; i <= options.numWords; i++) {
                res[i] = [];
                var key = keys[i];
                for (var w in key) {
                    if (key[w] >= options.atLeast) res[i].push({ 'word': w, 'count': key[w] });
                }
            }
            return res;
        }

        options = common.extend(config.extractDefaultOptions, options);
        mergeStopWords();

        var text = el.innerText;
        if (options.useTitle) text += '\n ' + multiple(document.title, options.weght.title);
        text += '\n ' + multiple(extractText('h1'), options.weght.h1);
        text += '\n ' + multiple(extractText('h2'), options.weght.h2);
        text += '\n ' + multiple(extractText('h3'), options.weght.h3);
        text += '\n ' + multiple(extractText('h4'), options.weght.h4);
        text += '\n ' + multiple(extractText('h5'), options.weght.h5);
        text += '\n ' + multiple(extractText('h6'), options.weght.h6);
        text += '\n ' + multiple(extractText('i'), options.weght.i);
        text += '\n ' + multiple(extractText('b'), options.weght.b);
        text += '\n ' + multiple(extractText('strong'), options.weght.strong);

        var reAllowedChars = /[ \t,.!\?;$:\[\]\(\)"\&\^«»—]+/g; // RE pattern to select invalid characters. Invalid characters are replaced with a whitespace
        text = text.replace(reAllowedChars, " ").replace(" '", " ").replace("' ", " ").replace("     ", " ").replace("   ", " ").replace("  ", " "); // Remove all irrelevant characters
        if (options.ignoreCase) text = text.toLowerCase();

        var results = calculateWordFrequency(text);
        function sortAscending(x, y) {
            var res = y.count - x.count;
            if (res != 0) return res;
            return x.word > y.word;
        };
        for (var k = 1; k <= options.numWords; k++) {
            results[k].sort(sortAscending); //sorts results
        }
        if (options.top > 0) {
            for (var k = 1; k <= options.numWords; k++) {
                if (results[k].length > options.top) results[k].length = options.top;
            }
        }
        return results;
    }

    function extractTitle(el, domainStopWords) {
        // extract text from all elements in required tag,
        // ignore links
        function extractText(tagName) {

            var res = [];
            var tags = el.querySelectorAll(tagName);
            for (var i = 0; i < tags.length; i++) {
                if (tags[i].innerText) res.push(tags[i].innerText);
            }
            return res;
        }

        function extractTitleFromArray(array, docTitle) {
            if (array.length == 0) return '';
            if (array.length == 1) return array[0];
            var scores = []
            for (var i = 0; i < array.length; i++) {
                var words = array[i].split(' ');
                scores[i] = 0;
                for (var j = 0; j < words.length; j++) {
                    if (docTitle.indexOf(words[j]) > -1) scores[i]++;
                }
            }
            var maxIndex = scores.indexOf(Math.max.apply(null, scores));
            if (scores[maxIndex] > 0) {
                return array[maxIndex];
            } else {
                return '';
            }
        }

        var
            title = document.title,
            h1 = extractText('h1'),
            h2 = extractText('h2'),
            result = '';
        if (h1.length > 0) {
            result = extractTitleFromArray(h1, title);
        } else if (h2.length > 0) {
            result = extractTitleFromArray(h2, title);
        }
        if (result == '') {
            var l = document.location;
            var stopWordsArray = domainStopWords.split(', ');
            result = document.title
            for (var i in stopWordsArray)
                result = result.replace(stopWordsArray[i], '');
        }

        return result;
    }
}
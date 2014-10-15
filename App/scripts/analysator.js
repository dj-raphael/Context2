function extractKeywords(el, options) {
    "use strict";
    var defaultOptions =
    {
        atLeast: 2, // Show results with at least .. occurrences
        numWords: 3, // Show statistics for one to .. words
        ignoreCase: true, // Case-sensitivity
        useTitle: true, // use document.title in calculation
        weght: { // weight for text in specific tags
            title: 32,
            h1: 32,
            h2: 16,
            h3: 8,
            h4: 4,
            h5: 3,
            h6: 2,
            b: 4,
            i: 4,
            strong: 4,
        },
        stopLangs: [], // used stopwords from selected langs ['en','es','de'], empty - all, ['none'] - none of dictionary
        stopWords: [], // place here addition stopwords for merge with langs
    };
    // https://github.com/6/stopwords

    if (!window.stopWordsLangs) window.stopWordsLangs = {};
    window.stopWordsLangs["en"] = ["a", "a's", "able", "about", "above", "according", "accordingly", "across", "actually", "after", "afterwards", "again", "against", "ain't", "all", "allow", "allows", "almost", "alone", "along", "already", "also", "although", "always", "am", "among", "amongst", "an", "and", "another", "any", "anybody", "anyhow", "anyone", "anything", "anyway", "anyways", "anywhere", "apart", "appear", "appreciate", "appropriate", "are", "aren't", "around", "as", "aside", "ask", "asking", "associated", "at", "available", "away", "awfully", "b", "be", "became", "because", "become", "becomes", "becoming", "been", "before", "beforehand", "behind", "being", "believe", "below", "beside", "besides", "best", "better", "between", "beyond", "both", "brief", "but", "by", "c", "c'mon", "c's", "came", "can", "can't", "cannot", "cant", "cause", "causes", "certain", "certainly", "changes", "clearly", "co", "com", "come", "comes", "concerning", "consequently", "consider", "considering", "contain", "containing", "contains", "corresponding", "could", "couldn't", "course", "currently", "d", "definitely", "described", "despite", "did", "didn't", "different", "do", "does", "doesn't", "doing", "don't", "done", "down", "downwards", "during", "e", "each", "edu", "eg", "eight", "either", "else", "elsewhere", "enough", "entirely", "especially", "et", "etc", "even", "ever", "every", "everybody", "everyone", "everything", "everywhere", "ex", "exactly", "example", "except", "f", "far", "few", "fifth", "first", "five", "followed", "following", "follows", "for", "former", "formerly", "forth", "four", "from", "further", "furthermore", "g", "get", "gets", "getting", "given", "gives", "go", "goes", "going", "gone", "got", "gotten", "greetings", "h", "had", "hadn't", "happens", "hardly", "has", "hasn't", "have", "haven't", "having", "he", "he's", "hello", "help", "hence", "her", "here", "here's", "hereafter", "hereby", "herein", "hereupon", "hers", "herself", "hi", "him", "himself", "his", "hither", "hopefully", "how", "howbeit", "however", "i", "i'd", "i'll", "i'm", "i've", "ie", "if", "ignored", "immediate", "in", "inasmuch", "inc", "indeed", "indicate", "indicated", "indicates", "inner", "insofar", "instead", "into", "inward", "is", "isn't", "it", "it'd", "it'll", "it's", "its", "itself", "j", "just", "k", "keep", "keeps", "kept", "know", "known", "knows", "l", "last", "lately", "later", "latter", "latterly", "least", "less", "lest", "let", "let's", "like", "liked", "likely", "little", "look", "looking", "looks", "ltd", "m", "mainly", "many", "may", "maybe", "me", "mean", "meanwhile", "merely", "might", "more", "moreover", "most", "mostly", "much", "must", "my", "myself", "n", "name", "namely", "nd", "near", "nearly", "necessary", "need", "needs", "neither", "never", "nevertheless", "new", "next", "nine", "no", "nobody", "non", "none", "noone", "nor", "normally", "not", "nothing", "novel", "now", "nowhere", "o", "obviously", "of", "off", "often", "oh", "ok", "okay", "old", "on", "once", "one", "ones", "only", "onto", "or", "other", "others", "otherwise", "ought", "our", "ours", "ourselves", "out", "outside", "over", "overall", "own", "p", "particular", "particularly", "per", "perhaps", "placed", "please", "plus", "possible", "presumably", "probably", "provides", "q", "que", "quite", "qv", "r", "rather", "rd", "re", "really", "reasonably", "regarding", "regardless", "regards", "relatively", "respectively", "right", "s", "said", "same", "saw", "say", "saying", "says", "second", "secondly", "see", "seeing", "seem", "seemed", "seeming", "seems", "seen", "self", "selves", "sensible", "sent", "serious", "seriously", "seven", "several", "shall", "she", "should", "shouldn't", "since", "six", "so", "some", "somebody", "somehow", "someone", "something", "sometime", "sometimes", "somewhat", "somewhere", "soon", "sorry", "specified", "specify", "specifying", "still", "sub", "such", "sup", "sure", "t", "t's", "take", "taken", "tell", "tends", "th", "than", "thank", "thanks", "thanx", "that", "that's", "thats", "the", "their", "theirs", "them", "themselves", "then", "thence", "there", "there's", "thereafter", "thereby", "therefore", "therein", "theres", "thereupon", "these", "they", "they'd", "they'll", "they're", "they've", "think", "third", "this", "thorough", "thoroughly", "those", "though", "three", "through", "throughout", "thru", "thus", "to", "together", "too", "took", "toward", "towards", "tried", "tries", "truly", "try", "trying", "twice", "two", "u", "un", "under", "unfortunately", "unless", "unlikely", "until", "unto", "up", "upon", "us", "use", "used", "useful", "uses", "using", "usually", "uucp", "v", "value", "various", "very", "via", "viz", "vs", "w", "want", "wants", "was", "wasn't", "way", "we", "we'd", "we'll", "we're", "we've", "welcome", "well", "went", "were", "weren't", "what", "what's", "whatever", "when", "whence", "whenever", "where", "where's", "whereafter", "whereas", "whereby", "wherein", "whereupon", "wherever", "whether", "which", "while", "whither", "who", "who's", "whoever", "whole", "whom", "whose", "why", "will", "willing", "wish", "with", "within", "without", "won't", "wonder", "would", "wouldn't", "x", "y", "yes", "yet", "you", "you'd", "you'll", "you're", "you've", "your", "yours", "yourself", "yourselves", "z", "zero"];

    // recurcive extend only exsist fielsds
    function extend(a, b) {
        if (typeof (b) === 'object') {
            for (var key in a) {
                if (a[key] instanceof Array && b[key] instanceof Array) {
                    a[key] = b[key];
                } else if (typeof (a[key]) === 'object') {
                    extend(a[key], b[key]);
                } else if (b[key] != undefined || b[key] != null) {
                    a[key] = b[key];
                }
            }
        }
        return a;
    }

    function mergeStopWords() {
        if (options.stopLangs.length == 0) {
            options.stopLangs = Object.keys(stopWordsLangs);
        }
        if (options.stopLangs[0] === 'none') return;
        for (var i in options.stopLangs) {
            options.stopWords = options.stopWords.concat(stopWordsLangs[options.stopLangs[i]]);
        }
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
                if (key[w] >= options.atLeast) res[i].push({ "word": w, "count": key[w] });
            }
        }
        return res;
    }

    options = extend(defaultOptions, options);
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
    window.options = options;
    return results;
}

function appendResult(results) {
    var total = 0;
    results[1].forEach(function (element, index, array) {
        total += element.count;
    });
    // Result parsing
    var outputHTML = []; // Buffer data. This data is used to create a table using `.innerHTML`

    for (var k = 1; k < results.length; k++) {
        // Customize your output. For example:
        var words = results[k];
        if (words.length) outputHTML.push('<td></td><td colSpan="3" class="num-words-header">' + k + ' word' + (k == 1 ? "" : "s") + '</td>');
        for (var i = 0, len = words.length; i < len; i++) {

            //Characters have been validated. No fear for XSS
            outputHTML.push(
                '<td><input onclick="managestopWords(this)" type=checkbox value="' + words[i].word + '"/></td><td>' +
                words[i].word + "</td><td>" +
                words[i].count + "</td><td>" +
                Math.round(words[i].count / total * 10000) / 100 + "%</td>");
            // textlen defined at the top
            // The relative occurence has a precision of 2 digits.
        }
    }
    outputHTML = '<table id="wordAnalysis"><thead><tr>' +
        '<td>Phrase</td><td>Count</td><td>Relativity</td></tr>' +
        '</thead><tbody><tr>' + outputHTML.join("</tr><tr>") +
        "</tr></tbody></table>";
    var el = document.createElement('div');
    el.innerHTML = outputHTML;
    document.body.appendChild(el);
}

function managestopWords(a, b, c) {
    console.log(this, a, b, c);
}

var keywords = extractKeywords(document.body);
console.log(keywords);
appendResult(keywords);
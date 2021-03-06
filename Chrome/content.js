(function () {(function (doc, cssText) {
    var styleEl = doc.createElement("style");
    doc.getElementsByTagName("head")[0].appendChild(styleEl);
    if (styleEl.styleSheet) {
        if (!styleEl.styleSheet.disabled) {
            styleEl.styleSheet.cssText = cssText;
        }
    } else {
        try {
            styleEl.innerHTML = cssText;
        } catch (ignore) {
            styleEl.innerText = cssText;
        }
    }
}(document, ".cleanslate,.cleanslate a,.cleanslate abbr,.cleanslate acronym,.cleanslate address,.cleanslate applet,.cleanslate area,.cleanslate article,.cleanslate aside,.cleanslate audio,.cleanslate b,.cleanslate big,.cleanslate blockquote,.cleanslate button,.cleanslate canvas,.cleanslate caption,.cleanslate cite,.cleanslate code,.cleanslate col,.cleanslate colgroup,.cleanslate datalist,.cleanslate dd,.cleanslate del,.cleanslate dfn,.cleanslate div,.cleanslate dl,.cleanslate dt,.cleanslate em,.cleanslate fieldset,.cleanslate figcaption,.cleanslate figure,.cleanslate footer,.cleanslate form,.cleanslate h1,.cleanslate h2,.cleanslate h3,.cleanslate h4,.cleanslate h5,.cleanslate h6,.cleanslate header,.cleanslate hr,.cleanslate i,.cleanslate iframe,.cleanslate img,.cleanslate input,.cleanslate ins,.cleanslate kbd,.cleanslate label,.cleanslate legend,.cleanslate li,.cleanslate main,.cleanslate map,.cleanslate mark,.cleanslate menu,.cleanslate meta,.cleanslate nav,.cleanslate object,.cleanslate ol,.cleanslate optgroup,.cleanslate option,.cleanslate output,.cleanslate p,.cleanslate pre,.cleanslate progress,.cleanslate q,.cleanslate samp,.cleanslate section,.cleanslate select,.cleanslate small,.cleanslate span,.cleanslate strike,.cleanslate strong,.cleanslate sub,.cleanslate summary,.cleanslate sup,.cleanslate table,.cleanslate tbody,.cleanslate td,.cleanslate textarea,.cleanslate tfoot,.cleanslate th,.cleanslate thead,.cleanslate time,.cleanslate tr,.cleanslate tt,.cleanslate ul,.cleanslate var,.cleanslate video{background-attachment:scroll;background-color:transparent;background-image:none;background-position:0 0;background-repeat:repeat;border-color:#000;border:medium none currentColor;bottom:auto;clear:none;clip:auto;color:inherit;counter-increment:none;counter-reset:none;cursor:auto;direction:inherit;display:inline;float:none;font-family:inherit;font-size:inherit;font-style:inherit;font-variant:normal;font-weight:inherit;height:auto;left:auto;letter-spacing:normal;line-height:inherit;list-style-type:inherit;list-style-position:outside;list-style-image:none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;outline:medium none invert;overflow:visible;padding:0;position:static;quotes:\"\" \"\";right:auto;table-layout:auto;text-align:inherit;text-decoration:inherit;text-indent:0;text-transform:none;top:auto;unicode-bidi:normal;vertical-align:baseline;visibility:inherit;white-space:normal;width:auto;word-spacing:normal;z-index:auto;background-origin:padding-box;background-clip:border-box;background-size:auto;-o-border-image:none;border-image:none;border-radius:0;box-shadow:none;box-sizing:content-box;-webkit-column-count:auto;-moz-column-count:auto;column-count:auto;-webkit-column-gap:normal;-moz-column-gap:normal;column-gap:normal;-webkit-column-rule:medium none #000;-moz-column-rule:medium none #000;column-rule:medium none #000;-webkit-column-span:1;-moz-column-span:1;column-span:1;-webkit-column-width:auto;-moz-column-width:auto;column-width:auto;font-feature-settings:normal;overflow-x:visible;overflow-y:visible;-webkit-hyphens:manual;-moz-hyphens:manual;hyphens:manual;-webkit-perspective:none;-ms-perspective:none;-o-perspective:none;perspective:none;-webkit-perspective-origin:50% 50%;-ms-perspective-origin:50% 50%;-o-perspective-origin:50% 50%;perspective-origin:50% 50%;-webkit-backface-visibility:visible;backface-visibility:visible;text-shadow:none;-webkit-transition:all 0s ease 0s;transition:all 0s ease 0s;-webkit-transform:none;transform:none;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform-style:flat;transform-style:flat;word-break:normal}.cleanslate,.cleanslate address,.cleanslate article,.cleanslate audio,.cleanslate blockquote,.cleanslate caption,.cleanslate colgroup,.cleanslate dd,.cleanslate dialog,.cleanslate div,.cleanslate dl,.cleanslate dt,.cleanslate fieldset,.cleanslate figure,.cleanslate footer,.cleanslate form,.cleanslate h1,.cleanslate h2,.cleanslate h3,.cleanslate h4,.cleanslate h5,.cleanslate h6,.cleanslate header,.cleanslate hgroup,.cleanslate hr,.cleanslate main,.cleanslate menu,.cleanslate nav,.cleanslate ol,.cleanslate option,.cleanslate p,.cleanslate pre,.cleanslate progress,.cleanslate section,.cleanslate summary,.cleanslate ul,.cleanslate video{display:block}.cleanslate h1,.cleanslate h2,.cleanslate h3,.cleanslate h4,.cleanslate h5,.cleanslate h6{font-weight:700}.cleanslate h1{font-size:2em;padding:.67em 0}.cleanslate h2{font-size:1.5em;padding:.83em 0}.cleanslate h3{font-size:1.17em;padding:.83em 0}.cleanslate h4{font-size:1em}.cleanslate h5{font-size:.83em}.cleanslate p{margin:1em 0}.cleanslate table{display:table}.cleanslate thead{display:table-header-group}.cleanslate tbody{display:table-row-group}.cleanslate tfoot{display:table-footer-group}.cleanslate tr{display:table-row}.cleanslate td,.cleanslate th{display:table-cell;padding:2px}.cleanslate ol,.cleanslate ul{margin:1em 0}.cleanslate ol li,.cleanslate ol ol li,.cleanslate ol ol ol li,.cleanslate ol ol ul li,.cleanslate ol ul ul li,.cleanslate ul li,.cleanslate ul ol ol li,.cleanslate ul ul li,.cleanslate ul ul ol li,.cleanslate ul ul ul li{list-style-position:inside;margin-top:.08em}.cleanslate ol ol,.cleanslate ol ol ol,.cleanslate ol ol ul,.cleanslate ol ul,.cleanslate ol ul ul,.cleanslate ul ol,.cleanslate ul ol ol,.cleanslate ul ul,.cleanslate ul ul ol,.cleanslate ul ul ul{padding-left:40px;margin:0}.cleanslate nav ol,.cleanslate nav ul{list-style-type:none}.cleanslate menu,.cleanslate ul{list-style-type:disc}.cleanslate ol{list-style-type:decimal}.cleanslate menu menu,.cleanslate menu ul,.cleanslate ol menu,.cleanslate ol ul,.cleanslate ul menu,.cleanslate ul ul{list-style-type:circle}.cleanslate menu menu menu,.cleanslate menu menu ul,.cleanslate menu ol menu,.cleanslate menu ol ul,.cleanslate menu ul menu,.cleanslate menu ul ul,.cleanslate ol menu menu,.cleanslate ol menu ul,.cleanslate ol ol menu,.cleanslate ol ol ul,.cleanslate ol ul menu,.cleanslate ol ul ul,.cleanslate ul menu menu,.cleanslate ul menu ul,.cleanslate ul ol menu,.cleanslate ul ol ul,.cleanslate ul ul menu,.cleanslate ul ul ul{list-style-type:square}.cleanslate li{display:list-item;min-height:auto;min-width:auto;padding-left:20px}.cleanslate strong{font-weight:700}.cleanslate em{font-style:italic}.cleanslate code,.cleanslate kbd,.cleanslate samp{font-family:monospace}.cleanslate a{color:blue;text-decoration:underline}.cleanslate a:visited{color:#529}.cleanslate a,.cleanslate a *,.cleanslate input[type=checkbox],.cleanslate input[type=radio],.cleanslate input[type=submit],.cleanslate select{cursor:pointer}.cleanslate button,.cleanslate input[type=submit]{text-align:center;padding:2px 6px 3px;border-radius:4px;text-decoration:none;font-family:arial,helvetica,sans-serif;font-size:small;-webkit-appearance:push-button;color:buttontext;border:1px solid #a6a6a6;background:#d3d3d3;background:#fff;background:-webkit-gradient(linear,left top,left bottom,color-stop(0,#fff),color-stop(100%,#ddd),color-stop(100%,#d1d1d1),color-stop(100%,#ddd));background:-webkit-linear-gradient(top,#fff,#ddd 100%,#d1d1d1 0,#ddd 0);background:linear-gradient(180deg,#fff 0,#ddd 100%,#d1d1d1 0,#ddd 0);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff',endColorstr='#dddddd',GradientType=0);-o-box-shadow:1px 1px 0 #eee;box-shadow:1px 1px 0 #eee;outline:initial}.cleanslate button{padding:1px 6px 2px;margin-right:5px}.cleanslate input[type=hidden]{display:none}.cleanslate textarea{-webkit-appearance:textarea;background:#fff;padding:2px;margin-left:4px;word-wrap:break-word;white-space:pre-wrap;font-size:11px;font-family:arial,helvetica,sans-serif;line-height:13px;resize:both}.cleanslate input,.cleanslate select,.cleanslate textarea{border:1px solid #ccc}.cleanslate select{font-size:11px;font-family:helvetica,arial,sans-serif;display:inline-block}.cleanslate input:focus,.cleanslate textarea:focus{outline:5px auto -webkit-focus-ring-color;outline:initial}.cleanslate input[type=text]{background:#fff;padding:1px;font-family:initial;font-size:small}.cleanslate input[type=checkbox],.cleanslate input[type=radio]{border:1px solid #2b2b2b;border-radius:4px;outline:intial}.cleanslate input[type=radio]{margin:2px 2px 3px}.cleanslate button:active,.cleanslate input[type=submit]:active{background:#3b679e;background:-webkit-gradient(linear,left top,left bottom,color-stop(0,#3b679e),color-stop(50%,#2b88d9),color-stop(51%,#207cca),color-stop(100%,#7db9e8));background:-webkit-linear-gradient(top,#3b679e,#2b88d9 50%,#207cca 51%,#7db9e8);background:linear-gradient(180deg,#3b679e 0,#2b88d9 50%,#207cca 51%,#7db9e8);border-color:#5259b0}.cleanslate abbr[title],.cleanslate acronym[title],.cleanslate dfn[title]{cursor:help;border-bottom-width:1px;border-bottom-style:dotted}.cleanslate ins{background-color:#ff9;color:#000}.cleanslate del{text-decoration:line-through}.cleanslate blockquote,.cleanslate q{quotes:none}.cleanslate blockquote:after,.cleanslate blockquote:before,.cleanslate li:after,.cleanslate li:before,.cleanslate q:after,.cleanslate q:before{content:\"\"}.cleanslate input,.cleanslate select{vertical-align:middle}.cleanslate table{border-collapse:collapse;border-spacing:0}.cleanslate hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0}.cleanslate [dir=rtl]{direction:rtl}.cleanslate mark{background-color:#ff9;color:#000;font-style:italic;font-weight:700}.cleanslate menu{padding-left:40px;padding-top:8px}.cleanslate [hidden],.cleanslate template{display:none}.cleanslate abbr[title]{border-bottom:1px dotted}.cleanslate sub,.cleanslate sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}.cleanslate sup{top:-.5em}.cleanslate sub{bottom:-.25em}.cleanslate img{border:0}.cleanslate figure{margin:0}.cleanslate textarea{overflow:auto;vertical-align:top}.cleanslate{font-size:medium;line-height:1;direction:ltr;text-align:left;text-align:start;font-family:Times New Roman,Times,serif;color:#000;font-style:normal;font-weight:400;text-decoration:none;list-style-type:disc}#context2-panel-wrapper{position:fixed;top:0;padding:0 0 0 3px;height:100%;background:grey;cursor:col-resize;-ms-box-shadow:-2px 2px 13px rgba(50,50,50,.5);box-shadow:-2px 2px 13px rgba(50,50,50,.5);z-index:1999999999;-webkit-transition:.3s all linear;transition:.3s all linear}#context2-panel-wrapper.context2-resized{-webkit-transition:none;transition:none}#context2-panel-wrapper.context2-dragged{-webkit-transition:.3s opacity linear;transition:.3s opacity linear;opacity:.4}#context2-inner-shutter,#context2-outer-shutter{position:fixed;top:0;width:100%;height:100%}#context2-frame{position:relative;height:100%;width:100%;cursor:default;background:#fff;border:0}#context2-panel-toggle-label{display:block;position:absolute;left:-29px;width:20px;background:#fff;color:grey;font-size:larger;margin:0;vertical-align:central;text-align:center;font-family:Arial;font-size:medium;padding:10px 7px 10px 3px;border:solid grey;border-top-width:3px;border-left-width:3px;border-bottom-width:3px;border-right-width:0;border-top-left-radius:6px;border-bottom-left-radius:6px;-ms-box-shadow:-2px 2px 13px rgba(50,50,50,.5);box-shadow:-2px 2px 13px rgba(50,50,50,.5);cursor:pointer}#context2-panel-toggle-label>b{width:16px;height:16px;display:block;margin-bottom:6px;color:green;font-size:16px;font-weight:700;line-height:16px;text-align:center;cursor:pointer}#context2-panel-toggle-label>i{height:20px;background-size:20px;background-repeat:no-repeat;background-position:0 0;display:block;cursor:pointer;padding-bottom:5px}#context2-panel-toggle-label>span{display:block;cursor:pointer;white-space:nowrap;transform:rotate(-90deg)}#context2-panel-toggle-label>div{-webkit-transition:.9s all;transition:.9s all;cursor:pointer;margin-left:-4px;margin-top:5px}#context2-panel-toggle-checkbox{display:none}#context2-panel-toggle-checkbox:checked~#context2-panel-wrapper{right:0!important}#context2-panel-toggle-checkbox:checked~#context2-panel-wrapper>#context2-panel-toggle-label>div{-webkit-transform:rotate(180deg);transform:rotate(180deg)}"));

(function () {
    "use strict";
    if (!Event.prototype.preventDefault) {
        Event.prototype.preventDefault = function () {
            this.returnValue = false;
        };
    }
    if (!Event.prototype.stopPropagation) {
        Event.prototype.stopPropagation = function () {
            this.cancelBubble = true;
        };
    }
    if (!Element.prototype.addEventListener) {
        var eventListeners = [];

        var addEventListener = function (type, listener /*, useCapture (will be ignored) */) {
            var self = this;
            var wrapper = function (e) {
                e.target = e.srcElement;
                e.currentTarget = self;
                if (typeof listener.handleEvent != 'undefined') {
                    listener.handleEvent(e);
                } else {
                    listener.call(self, e);
                }
            };
            if (type == "DOMContentLoaded") {
                var wrapper2 = function (e) {
                    if (document.readyState == "complete") {
                        wrapper(e);
                    }
                };
                document.attachEvent("onreadystatechange", wrapper2);
                eventListeners.push({ object: this, type: type, listener: listener, wrapper: wrapper2 });

                if (document.readyState == "complete") {
                    var e = new Event();
                    e.srcElement = window;
                    wrapper2(e);
                }
            } else {
                this.attachEvent("on" + type, wrapper);
                eventListeners.push({ object: this, type: type, listener: listener, wrapper: wrapper });
            }
        };
        var removeEventListener = function (type, listener /*, useCapture (will be ignored) */) {
            var counter = 0;
            while (counter < eventListeners.length) {
                var eventListener = eventListeners[counter];
                if (eventListener.object == this && eventListener.type == type && eventListener.listener == listener) {
                    if (type == "DOMContentLoaded") {
                        this.detachEvent("onreadystatechange", eventListener.wrapper);
                    } else {
                        this.detachEvent("on" + type, eventListener.wrapper);
                    }
                    eventListeners.splice(counter, 1);
                    break;
                }
                ++counter;
            }
        };
        Element.prototype.addEventListener = addEventListener;
        Element.prototype.removeEventListener = removeEventListener;
        if (HTMLDocument) {
            HTMLDocument.prototype.addEventListener = addEventListener;
            HTMLDocument.prototype.removeEventListener = removeEventListener;
        }
        if (Window) {
            Window.prototype.addEventListener = addEventListener;
            Window.prototype.removeEventListener = removeEventListener;
        }
    }
})();
function sharedConfig() {
    "use strict";
    return {
        language: 'en',
        avialableUI: ['en', 'ru'],
        frameReadyMessageData: 'context2-frameready',
        frameCloseMessageData: 'context2-frameclose',
        chromeExtensionName: 'contextcomment',
        chromeExtensionId: 'ngplihjnnmnmhalcelmeojjedmmbhpan'
    }
}
function config(sharedConfig) {
    "use strict";
    var cfg = sharedConfig;

    cfg.context2Url = 'https://context2.com/';
    //cfg.context2Url = 'http://localhost:2341/';
    cfg.container = null;
    cfg.theme = '';
    cfg.method = 'sidepanel';//sidepanel, embedded
    cfg.height = '500px';
    cfg.getThreadsCountUrl = 'api/Thread/GetThreadsCount';
    cfg.getStopWordsUrl = 'api/StopWords/Get';
    cfg.panelWidthLocalStorageKey = 'context2-panel-width';
    cfg.stopWordsLocalStorageKeyPrefix = 'context2-stopwords-';
    cfg.stopWordsLastUpdateLocalStorageKeyPrefix = 'context2-stopwords-last-update-';
    cfg.stopWordsCacheTimeout = 1000 * 60 * 60 * 24;
    cfg.openPanelButtonWidth = 33;
    cfg.panelWrapperId = 'context2-panel-wrapper';
    cfg.panelToggleCheckBoxId = 'context2-panel-toggle-checkbox';
    cfg.position = 'middle';
    cfg.marginTop = '';
    cfg.marginBottom = '';
    cfg.content = 'Comments2';
    cfg.mobilePosition = 'middle';
    cfg.mobileMarginTop = '';
    cfg.mobileMarginBottom = '';
    cfg.mobileContent = '';
    cfg.panelBorderWidth = 3;
    cfg.frameId = 'context2-frame';
    cfg.panelDraggedClass = 'context2-dragged';
    cfg.outerShutterId = 'context2-outer-shutter';
    cfg.innerShutterId = 'context2-inner-shutter';
    cfg.panelResizedClass = 'context2-resized';
    cfg.panelToggleLabelId = 'context2-panel-toggle-label';
    cfg.defaultPanelWidth = 0.4;
    cfg.cleanClass = 'cleanslate';
    cfg.postWordsCount = 15;
    cfg.extractDefaultOptions = {
        atLeast: 2, // Show results with at least .. occurrences
        numWords: 3, // Show statistics for one to .. words
        top: 0,
        ignoreCase: true, // Case-sensitivity
        useTitle: true, // use document.title in calculation
        weght: { // weight for text in specific tags
            title: 64,
            h1: 64,
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
        stopWords: ['-', '/', '|', '\\', '–', '→', '–'], // place here addition stopwords for merge with langs
    };
    cfg.stopWordsLangs = {// https://github.com/6/stopwords
        //"da": ["af", "alle", "andet", "andre", "at", "begge", "da", "de", "den", "denne", "der", "deres", "det", "dette", "dig", "din", "dog", "du", "ej", "eller", "en", "end", "ene", "eneste", "enhver", "et", "fem", "fire", "flere", "fleste", "for", "fordi", "forrige", "fra", "få", "før", "god", "han", "hans", "har", "hendes", "her", "hun", "hvad", "hvem", "hver", "hvilken", "hvis", "hvor", "hvordan", "hvorfor", "hvornår", "i", "ikke", "ind", "ingen", "intet", "jeg", "jeres", "kan", "kom", "kommer", "lav", "lidt", "lille", "man", "mand", "mange", "med", "meget", "men", "mens", "mere", "mig", "ned", "ni", "nogen", "noget", "ny", "nyt", "nær", "næste", "næsten", "og", "op", "otte", "over", "på", "se", "seks", "ses", "som", "stor", "store", "syv", "ti", "til", "to", "tre", "ud", "var"],
        //"de": ["Ernst", "Ordnung", "Schluss", "a", "ab", "aber", "ach", "acht", "achte", "achten", "achter", "achtes", "ag", "alle", "allein", "allem", "allen", "aller", "allerdings", "alles", "allgemeinen", "als", "also", "am", "an", "andere", "anderen", "andern", "anders", "au", "auch", "auf", "aus", "ausser", "ausserdem", "außer", "außerdem", "b", "bald", "bei", "beide", "beiden", "beim", "beispiel", "bekannt", "bereits", "besonders", "besser", "besten", "bin", "bis", "bisher", "bist", "c", "d", "d.h", "da", "dabei", "dadurch", "dafür", "dagegen", "daher", "dahin", "dahinter", "damals", "damit", "danach", "daneben", "dank", "dann", "daran", "darauf", "daraus", "darf", "darfst", "darin", "darum", "darunter", "darüber", "das", "dasein", "daselbst", "dass", "dasselbe", "davon", "davor", "dazu", "dazwischen", "daß", "dein", "deine", "deinem", "deiner", "dem", "dementsprechend", "demgegenüber", "demgemäss", "demgemäß", "demselben", "demzufolge", "den", "denen", "denn", "denselben", "der", "deren", "derjenige", "derjenigen", "dermassen", "dermaßen", "derselbe", "derselben", "des", "deshalb", "desselben", "dessen", "deswegen", "dich", "die", "diejenige", "diejenigen", "dies", "diese", "dieselbe", "dieselben", "diesem", "diesen", "dieser", "dieses", "dir", "doch", "dort", "drei", "drin", "dritte", "dritten", "dritter", "drittes", "du", "durch", "durchaus", "durfte", "durften", "dürfen", "dürft", "e", "eben", "ebenso", "ehrlich", "ei", "ei,", "eigen", "eigene", "eigenen", "eigener", "eigenes", "ein", "einander", "eine", "einem", "einen", "einer", "eines", "einige", "einigen", "einiger", "einiges", "einmal", "eins", "elf", "en", "ende", "endlich", "entweder", "er", "erst", "erste", "ersten", "erster", "erstes", "es", "etwa", "etwas", "euch", "euer", "eure", "f", "folgende", "früher", "fünf", "fünfte", "fünften", "fünfter", "fünftes", "für", "g", "gab", "ganz", "ganze", "ganzen", "ganzer", "ganzes", "gar", "gedurft", "gegen", "gegenüber", "gehabt", "gehen", "geht", "gekannt", "gekonnt", "gemacht", "gemocht", "gemusst", "genug", "gerade", "gern", "gesagt", "geschweige", "gewesen", "gewollt", "geworden", "gibt", "ging", "gleich", "gott", "gross", "grosse", "grossen", "grosser", "grosses", "groß", "große", "großen", "großer", "großes", "gut", "gute", "guter", "gutes", "h", "habe", "haben", "habt", "hast", "hat", "hatte", "hatten", "hattest", "hattet", "heisst", "her", "heute", "hier", "hin", "hinter", "hoch", "hätte", "hätten", "i", "ich", "ihm", "ihn", "ihnen", "ihr", "ihre", "ihrem", "ihren", "ihrer", "ihres", "im", "immer", "in", "indem", "infolgedessen", "ins", "irgend", "ist", "j", "ja", "jahr", "jahre", "jahren", "je", "jede", "jedem", "jeden", "jeder", "jedermann", "jedermanns", "jedes", "jedoch", "jemand", "jemandem", "jemanden", "jene", "jenem", "jenen", "jener", "jenes", "jetzt", "k", "kam", "kann", "kannst", "kaum", "kein", "keine", "keinem", "keinen", "keiner", "kleine", "kleinen", "kleiner", "kleines", "kommen", "kommt", "konnte", "konnten", "kurz", "können", "könnt", "könnte", "l", "lang", "lange", "leicht", "leide", "lieber", "los", "m", "machen", "macht", "machte", "mag", "magst", "mahn", "mal", "man", "manche", "manchem", "manchen", "mancher", "manches", "mann", "mehr", "mein", "meine", "meinem", "meinen", "meiner", "meines", "mensch", "menschen", "mich", "mir", "mit", "mittel", "mochte", "mochten", "morgen", "muss", "musst", "musste", "mussten", "muß", "mußt", "möchte", "mögen", "möglich", "mögt", "müssen", "müsst", "müßt", "n", "na", "nach", "nachdem", "nahm", "natürlich", "neben", "nein", "neue", "neuen", "neun", "neunte", "neunten", "neunter", "neuntes", "nicht", "nichts", "nie", "niemand", "niemandem", "niemanden", "noch", "nun", "nur", "o", "ob", "oben", "oder", "offen", "oft", "ohne", "p", "q", "r", "recht", "rechte", "rechten", "rechter", "rechtes", "richtig", "rund", "s", "sa", "sache", "sagt", "sagte", "sah", "satt", "schlecht", "schon", "sechs", "sechste", "sechsten", "sechster", "sechstes", "sehr", "sei", "seid", "seien", "sein", "seine", "seinem", "seinen", "seiner", "seines", "seit", "seitdem", "selbst", "sich", "sie", "sieben", "siebente", "siebenten", "siebenter", "siebentes", "sind", "so", "solang", "solche", "solchem", "solchen", "solcher", "solches", "soll", "sollen", "sollst", "sollt", "sollte", "sollten", "sondern", "sonst", "soweit", "sowie", "später", "startseite", "statt", "steht", "suche", "t", "tag", "tage", "tagen", "tat", "teil", "tel", "tritt", "trotzdem", "tun", "u", "uhr", "um", "und", "und?", "uns", "unser", "unsere", "unserer", "unter", "v", "vergangenen", "viel", "viele", "vielem", "vielen", "vielleicht", "vier", "vierte", "vierten", "vierter", "viertes", "vom", "von", "vor", "w", "wahr?", "wann", "war", "waren", "wart", "warum", "was", "wegen", "weil", "weit", "weiter", "weitere", "weiteren", "weiteres", "welche", "welchem", "welchen", "welcher", "welches", "wem", "wen", "wenig", "wenige", "weniger", "weniges", "wenigstens", "wenn", "wer", "werde", "werden", "werdet", "weshalb", "wessen", "wie", "wieder", "wieso", "will", "willst", "wir", "wird", "wirklich", "wirst", "wissen", "wo", "wohl", "wollen", "wollt", "wollte", "wollten", "worden", "wurde", "wurden", "während", "währenddem", "währenddessen", "wäre", "würde", "würden", "x", "y", "z", "z.b", "zehn", "zehnte", "zehnten", "zehnter", "zehntes", "zeit", "zu", "zuerst", "zugleich", "zum", "zunächst", "zur", "zurück", "zusammen", "zwanzig", "zwar", "zwei", "zweite", "zweiten", "zweiter", "zweites", "zwischen", "zwölf", "über", "überhaupt", "übrigens"],
        //"ee": ["aga", "ei", "et", "ja", "jah", "kas", "kui", "kõik", "ma", "me", "mida", "midagi", "mind", "minu", "mis", "mu", "mul", "mulle", "nad", "nii", "oled", "olen", "oli", "oma", "on", "pole", "sa", "seda", "see", "selle", "siin", "siis", "ta", "te", "ära"],
        //"es": ["a", "actualmente", "acuerdo", "adelante", "ademas", "además", "adrede", "afirmó", "agregó", "ahi", "ahora", "ahí", "al", "algo", "alguna", "algunas", "alguno", "algunos", "algún", "alli", "allí", "alrededor", "ambos", "ampleamos", "antano", "antaño", "ante", "anterior", "antes", "apenas", "aproximadamente", "aquel", "aquella", "aquellas", "aquello", "aquellos", "aqui", "aquél", "aquélla", "aquéllas", "aquéllos", "aquí", "arriba", "arribaabajo", "aseguró", "asi", "así", "atras", "aun", "aunque", "ayer", "añadió", "aún", "b", "bajo", "bastante", "bien", "breve", "buen", "buena", "buenas", "bueno", "buenos", "c", "cada", "casi", "cerca", "cierta", "ciertas", "cierto", "ciertos", "cinco", "claro", "comentó", "como", "con", "conmigo", "conocer", "conseguimos", "conseguir", "considera", "consideró", "consigo", "consigue", "consiguen", "consigues", "contigo", "contra", "cosas", "creo", "cual", "cuales", "cualquier", "cuando", "cuanta", "cuantas", "cuanto", "cuantos", "cuatro", "cuenta", "cuál", "cuáles", "cuándo", "cuánta", "cuántas", "cuánto", "cuántos", "cómo", "d", "da", "dado", "dan", "dar", "de", "debajo", "debe", "deben", "debido", "decir", "dejó", "del", "delante", "demasiado", "demás", "dentro", "deprisa", "desde", "despacio", "despues", "después", "detras", "detrás", "dia", "dias", "dice", "dicen", "dicho", "dieron", "diferente", "diferentes", "dijeron", "dijo", "dio", "donde", "dos", "durante", "día", "días", "dónde", "e", "ejemplo", "el", "ella", "ellas", "ello", "ellos", "embargo", "empleais", "emplean", "emplear", "empleas", "empleo", "en", "encima", "encuentra", "enfrente", "enseguida", "entonces", "entre", "era", "eramos", "eran", "eras", "eres", "es", "esa", "esas", "ese", "eso", "esos", "esta", "estaba", "estaban", "estado", "estados", "estais", "estamos", "estan", "estar", "estará", "estas", "este", "esto", "estos", "estoy", "estuvo", "está", "están", "ex", "excepto", "existe", "existen", "explicó", "expresó", "f", "fin", "final", "fue", "fuera", "fueron", "fui", "fuimos", "g", "general", "gran", "grandes", "gueno", "h", "ha", "haber", "habia", "habla", "hablan", "habrá", "había", "habían", "hace", "haceis", "hacemos", "hacen", "hacer", "hacerlo", "haces", "hacia", "haciendo", "hago", "han", "hasta", "hay", "haya", "he", "hecho", "hemos", "hicieron", "hizo", "horas", "hoy", "hubo", "i", "igual", "incluso", "indicó", "informo", "informó", "intenta", "intentais", "intentamos", "intentan", "intentar", "intentas", "intento", "ir", "j", "junto", "k", "l", "la", "lado", "largo", "las", "le", "lejos", "les", "llegó", "lleva", "llevar", "lo", "los", "luego", "lugar", "m", "mal", "manera", "manifestó", "mas", "mayor", "me", "mediante", "medio", "mejor", "mencionó", "menos", "menudo", "mi", "mia", "mias", "mientras", "mio", "mios", "mis", "misma", "mismas", "mismo", "mismos", "modo", "momento", "mucha", "muchas", "mucho", "muchos", "muy", "más", "mí", "mía", "mías", "mío", "míos", "n", "nada", "nadie", "ni", "ninguna", "ningunas", "ninguno", "ningunos", "ningún", "no", "nos", "nosotras", "nosotros", "nuestra", "nuestras", "nuestro", "nuestros", "nueva", "nuevas", "nuevo", "nuevos", "nunca", "o", "ocho", "os", "otra", "otras", "otro", "otros", "p", "pais", "para", "parece", "parte", "partir", "pasada", "pasado", "paìs", "peor", "pero", "pesar", "poca", "pocas", "poco", "pocos", "podeis", "podemos", "poder", "podria", "podriais", "podriamos", "podrian", "podrias", "podrá", "podrán", "podría", "podrían", "poner", "por", "porque", "posible", "primer", "primera", "primero", "primeros", "principalmente", "pronto", "propia", "propias", "propio", "propios", "proximo", "próximo", "próximos", "pudo", "pueda", "puede", "pueden", "puedo", "pues", "q", "qeu", "que", "quedó", "queremos", "quien", "quienes", "quiere", "quiza", "quizas", "quizá", "quizás", "quién", "quiénes", "qué", "r", "raras", "realizado", "realizar", "realizó", "repente", "respecto", "s", "sabe", "sabeis", "sabemos", "saben", "saber", "sabes", "salvo", "se", "sea", "sean", "segun", "segunda", "segundo", "según", "seis", "ser", "sera", "será", "serán", "sería", "señaló", "si", "sido", "siempre", "siendo", "siete", "sigue", "siguiente", "sin", "sino", "sobre", "sois", "sola", "solamente", "solas", "solo", "solos", "somos", "son", "soy", "soyos", "su", "supuesto", "sus", "suya", "suyas", "suyo", "sé", "sí", "sólo", "t", "tal", "tambien", "también", "tampoco", "tan", "tanto", "tarde", "te", "temprano", "tendrá", "tendrán", "teneis", "tenemos", "tener", "tenga", "tengo", "tenido", "tenía", "tercera", "ti", "tiempo", "tiene", "tienen", "toda", "todas", "todavia", "todavía", "todo", "todos", "total", "trabaja", "trabajais", "trabajamos", "trabajan", "trabajar", "trabajas", "trabajo", "tras", "trata", "través", "tres", "tu", "tus", "tuvo", "tuya", "tuyas", "tuyo", "tuyos", "tú", "u", "ultimo", "un", "una", "unas", "uno", "unos", "usa", "usais", "usamos", "usan", "usar", "usas", "uso", "usted", "ustedes", "v", "va", "vais", "valor", "vamos", "van", "varias", "varios", "vaya", "veces", "ver", "verdad", "verdadera", "verdadero", "vez", "vosotras", "vosotros", "voy", "vuestra", "vuestras", "vuestro", "vuestros", "w", "x", "y", "ya", "yo", "z", "él", "ésa", "ésas", "ése", "ésos", "ésta", "éstas", "éste", "éstos", "última", "últimas", "último", "últimos"],
        //"fi": ["aiemmin", "aika", "aikaa", "aikaan", "aikaisemmin", "aikaisin", "aikajen", "aikana", "aikoina", "aikoo", "aikovat", "aina", "ainakaan", "ainakin", "ainoa", "ainoat", "aiomme", "aion", "aiotte", "aist", "aivan", "ajan", "alas", "alemmas", "alkuisin", "alkuun", "alla", "alle", "aloitamme", "aloitan", "aloitat", "aloitatte", "aloitattivat", "aloitettava", "aloitettevaksi", "aloitettu", "aloitimme", "aloitin", "aloitit", "aloititte", "aloittaa", "aloittamatta", "aloitti", "aloittivat", "alta", "aluksi", "alussa", "alusta", "annettavaksi", "annetteva", "annettu", "ansiosta", "antaa", "antamatta", "antoi", "aoua", "apu", "asia", "asiaa", "asian", "asiasta", "asiat", "asioiden", "asioihin", "asioita", "asti", "avuksi", "avulla", "avun", "avutta", "edelle", "edelleen", "edellä", "edeltä", "edemmäs", "edes", "edessä", "edestä", "ehkä", "ei", "eikä", "eilen", "eivät", "eli", "ellei", "elleivät", "ellemme", "ellen", "ellet", "ellette", "emme", "en", "enemmän", "eniten", "ennen", "ensi", "ensimmäinen", "ensimmäiseksi", "ensimmäisen", "ensimmäisenä", "ensimmäiset", "ensimmäisiksi", "ensimmäisinä", "ensimmäisiä", "ensimmäistä", "ensin", "entinen", "entisen", "entisiä", "entisten", "entistä", "enää", "eri", "erittäin", "erityisesti", "eräiden", "eräs", "eräät", "esi", "esiin", "esillä", "esimerkiksi", "et", "eteen", "etenkin", "etessa", "ette", "ettei", "että", "haikki", "halua", "haluaa", "haluamatta", "haluamme", "haluan", "haluat", "haluatte", "haluavat", "halunnut", "halusi", "halusimme", "halusin", "halusit", "halusitte", "halusivat", "halutessa", "haluton", "he", "hei", "heidän", "heihin", "heille", "heiltä", "heissä", "heistä", "heitä", "helposti", "heti", "hetkellä", "hieman", "hitaasti", "hoikein", "huolimatta", "huomenna", "hyvien", "hyviin", "hyviksi", "hyville", "hyviltä", "hyvin", "hyvinä", "hyvissä", "hyvistä", "hyviä", "hyvä", "hyvät", "hyvää", "hän", "häneen", "hänelle", "hänellä", "häneltä", "hänen", "hänessä", "hänestä", "hänet", "ihan", "ilman", "ilmeisesti", "itse", "itsensä", "itseään", "ja", "jo", "johon", "joiden", "joihin", "joiksi", "joilla", "joille", "joilta", "joissa", "joista", "joita", "joka", "jokainen", "jokin", "joko", "joku", "jolla", "jolle", "jolloin", "jolta", "jompikumpi", "jonka", "jonkin", "jonne", "joo", "jopa", "jos", "joskus", "jossa", "josta", "jota", "jotain", "joten", "jotenkin", "jotenkuten", "jotka", "jotta", "jouduimme", "jouduin", "jouduit", "jouduitte", "joudumme", "joudun", "joudutte", "joukkoon", "joukossa", "joukosta", "joutua", "joutui", "joutuivat", "joutumaan", "joutuu", "joutuvat", "juuri", "jälkeen", "jälleen", "jää", "kahdeksan", "kahdeksannen", "kahdella", "kahdelle", "kahdelta", "kahden", "kahdessa", "kahdesta", "kahta", "kahteen", "kai", "kaiken", "kaikille", "kaikilta", "kaikkea", "kaikki", "kaikkia", "kaikkiaan", "kaikkialla", "kaikkialle", "kaikkialta", "kaikkien", "kaikkin", "kaksi", "kannalta", "kannattaa", "kanssa", "kanssaan", "kanssamme", "kanssani", "kanssanne", "kanssasi", "kauan", "kauemmas", "kaukana", "kautta", "kehen", "keiden", "keihin", "keiksi", "keille", "keillä", "keiltä", "keinä", "keissä", "keistä", "keitten", "keittä", "keitä", "keneen", "keneksi", "kenelle", "kenellä", "keneltä", "kenen", "kenenä", "kenessä", "kenestä", "kenet", "kenettä", "kennessästä", "kenties", "kerran", "kerta", "kertaa", "keskellä", "kesken", "keskimäärin", "ketkä", "ketä", "kiitos", "kohti", "koko", "kokonaan", "kolmas", "kolme", "kolmen", "kolmesti", "koska", "koskaan", "kovin", "kuin", "kuinka", "kuinkan", "kuitenkaan", "kuitenkin", "kuka", "kukaan", "kukin", "kukka", "kumpainen", "kumpainenkaan", "kumpi", "kumpikaan", "kumpikin", "kun", "kuten", "kuuden", "kuusi", "kuutta", "kylliksi", "kyllä", "kymmenen", "kyse", "liian", "liki", "lisäksi", "lisää", "lla", "luo", "luona", "lähekkäin", "lähelle", "lähellä", "läheltä", "lähemmäs", "lähes", "lähinnä", "lähtien", "läpi", "mahdollisimman", "mahdollista", "me", "meidän", "meille", "meillä", "melkein", "melko", "menee", "meneet", "menemme", "menen", "menet", "menette", "menevät", "meni", "menimme", "menin", "menit", "menivät", "mennessä", "mennyt", "menossa", "mihin", "mikin", "miksi", "mikä", "mikäli", "mikään", "milloin", "milloinkan", "minne", "minun", "minut", "minä", "missä", "mistä", "miten", "mitä", "mitään", "moi", "molemmat", "mones", "monesti", "monet", "moni", "moniaalla", "moniaalle", "moniaalta", "monta", "muassa", "muiden", "muita", "muka", "mukaan", "mukaansa", "mukana", "mutta", "muu", "muualla", "muualle", "muualta", "muuanne", "muulloin", "muun", "muut", "muuta", "muutama", "muutaman", "muuten", "myöhemmin", "myös", "myöskin", "myöskään", "myötä", "ne", "neljä", "neljän", "neljää", "niiden", "niin", "niistä", "niitä", "noin", "nopeammin", "nopeasti", "nopeiten", "nro", "nuo", "nyt", "näiden", "näin", "näissä", "näissähin", "näissälle", "näissältä", "näissästä", "näitä", "nämä", "ohi", "oikea", "oikealla", "oikein", "ole", "olemme", "olen", "olet", "olette", "oleva", "olevan", "olevat", "oli", "olimme", "olin", "olisi", "olisimme", "olisin", "olisit", "olisitte", "olisivat", "olit", "olitte", "olivat", "olla", "olleet", "olli", "ollut", "oma", "omaa", "omaan", "omaksi", "omalle", "omalta", "oman", "omassa", "omat", "omia", "omien", "omiin", "omiksi", "omille", "omilta", "omissa", "omista", "on", "onkin", "onko", "ovat", "paikoittain", "paitsi", "pakosti", "paljon", "paremmin", "parempi", "parhaillaan", "parhaiten", "perusteella", "peräti", "pian", "pieneen", "pieneksi", "pienelle", "pienellä", "pieneltä", "pienempi", "pienestä", "pieni", "pienin", "puolesta", "puolestaan", "päälle", "runsaasti", "saakka", "sadam", "sama", "samaa", "samaan", "samalla", "samallalta", "samallassa", "samallasta", "saman", "samat", "samoin", "sata", "sataa", "satojen", "se", "seitsemän", "sekä", "sen", "seuraavat", "siellä", "sieltä", "siihen", "siinä", "siis", "siitä", "sijaan", "siksi", "silloin", "sillä", "silti", "sinne", "sinua", "sinulle", "sinulta", "sinun", "sinussa", "sinusta", "sinut", "sinä", "sisäkkäin", "sisällä", "siten", "sitten", "sitä", "ssa", "sta", "suoraan", "suuntaan", "suuren", "suuret", "suuri", "suuria", "suurin", "suurten", "taa", "taas", "taemmas", "tahansa", "tai", "takaa", "takaisin", "takana", "takia", "tapauksessa", "tarpeeksi", "tavalla", "tavoitteena", "te", "tietysti", "todella", "toinen", "toisaalla", "toisaalle", "toisaalta", "toiseen", "toiseksi", "toisella", "toiselle", "toiselta", "toisemme", "toisen", "toisensa", "toisessa", "toisesta", "toista", "toistaiseksi", "toki", "tosin", "tuhannen", "tuhat", "tule", "tulee", "tulemme", "tulen", "tulet", "tulette", "tulevat", "tulimme", "tulin", "tulisi", "tulisimme", "tulisin", "tulisit", "tulisitte", "tulisivat", "tulit", "tulitte", "tulivat", "tulla", "tulleet", "tullut", "tuntuu", "tuo", "tuolla", "tuolloin", "tuolta", "tuonne", "tuskin", "tykö", "tähän", "tällä", "tällöin", "tämä", "tämän", "tänne", "tänä", "tänään", "tässä", "tästä", "täten", "tätä", "täysin", "täytyvät", "täytyy", "täällä", "täältä", "ulkopuolella", "usea", "useasti", "useimmiten", "usein", "useita", "uudeksi", "uudelleen", "uuden", "uudet", "uusi", "uusia", "uusien", "uusinta", "uuteen", "uutta", "vaan", "vahemmän", "vai", "vaiheessa", "vaikea", "vaikean", "vaikeat", "vaikeilla", "vaikeille", "vaikeilta", "vaikeissa", "vaikeista", "vaikka", "vain", "varmasti", "varsin", "varsinkin", "varten", "vasen", "vasenmalla", "vasta", "vastaan", "vastakkain", "vastan", "verran", "vielä", "vierekkäin", "vieressä", "vieri", "viiden", "viime", "viimeinen", "viimeisen", "viimeksi", "viisi", "voi", "voidaan", "voimme", "voin", "voisi", "voit", "voitte", "voivat", "vuoden", "vuoksi", "vuosi", "vuosien", "vuosina", "vuotta", "vähemmän", "vähintään", "vähiten", "vähän", "välillä", "yhdeksän", "yhden", "yhdessä", "yhteen", "yhteensä", "yhteydessä", "yhteyteen", "yhtä", "yhtäälle", "yhtäällä", "yhtäältä", "yhtään", "yhä", "yksi", "yksin", "yksittäin", "yleensä", "ylemmäs", "yli", "ylös", "ympäri", "älköön", "älä"],
        //"fr": ["a", "abord", "absolument", "afin", "ah", "ai", "aie", "ailleurs", "ainsi", "ait", "allaient", "allo", "allons", "allô", "alors", "anterieur", "anterieure", "anterieures", "apres", "après", "as", "assez", "attendu", "au", "aucun", "aucune", "aujourd", "aujourd'hui", "aupres", "auquel", "aura", "auraient", "aurait", "auront", "aussi", "autre", "autrefois", "autrement", "autres", "autrui", "aux", "auxquelles", "auxquels", "avaient", "avais", "avait", "avant", "avec", "avoir", "avons", "ayant", "b", "bah", "bas", "basee", "bat", "beau", "beaucoup", "bien", "bigre", "boum", "bravo", "brrr", "c", "car", "ce", "ceci", "cela", "celle", "celle-ci", "celle-là", "celles", "celles-ci", "celles-là", "celui", "celui-ci", "celui-là", "cent", "cependant", "certain", "certaine", "certaines", "certains", "certes", "ces", "cet", "cette", "ceux", "ceux-ci", "ceux-là", "chacun", "chacune", "chaque", "cher", "chers", "chez", "chiche", "chut", "chère", "chères", "ci", "cinq", "cinquantaine", "cinquante", "cinquantième", "cinquième", "clac", "clic", "combien", "comme", "comment", "comparable", "comparables", "compris", "concernant", "contre", "couic", "crac", "d", "da", "dans", "de", "debout", "dedans", "dehors", "deja", "delà", "depuis", "dernier", "derniere", "derriere", "derrière", "des", "desormais", "desquelles", "desquels", "dessous", "dessus", "deux", "deuxième", "deuxièmement", "devant", "devers", "devra", "different", "differentes", "differents", "différent", "différente", "différentes", "différents", "dire", "directe", "directement", "dit", "dite", "dits", "divers", "diverse", "diverses", "dix", "dix-huit", "dix-neuf", "dix-sept", "dixième", "doit", "doivent", "donc", "dont", "douze", "douzième", "dring", "du", "duquel", "durant", "dès", "désormais", "e", "effet", "egale", "egalement", "egales", "eh", "elle", "elle-même", "elles", "elles-mêmes", "en", "encore", "enfin", "entre", "envers", "environ", "es", "est", "et", "etant", "etc", "etre", "eu", "euh", "eux", "eux-mêmes", "exactement", "excepté", "extenso", "exterieur", "f", "fais", "faisaient", "faisant", "fait", "façon", "feront", "fi", "flac", "floc", "font", "g", "gens", "h", "ha", "hein", "hem", "hep", "hi", "ho", "holà", "hop", "hormis", "hors", "hou", "houp", "hue", "hui", "huit", "huitième", "hum", "hurrah", "hé", "hélas", "i", "il", "ils", "importe", "j", "je", "jusqu", "jusque", "juste", "k", "l", "la", "laisser", "laquelle", "las", "le", "lequel", "les", "lesquelles", "lesquels", "leur", "leurs", "longtemps", "lors", "lorsque", "lui", "lui-meme", "lui-même", "là", "lès", "m", "ma", "maint", "maintenant", "mais", "malgre", "malgré", "maximale", "me", "meme", "memes", "merci", "mes", "mien", "mienne", "miennes", "miens", "mille", "mince", "minimale", "moi", "moi-meme", "moi-même", "moindres", "moins", "mon", "moyennant", "multiple", "multiples", "même", "mêmes", "n", "na", "naturel", "naturelle", "naturelles", "ne", "neanmoins", "necessaire", "necessairement", "neuf", "neuvième", "ni", "nombreuses", "nombreux", "non", "nos", "notamment", "notre", "nous", "nous-mêmes", "nouveau", "nul", "néanmoins", "nôtre", "nôtres", "o", "oh", "ohé", "ollé", "olé", "on", "ont", "onze", "onzième", "ore", "ou", "ouf", "ouias", "oust", "ouste", "outre", "ouvert", "ouverte", "ouverts", "o|", "où", "p", "paf", "pan", "par", "parce", "parfois", "parle", "parlent", "parler", "parmi", "parseme", "partant", "particulier", "particulière", "particulièrement", "pas", "passé", "pendant", "pense", "permet", "personne", "peu", "peut", "peuvent", "peux", "pff", "pfft", "pfut", "pif", "pire", "plein", "plouf", "plus", "plusieurs", "plutôt", "possessif", "possessifs", "possible", "possibles", "pouah", "pour", "pourquoi", "pourrais", "pourrait", "pouvait", "prealable", "precisement", "premier", "première", "premièrement", "pres", "probable", "probante", "procedant", "proche", "près", "psitt", "pu", "puis", "puisque", "pur", "pure", "q", "qu", "quand", "quant", "quant-à-soi", "quanta", "quarante", "quatorze", "quatre", "quatre-vingt", "quatrième", "quatrièmement", "que", "quel", "quelconque", "quelle", "quelles", "quelqu'un", "quelque", "quelques", "quels", "qui", "quiconque", "quinze", "quoi", "quoique", "r", "rare", "rarement", "rares", "relative", "relativement", "remarquable", "rend", "rendre", "restant", "reste", "restent", "restrictif", "retour", "revoici", "revoilà", "rien", "s", "sa", "sacrebleu", "sait", "sans", "sapristi", "sauf", "se", "sein", "seize", "selon", "semblable", "semblaient", "semble", "semblent", "sent", "sept", "septième", "sera", "seraient", "serait", "seront", "ses", "seul", "seule", "seulement", "si", "sien", "sienne", "siennes", "siens", "sinon", "six", "sixième", "soi", "soi-même", "soit", "soixante", "son", "sont", "sous", "souvent", "specifique", "specifiques", "speculatif", "stop", "strictement", "subtiles", "suffisant", "suffisante", "suffit", "suis", "suit", "suivant", "suivante", "suivantes", "suivants", "suivre", "superpose", "sur", "surtout", "t", "ta", "tac", "tant", "tardive", "te", "tel", "telle", "tellement", "telles", "tels", "tenant", "tend", "tenir", "tente", "tes", "tic", "tien", "tienne", "tiennes", "tiens", "toc", "toi", "toi-même", "ton", "touchant", "toujours", "tous", "tout", "toute", "toutefois", "toutes", "treize", "trente", "tres", "trois", "troisième", "troisièmement", "trop", "très", "tsoin", "tsouin", "tu", "té", "u", "un", "une", "unes", "uniformement", "unique", "uniques", "uns", "v", "va", "vais", "vas", "vers", "via", "vif", "vifs", "vingt", "vivat", "vive", "vives", "vlan", "voici", "voilà", "vont", "vos", "votre", "vous", "vous-mêmes", "vu", "vé", "vôtre", "vôtres", "w", "x", "y", "z", "zut", "à", "â", "ça", "ès", "étaient", "étais", "était", "étant", "été", "être", "ô"],
        //"hr": ["a", "ako", "ali", "bi", "bih", "bila", "bili", "bilo", "bio", "bismo", "biste", "biti", "bumo", "da", "do", "duž", "ga", "hoće", "hoćemo", "hoćete", "hoćeš", "hoću", "i", "iako", "ih", "ili", "iz", "ja", "je", "jedna", "jedne", "jedno", "jer", "jesam", "jesi", "jesmo", "jest", "jeste", "jesu", "jim", "joj", "još", "ju", "kada", "kako", "kao", "koja", "koje", "koji", "kojima", "koju", "kroz", "li", "me", "mene", "meni", "mi", "mimo", "moj", "moja", "moje", "mu", "na", "nad", "nakon", "nam", "nama", "nas", "naš", "naša", "naše", "našeg", "ne", "nego", "neka", "neki", "nekog", "neku", "nema", "netko", "neće", "nećemo", "nećete", "nećeš", "neću", "nešto", "ni", "nije", "nikoga", "nikoje", "nikoju", "nisam", "nisi", "nismo", "niste", "nisu", "njega", "njegov", "njegova", "njegovo", "njemu", "njezin", "njezina", "njezino", "njih", "njihov", "njihova", "njihovo", "njim", "njima", "njoj", "nju", "no", "o", "od", "odmah", "on", "ona", "oni", "ono", "ova", "pa", "pak", "po", "pod", "pored", "prije", "s", "sa", "sam", "samo", "se", "sebe", "sebi", "si", "smo", "ste", "su", "sve", "svi", "svog", "svoj", "svoja", "svoje", "svom", "ta", "tada", "taj", "tako", "te", "tebe", "tebi", "ti", "to", "toj", "tome", "tu", "tvoj", "tvoja", "tvoje", "u", "uz", "vam", "vama", "vas", "vaš", "vaša", "vaše", "već", "vi", "vrlo", "za", "zar", "će", "ćemo", "ćete", "ćeš", "ću", "što"],
        //"hu": ["a", "abba", "abban", "abból", "addig", "ahhoz", "ahogy", "ahol", "aki", "akik", "akkor", "akár", "alapján", "alatt", "alatta", "alattad", "alattam", "alattatok", "alattuk", "alattunk", "alá", "alád", "alájuk", "alám", "alánk", "alátok", "alól", "alóla", "alólad", "alólam", "alólatok", "alóluk", "alólunk", "amely", "amelybol", "amelyek", "amelyekben", "amelyeket", "amelyet", "amelyik", "amelynek", "ami", "amikor", "amit", "amolyan", "amott", "amíg", "annak", "annál", "arra", "arról", "attól", "az", "aznap", "azok", "azokat", "azokba", "azokban", "azokból", "azokhoz", "azokig", "azokkal", "azokká", "azoknak", "azoknál", "azokon", "azokra", "azokról", "azoktól", "azokért", "azon", "azonban", "azonnal", "azt", "aztán", "azután", "azzal", "azzá", "azért", "bal", "balra", "ban", "be", "belé", "beléd", "beléjük", "belém", "belénk", "belétek", "belül", "belőle", "belőled", "belőlem", "belőletek", "belőlük", "belőlünk", "ben", "benne", "benned", "bennem", "bennetek", "bennük", "bennünk", "bár", "bárcsak", "bármilyen", "búcsú", "cikk", "cikkek", "cikkeket", "csak", "csakhogy", "csupán", "de", "dehogy", "e", "ebbe", "ebben", "ebből", "eddig", "egy", "egyebek", "egyebet", "egyedül", "egyelőre", "egyes", "egyet", "egyetlen", "egyik", "egymás", "egyre", "egyszerre", "egyéb", "együtt", "egész", "egészen", "ehhez", "ekkor", "el", "eleinte", "ellen", "ellenes", "elleni", "ellenére", "elmondta", "első", "elsők", "elsősorban", "elsőt", "elé", "eléd", "elég", "eléjük", "elém", "elénk", "elétek", "elő", "előbb", "elől", "előle", "előled", "előlem", "előletek", "előlük", "előlünk", "először", "előtt", "előtte", "előtted", "előttem", "előttetek", "előttük", "előttünk", "előző", "emilyen", "engem", "ennek", "ennyi", "ennél", "enyém", "erre", "erről", "esetben", "ettől", "ez", "ezek", "ezekbe", "ezekben", "ezekből", "ezeken", "ezeket", "ezekhez", "ezekig", "ezekkel", "ezekké", "ezeknek", "ezeknél", "ezekre", "ezekről", "ezektől", "ezekért", "ezen", "ezentúl", "ezer", "ezret", "ezt", "ezután", "ezzel", "ezzé", "ezért", "fel", "fele", "felek", "felet", "felett", "felé", "fent", "fenti", "fél", "fölé", "gyakran", "ha", "halló", "hamar", "hanem", "harmadik", "harmadikat", "harminc", "hat", "hatodik", "hatodikat", "hatot", "hatvan", "helyett", "hetedik", "hetediket", "hetet", "hetven", "hirtelen", "hiszen", "hiába", "hogy", "hogyan", "hol", "holnap", "holnapot", "honnan", "hova", "hozzá", "hozzád", "hozzájuk", "hozzám", "hozzánk", "hozzátok", "hurrá", "huszadik", "hány", "hányszor", "hármat", "három", "hát", "hátha", "hátulsó", "hét", "húsz", "ide", "ide-оda", "idén", "igazán", "igen", "ill", "illetve", "ilyen", "ilyenkor", "immár", "inkább", "is", "ismét", "ison", "itt", "jelenleg", "jobban", "jobbra", "jó", "jól", "jólesik", "jóval", "jövőre", "kell", "kellene", "kellett", "kelljen", "keressünk", "keresztül", "ketten", "kettő", "kettőt", "kevés", "ki", "kiben", "kiből", "kicsit", "kicsoda", "kihez", "kik", "kikbe", "kikben", "kikből", "kiken", "kiket", "kikhez", "kikkel", "kikké", "kiknek", "kiknél", "kikre", "kikről", "kiktől", "kikért", "kilenc", "kilencedik", "kilencediket", "kilencet", "kilencven", "kin", "kinek", "kinél", "kire", "kiről", "kit", "kitől", "kivel", "kivé", "kié", "kiért", "korábban", "képest", "kérem", "kérlek", "kész", "késő", "később", "későn", "két", "kétszer", "kívül", "körül", "köszönhetően", "köszönöm", "közben", "közel", "közepesen", "közepén", "közé", "között", "közül", "külön", "különben", "különböző", "különbözőbb", "különbözőek", "lassan", "le", "legalább", "legyen", "lehet", "lehetetlen", "lehetett", "lehetőleg", "lehetőség", "lenne", "lenni", "lennék", "lennének", "lesz", "leszek", "lesznek", "leszünk", "lett", "lettek", "lettem", "lettünk", "lévő", "ma", "maga", "magad", "magam", "magatokat", "magukat", "magunkat", "magát", "mai", "majd", "majdnem", "manapság", "meg", "megcsinál", "megcsinálnak", "megint", "megvan", "mellett", "mellette", "melletted", "mellettem", "mellettetek", "mellettük", "mellettünk", "mellé", "melléd", "melléjük", "mellém", "mellénk", "mellétek", "mellől", "mellőle", "mellőled", "mellőlem", "mellőletek", "mellőlük", "mellőlünk", "mely", "melyek", "melyik", "mennyi", "mert", "mi", "miatt", "miatta", "miattad", "miattam", "miattatok", "miattuk", "miattunk", "mibe", "miben", "miből", "mihez", "mik", "mikbe", "mikben", "mikből", "miken", "miket", "mikhez", "mikkel", "mikké", "miknek", "miknél", "mikor", "mikre", "mikről", "miktől", "mikért", "milyen", "min", "mind", "mindegyik", "mindegyiket", "minden", "mindenesetre", "mindenki", "mindent", "mindenütt", "mindig", "mindketten", "minek", "minket", "mint", "mintha", "minél", "mire", "miről", "mit", "mitől", "mivel", "mivé", "miért", "mondta", "most", "mostanáig", "már", "más", "másik", "másikat", "másnap", "második", "másodszor", "mások", "másokat", "mást", "még", "mégis", "míg", "mögé", "mögéd", "mögéjük", "mögém", "mögénk", "mögétek", "mögött", "mögötte", "mögötted", "mögöttem", "mögöttetek", "mögöttük", "mögöttünk", "mögül", "mögüle", "mögüled", "mögülem", "mögületek", "mögülük", "mögülünk", "múltkor", "múlva", "na", "nagy", "nagyobb", "nagyon", "naponta", "napot", "ne", "negyedik", "negyediket", "negyven", "neked", "nekem", "neki", "nekik", "nektek", "nekünk", "nem", "nemcsak", "nemrég", "nincs", "nyolc", "nyolcadik", "nyolcadikat", "nyolcat", "nyolcvan", "nála", "nálad", "nálam", "nálatok", "náluk", "nálunk", "négy", "négyet", "néha", "néhány", "nélkül", "o", "oda", "ok", "olyan", "onnan", "ott", "pedig", "persze", "pár", "például", "rajta", "rajtad", "rajtam", "rajtatok", "rajtuk", "rajtunk", "rendben", "rosszul", "rá", "rád", "rájuk", "rám", "ránk", "rátok", "régen", "régóta", "részére", "róla", "rólad", "rólam", "rólatok", "róluk", "rólunk", "rögtön", "s", "saját", "se", "sem", "semmi", "semmilyen", "semmiség", "senki", "soha", "sok", "sokan", "sokat", "sokkal", "sokszor", "sokáig", "során", "stb.", "szemben", "szerbusz", "szerint", "szerinte", "szerinted", "szerintem", "szerintetek", "szerintük", "szerintünk", "szervusz", "szinte", "számára", "száz", "századik", "százat", "szépen", "szét", "szíves", "szívesen", "szíveskedjék", "sőt", "talán", "tavaly", "te", "tegnap", "tegnapelőtt", "tehát", "tele", "teljes", "tessék", "ti", "tied", "titeket", "tizedik", "tizediket", "tizenegy", "tizenegyedik", "tizenhat", "tizenhárom", "tizenhét", "tizenkettedik", "tizenkettő", "tizenkilenc", "tizenkét", "tizennyolc", "tizennégy", "tizenöt", "tizet", "tovább", "további", "továbbá", "távol", "téged", "tényleg", "tíz", "több", "többi", "többször", "túl", "tőle", "tőled", "tőlem", "tőletek", "tőlük", "tőlünk", "ugyanakkor", "ugyanez", "ugyanis", "ugye", "urak", "uram", "urat", "utoljára", "utolsó", "után", "utána", "vagy", "vagyis", "vagyok", "vagytok", "vagyunk", "vajon", "valahol", "valaki", "valakit", "valamelyik", "valami", "valamint", "való", "van", "vannak", "vele", "veled", "velem", "veletek", "velük", "velünk", "vissza", "viszlát", "viszont", "viszontlátásra", "volna", "volnának", "volnék", "volt", "voltak", "voltam", "voltunk", "végre", "végén", "végül", "által", "általában", "ám", "át", "éljen", "én", "éppen", "érte", "érted", "értem", "értetek", "értük", "értünk", "és", "év", "évben", "éve", "évek", "éves", "évi", "évvel", "így", "óta", "ön", "önbe", "önben", "önből", "önhöz", "önnek", "önnel", "önnél", "önre", "önről", "önt", "öntől", "önért", "önök", "önökbe", "önökben", "önökből", "önöket", "önökhöz", "önökkel", "önöknek", "önöknél", "önökre", "önökről", "önöktől", "önökért", "önökön", "önön", "össze", "öt", "ötven", "ötödik", "ötödiket", "ötöt", "úgy", "úgyis", "úgynevezett", "új", "újabb", "újra", "úr", "ő", "ők", "őket", "őt"],
        //"it": ["IE", "Th", "a", "abbastanza", "abbia", "abbiamo", "abbiano", "abbiate", "accidenti", "ad", "adesso", "affinche", "agl", "agli", "ahime", "ahimÃ¨", "ai", "al", "alcuna", "alcuni", "alcuno", "all", "alla", "alle", "allo", "allora", "altri", "altrimenti", "altro", "altrove", "altrui", "anche", "ancora", "anni", "anno", "ansa", "anticipo", "assai", "attesa", "attraverso", "avanti", "avemmo", "avendo", "avente", "aver", "avere", "averlo", "avesse", "avessero", "avessi", "avessimo", "aveste", "avesti", "avete", "aveva", "avevamo", "avevano", "avevate", "avevi", "avevo", "avrai", "avranno", "avrebbe", "avrebbero", "avrei", "avremmo", "avremo", "avreste", "avresti", "avrete", "avrà", "avrò", "avuta", "avute", "avuti", "avuto", "basta", "bene", "benissimo", "berlusconi", "brava", "bravo", "c", "casa", "caso", "cento", "certa", "certe", "certi", "certo", "che", "chi", "chicchessia", "chiunque", "ci", "ciascuna", "ciascuno", "cima", "cio", "cioe", "cioÃ¨", "circa", "citta", "cittÃ", "ciÃ²", "co", "codesta", "codesti", "codesto", "cogli", "coi", "col", "colei", "coll", "coloro", "colui", "come", "cominci", "comunque", "con", "concernente", "conciliarsi", "conclusione", "consiglio", "contro", "cortesia", "cos", "cosa", "cosi", "cosÃ¬", "cui", "d", "da", "dagl", "dagli", "dai", "dal", "dall", "dalla", "dalle", "dallo", "dappertutto", "davanti", "degl", "degli", "dei", "del", "dell", "della", "delle", "dello", "dentro", "detto", "deve", "di", "dice", "dietro", "dire", "dirimpetto", "diventa", "diventare", "diventato", "dopo", "dov", "dove", "dovra", "dovrÃ", "dovunque", "due", "dunque", "durante", "e", "ebbe", "ebbero", "ebbi", "ecc", "ecco", "ed", "effettivamente", "egli", "ella", "entrambi", "eppure", "era", "erano", "eravamo", "eravate", "eri", "ero", "esempio", "esse", "essendo", "esser", "essere", "essi", "ex", "fa", "faccia", "facciamo", "facciano", "facciate", "faccio", "facemmo", "facendo", "facesse", "facessero", "facessi", "facessimo", "faceste", "facesti", "faceva", "facevamo", "facevano", "facevate", "facevi", "facevo", "fai", "fanno", "farai", "faranno", "fare", "farebbe", "farebbero", "farei", "faremmo", "faremo", "fareste", "faresti", "farete", "farà", "farò", "fatto", "favore", "fece", "fecero", "feci", "fin", "finalmente", "finche", "fine", "fino", "forse", "forza", "fosse", "fossero", "fossi", "fossimo", "foste", "fosti", "fra", "frattempo", "fu", "fui", "fummo", "fuori", "furono", "futuro", "generale", "gia", "giacche", "giorni", "giorno", "giÃ", "gli", "gliela", "gliele", "glieli", "glielo", "gliene", "governo", "grande", "grazie", "gruppo", "ha", "haha", "hai", "hanno", "ho", "i", "ieri", "il", "improvviso", "in", "inc", "infatti", "inoltre", "insieme", "intanto", "intorno", "invece", "io", "l", "la", "lasciato", "lato", "lavoro", "le", "lei", "li", "lo", "lontano", "loro", "lui", "lungo", "luogo", "lÃ", "ma", "macche", "magari", "maggior", "mai", "male", "malgrado", "malissimo", "mancanza", "marche", "me", "medesimo", "mediante", "meglio", "meno", "mentre", "mesi", "mezzo", "mi", "mia", "mie", "miei", "mila", "miliardi", "milioni", "minimi", "ministro", "mio", "modo", "molti", "moltissimo", "molto", "momento", "mondo", "mosto", "nazionale", "ne", "negl", "negli", "nei", "nel", "nell", "nella", "nelle", "nello", "nemmeno", "neppure", "nessun", "nessuna", "nessuno", "niente", "no", "noi", "non", "nondimeno", "nonostante", "nonsia", "nostra", "nostre", "nostri", "nostro", "novanta", "nove", "nulla", "nuovo", "o", "od", "oggi", "ogni", "ognuna", "ognuno", "oltre", "oppure", "ora", "ore", "osi", "ossia", "ottanta", "otto", "paese", "parecchi", "parecchie", "parecchio", "parte", "partendo", "peccato", "peggio", "per", "perche", "perchÃ¨", "perché", "percio", "perciÃ²", "perfino", "pero", "persino", "persone", "perÃ²", "piedi", "pieno", "piglia", "piu", "piuttosto", "piÃ¹", "più", "po", "pochissimo", "poco", "poi", "poiche", "possa", "possedere", "posteriore", "posto", "potrebbe", "preferibilmente", "presa", "press", "prima", "primo", "principalmente", "probabilmente", "proprio", "puo", "pure", "purtroppo", "puÃ²", "qualche", "qualcosa", "qualcuna", "qualcuno", "quale", "quali", "qualunque", "quando", "quanta", "quante", "quanti", "quanto", "quantunque", "quasi", "quattro", "quel", "quella", "quelle", "quelli", "quello", "quest", "questa", "queste", "questi", "questo", "qui", "quindi", "realmente", "recente", "recentemente", "registrazione", "relativo", "riecco", "salvo", "sara", "sarai", "saranno", "sarebbe", "sarebbero", "sarei", "saremmo", "saremo", "sareste", "saresti", "sarete", "sarÃ", "sarà", "sarò", "scola", "scopo", "scorso", "se", "secondo", "seguente", "seguito", "sei", "sembra", "sembrare", "sembrato", "sembri", "sempre", "senza", "sette", "si", "sia", "siamo", "siano", "siate", "siete", "sig", "solito", "solo", "soltanto", "sono", "sopra", "sotto", "spesso", "srl", "sta", "stai", "stando", "stanno", "starai", "staranno", "starebbe", "starebbero", "starei", "staremmo", "staremo", "stareste", "staresti", "starete", "starà", "starò", "stata", "state", "stati", "stato", "stava", "stavamo", "stavano", "stavate", "stavi", "stavo", "stemmo", "stessa", "stesse", "stessero", "stessi", "stessimo", "stesso", "steste", "stesti", "stette", "stettero", "stetti", "stia", "stiamo", "stiano", "stiate", "sto", "su", "sua", "subito", "successivamente", "successivo", "sue", "sugl", "sugli", "sui", "sul", "sull", "sulla", "sulle", "sullo", "suo", "suoi", "tale", "tali", "talvolta", "tanto", "te", "tempo", "ti", "titolo", "torino", "tra", "tranne", "tre", "trenta", "troppo", "trovato", "tu", "tua", "tue", "tuo", "tuoi", "tutta", "tuttavia", "tutte", "tutti", "tutto", "uguali", "ulteriore", "ultimo", "un", "una", "uno", "uomo", "va", "vale", "vari", "varia", "varie", "vario", "verso", "vi", "via", "vicino", "visto", "vita", "voi", "volta", "volte", "vostra", "vostre", "vostri", "vostro", "Ã¨", "è"],
        //"ko": ["!", "\"", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "...", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ";", "<", "=", ">", "?", "@", "\\", "^", "_", "`", "|", "~", "·", "—", "——", "‘", "’", "“", "”", "…", "、", "。", "〈", "〉", "《", "》", "가", "가까스로", "가령", "각", "각각", "각자", "각종", "갖고말하자면", "같다", "같이", "개의치않고", "거니와", "거바", "거의", "것", "것과 같이", "것들", "게다가", "게우다", "겨우", "견지에서", "결과에 이르다", "결국", "결론을 낼 수 있다", "겸사겸사", "고려하면", "고로", "곧", "공동으로", "과", "과연", "관계가 있다", "관계없이", "관련이 있다", "관하여", "관한", "관해서는", "구", "구체적으로", "구토하다", "그", "그들", "그때", "그래", "그래도", "그래서", "그러나", "그러니", "그러니까", "그러면", "그러므로", "그러한즉", "그런 까닭에", "그런데", "그런즉", "그럼", "그럼에도 불구하고", "그렇게 함으로써", "그렇지", "그렇지 않다면", "그렇지 않으면", "그렇지만", "그렇지않으면", "그리고", "그리하여", "그만이다", "그에 따르는", "그위에", "그저", "그중에서", "그치지 않다", "근거로", "근거하여", "기대여", "기점으로", "기준으로", "기타", "까닭으로", "까악", "까지", "까지 미치다", "까지도", "꽈당", "끙끙", "끼익", "나", "나머지는", "남들", "남짓", "너", "너희", "너희들", "네", "넷", "년", "논하지 않다", "놀라다", "누가 알겠는가", "누구", "다른", "다른 방면으로", "다만", "다섯", "다소", "다수", "다시 말하자면", "다시말하면", "다음", "다음에", "다음으로", "단지", "답다", "당신", "당장", "대로 하다", "대하면", "대하여", "대해 말하자면", "대해서", "댕그", "더구나", "더군다나", "더라도", "더불어", "더욱더", "더욱이는", "도달하다", "도착하다", "동시에", "동안", "된바에야", "된이상", "두번째로", "둘", "둥둥", "뒤따라", "뒤이어", "든간에", "들", "등", "등등", "딩동", "따라", "따라서", "따위", "따지지 않다", "딱", "때", "때가 되어", "때문에", "또", "또한", "뚝뚝", "라 해도", "령", "로", "로 인하여", "로부터", "로써", "륙", "를", "마음대로", "마저", "마저도", "마치", "막론하고", "만 못하다", "만약", "만약에", "만은 아니다", "만이 아니다", "만일", "만큼", "말하자면", "말할것도 없고", "매", "매번", "메쓰겁다", "몇", "모", "모두", "무렵", "무릎쓰고", "무슨", "무엇", "무엇때문에", "물론", "및", "바꾸어말하면", "바꾸어말하자면", "바꾸어서 말하면", "바꾸어서 한다면", "바꿔 말하면", "바로", "바와같이", "밖에 안된다", "반대로", "반대로 말하자면", "반드시", "버금", "보는데서", "보다더", "보드득", "본대로", "봐", "봐라", "부류의 사람들", "부터", "불구하고", "불문하고", "붕붕", "비걱거리다", "비교적", "비길수 없다", "비로소", "비록", "비슷하다", "비추어 보아", "비하면", "뿐만 아니라", "뿐만아니라", "뿐이다", "삐걱", "삐걱거리다", "사", "삼", "상대적으로 말하자면", "생각한대로", "설령", "설마", "설사", "셋", "소생", "소인", "솨", "쉿", "습니까", "습니다", "시각", "시간", "시작하여", "시초에", "시키다", "실로", "심지어", "아", "아니", "아니나다를가", "아니라면", "아니면", "아니었다면", "아래윗", "아무거나", "아무도", "아야", "아울러", "아이", "아이고", "아이구", "아이야", "아이쿠", "아하", "아홉", "안 그러면", "않기 위하여", "않기 위해서", "알 수 있다", "알았어", "앗", "앞에서", "앞의것", "야", "약간", "양자", "어", "어기여차", "어느", "어느 년도", "어느것", "어느곳", "어느때", "어느쪽", "어느해", "어디", "어때", "어떠한", "어떤", "어떤것", "어떤것들", "어떻게", "어떻해", "어이", "어째서", "어쨋든", "어쩔수 없다", "어찌", "어찌됏든", "어찌됏어", "어찌하든지", "어찌하여", "언제", "언젠가", "얼마", "얼마 안 되는 것", "얼마간", "얼마나", "얼마든지", "얼마만큼", "얼마큼", "엉엉", "에", "에 가서", "에 달려 있다", "에 대해", "에 있다", "에 한하다", "에게", "에서", "여", "여기", "여덟", "여러분", "여보시오", "여부", "여섯", "여전히", "여차", "연관되다", "연이서", "영", "영차", "옆사람", "예", "예를 들면", "예를 들자면", "예컨대", "예하면", "오", "오로지", "오르다", "오자마자", "오직", "오호", "오히려", "와", "와 같은 사람들", "와르르", "와아", "왜", "왜냐하면", "외에도", "요만큼", "요만한 것", "요만한걸", "요컨대", "우르르", "우리", "우리들", "우선", "우에 종합한것과같이", "운운", "월", "위에서 서술한바와같이", "위하여", "위해서", "윙윙", "육", "으로", "으로 인하여", "으로서", "으로써", "을", "응", "응당", "의", "의거하여", "의지하여", "의해", "의해되다", "의해서", "이", "이 되다", "이 때문에", "이 밖에", "이 외에", "이 정도의", "이것", "이곳", "이때", "이라면", "이래", "이러이러하다", "이러한", "이런", "이럴정도로", "이렇게 많은 것", "이렇게되면", "이렇게말하자면", "이렇구나", "이로 인하여", "이르기까지", "이리하여", "이만큼", "이번", "이봐", "이상", "이어서", "이었다", "이와 같다", "이와 같은", "이와 반대로", "이와같다면", "이외에도", "이용하여", "이유만으로", "이젠", "이지만", "이쪽", "이천구", "이천육", "이천칠", "이천팔", "인 듯하다", "인젠", "일", "일것이다", "일곱", "일단", "일때", "일반적으로", "일지라도", "임에 틀림없다", "입각하여", "입장에서", "잇따라", "있다", "자", "자기", "자기집", "자마자", "자신", "잠깐", "잠시", "저", "저것", "저것만큼", "저기", "저쪽", "저희", "전부", "전자", "전후", "점에서 보아", "정도에 이르다", "제", "제각기", "제외하고", "조금", "조차", "조차도", "졸졸", "좀", "좋아", "좍좍", "주룩주룩", "주저하지 않고", "줄은 몰랏다", "줄은모른다", "중에서", "중의하나", "즈음하여", "즉", "즉시", "지든지", "지만", "지말고", "진짜로", "쪽으로", "차라리", "참", "참나", "첫번째로", "쳇", "총적으로", "총적으로 말하면", "총적으로 보면", "칠", "콸콸", "쾅쾅", "쿵", "타다", "타인", "탕탕", "토하다", "통하여", "툭", "퉤", "틈타", "팍", "팔", "퍽", "펄렁", "하", "하게될것이다", "하게하다", "하겠는가", "하고 있다", "하고있었다", "하곤하였다", "하구나", "하기 때문에", "하기 위하여", "하기는한데", "하기만 하면", "하기보다는", "하기에", "하나", "하느니", "하는 김에", "하는 편이 낫다", "하는것도", "하는것만 못하다", "하는것이 낫다", "하는바", "하더라도", "하도다", "하도록시키다", "하도록하다", "하든지", "하려고하다", "하마터면", "하면 할수록", "하면된다", "하면서", "하물며", "하여금", "하여야", "하자마자", "하지 않는다면", "하지 않도록", "하지마", "하지마라", "하지만", "하하", "한 까닭에", "한 이유는", "한 후", "한다면", "한다면 몰라도", "한데", "한마디", "한적이있다", "한켠으로는", "한항목", "할 따름이다", "할 생각이다", "할 줄 안다", "할 지경이다", "할 힘이 있다", "할때", "할만하다", "할망정", "할뿐", "할수있다", "할수있어", "할줄알다", "할지라도", "할지언정", "함께", "해도된다", "해도좋다", "해봐요", "해서는 안된다", "해야한다", "해요", "했어요", "향하다", "향하여", "향해서", "허", "허걱", "허허", "헉", "헉헉", "헐떡헐떡", "형식으로 쓰여", "혹시", "혹은", "혼자", "훨씬", "휘익", "휴", "흐흐", "흥", "힘입어", "︿", "！", "＃", "＄", "％", "＆", "（", "）", "＊", "＋", "，", "０", "１", "２", "３", "４", "５", "６", "７", "８", "９", "：", "；", "＜", "＞", "？", "＠", "［", "］", "｛", "｜", "｝", "～", "￥"],
        //"nl": ["aan", "achte", "achter", "af", "al", "alle", "alleen", "alles", "als", "ander", "anders", "beetje", "behalve", "beide", "beiden", "ben", "beneden", "bent", "bij", "bijna", "bijv", "blijkbaar", "blijken", "boven", "bv", "daar", "daardoor", "daarin", "daarna", "daarom", "daaruit", "dan", "dat", "de", "deden", "deed", "derde", "derhalve", "dertig", "deze", "dhr", "die", "dit", "doe", "doen", "doet", "door", "drie", "duizend", "echter", "een", "eens", "eerst", "eerste", "eigen", "eigenlijk", "elk", "elke", "en", "enige", "er", "erg", "ergens", "etc", "etcetera", "even", "geen", "genoeg", "geweest", "haar", "haarzelf", "had", "hadden", "heb", "hebben", "hebt", "hedden", "heeft", "heel", "hem", "hemzelf", "hen", "het", "hetzelfde", "hier", "hierin", "hierna", "hierom", "hij", "hijzelf", "hoe", "honderd", "hun", "ieder", "iedere", "iedereen", "iemand", "iets", "ik", "in", "inderdaad", "intussen", "is", "ja", "je", "jij", "jijzelf", "jou", "jouw", "jullie", "kan", "kon", "konden", "kun", "kunnen", "kunt", "laatst", "later", "lijken", "lijkt", "maak", "maakt", "maakte", "maakten", "maar", "mag", "maken", "me", "meer", "meest", "meestal", "men", "met", "mevr", "mij", "mijn", "minder", "miss", "misschien", "missen", "mits", "mocht", "mochten", "moest", "moesten", "moet", "moeten", "mogen", "mr", "mrs", "mw", "na", "naar", "nam", "namelijk", "nee", "neem", "negen", "nemen", "nergens", "niemand", "niet", "niets", "niks", "noch", "nochtans", "nog", "nooit", "nu", "nv", "of", "om", "omdat", "ondanks", "onder", "ondertussen", "ons", "onze", "onzeker", "ooit", "ook", "op", "over", "overal", "overige", "paar", "per", "recent", "redelijk", "samen", "sinds", "steeds", "te", "tegen", "tegenover", "thans", "tien", "tiende", "tijdens", "tja", "toch", "toe", "tot", "totdat", "tussen", "twee", "tweede", "u", "uit", "uw", "vaak", "van", "vanaf", "veel", "veertig", "verder", "verscheidene", "verschillende", "via", "vier", "vierde", "vijf", "vijfde", "vijftig", "volgend", "volgens", "voor", "voordat", "voorts", "waar", "waarom", "waarschijnlijk", "wanneer", "waren", "was", "wat", "we", "wederom", "weer", "weinig", "wel", "welk", "welke", "werd", "werden", "werder", "whatever", "wie", "wij", "wijzelf", "wil", "wilden", "willen", "word", "worden", "wordt", "zal", "ze", "zei", "zeker", "zelf", "zelfde", "zes", "zeven", "zich", "zij", "zijn", "zijzelf", "zo", "zoals", "zodat", "zou", "zouden", "zulk", "zullen"],
        //"no": ["alle", "at", "av", "bare", "begge", "ble", "blei", "bli", "blir", "blitt", "både", "båe", "da", "de", "deg", "dei", "deim", "deira", "deires", "dem", "den", "denne", "der", "dere", "deres", "det", "dette", "di", "din", "disse", "ditt", "du", "dykk", "dykkar", "då", "eg", "ein", "eit", "eitt", "eller", "elles", "en", "enn", "er", "et", "ett", "etter", "for", "fordi", "fra", "før", "ha", "hadde", "han", "hans", "har", "hennar", "henne", "hennes", "her", "hjå", "ho", "hoe", "honom", "hoss", "hossen", "hun", "hva", "hvem", "hver", "hvilke", "hvilken", "hvis", "hvor", "hvordan", "hvorfor", "i", "ikke", "ikkje", "ingen", "ingi", "inkje", "inn", "inni", "ja", "jeg", "kan", "kom", "korleis", "korso", "kun", "kunne", "kva", "kvar", "kvarhelst", "kven", "kvi", "kvifor", "man", "mange", "me", "med", "medan", "meg", "meget", "mellom", "men", "mi", "min", "mine", "mitt", "mot", "mykje", "ned", "no", "noe", "noen", "noka", "noko", "nokon", "nokor", "nokre", "nå", "når", "og", "også", "om", "opp", "oss", "over", "på", "samme", "seg", "selv", "si", "sia", "sidan", "siden", "sin", "sine", "sitt", "sjøl", "skal", "skulle", "slik", "so", "som", "somme", "somt", "så", "sånn", "til", "um", "upp", "ut", "uten", "var", "vart", "varte", "ved", "vere", "verte", "vi", "vil", "ville", "vore", "vors", "vort", "vår", "være", "vært", "å"],
        //"pl": ["aby", "ach", "aj", "albo", "ale", "ani", "aż", "bardzo", "bez", "bo", "bowiem", "by", "byli", "bym", "być", "był", "była", "było", "były", "będzie", "będą", "chce", "choć", "ci", "ciebie", "cię", "co", "coraz", "coś", "czy", "czyli", "często", "daleko", "dla", "dlaczego", "dlatego", "do", "dobrze", "dokąd", "dość", "dr", "dużo", "dwa", "dwaj", "dwie", "dwoje", "dzisiaj", "dziś", "gdy", "gdyby", "gdyż", "gdzie", "go", "godz", "hab", "i", "ich", "ii", "iii", "ile", "im", "inne", "inny", "inż", "iv", "ix", "iż", "ja", "jak", "jakby", "jaki", "jakie", "jako", "je", "jeden", "jedna", "jednak", "jedno", "jednym", "jedynie", "jego", "jej", "jemu", "jest", "jestem", "jeszcze", "jeśli", "jeżeli", "już", "ją", "każdy", "kiedy", "kierunku", "kilku", "kto", "która", "które", "którego", "której", "który", "których", "którym", "którzy", "ku", "lat", "lecz", "lub", "ma", "mają", "mam", "mamy", "mgr", "mi", "miał", "mimo", "mnie", "mną", "mogą", "moi", "moja", "moje", "może", "można", "mu", "musi", "my", "mój", "na", "nad", "nam", "nami", "nas", "nasi", "nasz", "nasza", "nasze", "natychmiast", "nawet", "nic", "nich", "nie", "niego", "niej", "niemu", "nigdy", "nim", "nimi", "nią", "niż", "no", "nowe", "np", "nr", "o", "o.o.", "obok", "od", "ok", "około", "on", "ona", "one", "oni", "ono", "oraz", "owszem", "pan", "pl", "po", "pod", "ponad", "ponieważ", "poza", "prof", "przed", "przede", "przedtem", "przez", "przy", "raz", "razie", "roku", "również", "sam", "sama", "się", "skąd", "sobie", "sposób", "swoje", "są", "ta", "tak", "taki", "takich", "takie", "także", "tam", "te", "tego", "tej", "tel", "temu", "ten", "teraz", "też", "to", "tobie", "tobą", "trzeba", "tu", "tutaj", "twoi", "twoja", "twoje", "twój", "ty", "tych", "tylko", "tym", "tys", "tzw", "tę", "u", "ul", "vi", "vii", "viii", "vol", "w", "wam", "wami", "was", "wasi", "wasz", "wasza", "wasze", "we", "wie", "więc", "wszystko", "wtedy", "www", "wy", "właśnie", "wśród", "xi", "xii", "xiii", "xiv", "xv", "z", "za", "zawsze", "zaś", "ze", "zł", "żaden", "że", "żeby"],
        //"pt": ["a", "acerca", "adeus", "agora", "ainda", "algmas", "algo", "algumas", "alguns", "ali", "além", "ambos", "ano", "anos", "antes", "ao", "aos", "apenas", "apoio", "apontar", "após", "aquela", "aquelas", "aquele", "aqueles", "aqui", "aquilo", "as", "assim", "através", "atrás", "até", "aí", "baixo", "bastante", "bem", "bom", "breve", "cada", "caminho", "catorze", "cedo", "cento", "certamente", "certeza", "cima", "cinco", "coisa", "com", "como", "comprido", "conhecido", "conselho", "contra", "corrente", "custa", "cá", "da", "daquela", "daquele", "dar", "das", "de", "debaixo", "demais", "dentro", "depois", "desde", "desligado", "dessa", "desse", "desta", "deste", "deve", "devem", "deverá", "dez", "dezanove", "dezasseis", "dezassete", "dezoito", "dia", "diante", "direita", "diz", "dizem", "dizer", "do", "dois", "dos", "doze", "duas", "dá", "dão", "dúvida", "e", "ela", "elas", "ele", "eles", "em", "embora", "enquanto", "entre", "então", "era", "essa", "essas", "esse", "esses", "esta", "estado", "estar", "estará", "estas", "estava", "este", "estes", "esteve", "estive", "estivemos", "estiveram", "estiveste", "estivestes", "estou", "está", "estás", "estão", "eu", "exemplo", "falta", "fará", "favor", "faz", "fazeis", "fazem", "fazemos", "fazer", "fazes", "fazia", "faço", "fez", "fim", "final", "foi", "fomos", "for", "fora", "foram", "forma", "foste", "fostes", "fui", "geral", "grande", "grandes", "grupo", "hoje", "horas", "há", "iniciar", "inicio", "ir", "irá", "isso", "ista", "iste", "isto", "já", "lado", "ligado", "local", "logo", "longe", "lugar", "lá", "maior", "maioria", "maiorias", "mais", "mal", "mas", "me", "meio", "menor", "menos", "meses", "mesmo", "meu", "meus", "mil", "minha", "minhas", "momento", "muito", "muitos", "máximo", "mês", "na", "nada", "naquela", "naquele", "nas", "nem", "nenhuma", "nessa", "nesse", "nesta", "neste", "no", "noite", "nome", "nos", "nossa", "nossas", "nosso", "nossos", "nova", "nove", "novo", "novos", "num", "numa", "nunca", "não", "nível", "nós", "número", "o", "obra", "obrigada", "obrigado", "oitava", "oitavo", "oito", "onde", "ontem", "onze", "os", "ou", "outra", "outras", "outro", "outros", "para", "parece", "parte", "partir", "pegar", "pela", "pelas", "pelo", "pelos", "perto", "pessoas", "pode", "podem", "poder", "poderá", "podia", "ponto", "pontos", "por", "porque", "porquê", "posição", "possivelmente", "posso", "possível", "pouca", "pouco", "povo", "primeira", "primeiro", "promeiro", "próprio", "próximo", "puderam", "pôde", "põe", "põem", "qual", "qualquer", "quando", "quanto", "quarta", "quarto", "quatro", "que", "quem", "quer", "quero", "questão", "quieto", "quinta", "quinto", "quinze", "quê", "relação", "sabe", "saber", "se", "segunda", "segundo", "sei", "seis", "sem", "sempre", "ser", "seria", "sete", "seu", "seus", "sexta", "sexto", "sim", "sistema", "sob", "sobre", "sois", "somente", "somos", "sou", "sua", "suas", "são", "sétima", "sétimo", "tal", "talvez", "também", "tanto", "tarde", "te", "tem", "temos", "tempo", "tendes", "tenho", "tens", "tentar", "tentaram", "tente", "tentei", "ter", "terceira", "terceiro", "teu", "teus", "teve", "tipo", "tive", "tivemos", "tiveram", "tiveste", "tivestes", "toda", "todas", "todo", "todos", "trabalhar", "trabalho", "treze", "três", "tu", "tua", "tuas", "tudo", "tão", "têm", "um", "uma", "umas", "uns", "usa", "usar", "vai", "vais", "valor", "veja", "vem", "vens", "ver", "verdade", "verdadeiro", "vez", "vezes", "viagem", "vindo", "vinte", "você", "vocês", "vos", "vossa", "vossas", "vosso", "vossos", "vários", "vão", "vêm", "vós", "zero", "à", "às", "área", "é", "és", "último"],
        "ru": ["а", "алло", "без", "белый", "близко", "более", "больше", "большой", "будем", "будет", "будете", "будешь", "будто", "буду", "будут", "будь", "бы", "бывает", "бывь", "был", "была", "были", "было", "быть", "в", "важная", "важное", "важные", "важный", "вам", "вами", "вас", "ваш", "ваша", "ваше", "ваши", "вверх", "вдали", "вдруг", "ведь", "везде", "вернуться", "весь", "вечер", "взгляд", "взять", "вид", "видеть", "вместе", "вниз", "внизу", "во", "вода", "война", "вокруг", "вон", "вообще", "вопрос", "восемнадцатый", "восемнадцать", "восемь", "восьмой", "вот", "впрочем", "времени", "время", "все", "всегда", "всего", "всем", "всеми", "всему", "всех", "всею", "всю", "всюду", "вся", "всё", "второй", "вы", "выйти", "г", "где", "главный", "глаз", "говорил", "говорит", "говорить", "год", "года", "году", "голова", "голос", "город", "да", "давать", "давно", "даже", "далекий", "далеко", "дальше", "даром", "дать", "два", "двадцатый", "двадцать", "две", "двенадцатый", "двенадцать", "дверь", "двух", "девятнадцатый", "девятнадцать", "девятый", "девять", "действительно", "дел", "делать", "дело", "день", "деньги", "десятый", "десять", "для", "до", "довольно", "долго", "должно", "должный", "дом", "дорога", "друг", "другая", "другие", "других", "друго", "другое", "другой", "думать", "душа", "е", "его", "ее", "ей", "ему", "если", "есть", "еще", "ещё", "ею", "её", "ж", "ждать", "же", "жена", "женщина", "жизнь", "жить", "за", "занят", "занята", "занято", "заняты", "затем", "зато", "зачем", "здесь", "земля", "знать", "значит", "значить", "и", "идти", "из", "или", "им", "именно", "иметь", "ими", "имя", "иногда", "их", "к", "каждая", "каждое", "каждые", "каждый", "кажется", "казаться", "как", "какая", "какой", "кем", "книга", "когда", "кого", "ком", "комната", "кому", "конец", "конечно", "которая", "которого", "которой", "которые", "который", "которых", "кроме", "кругом", "кто", "куда", "лежать", "лет", "ли", "лицо", "лишь", "лучше", "любить", "люди", "м", "маленький", "мало", "мать", "машина", "между", "меля", "менее", "меньше", "меня", "место", "миллионов", "мимо", "минута", "мир", "мира", "мне", "много", "многочисленная", "многочисленное", "многочисленные", "многочисленный", "мной", "мною", "мог", "могут", "мож", "может", "можно", "можхо", "мои", "мой", "мор", "москва", "мочь", "моя", "моё", "мы", "на", "наверху", "над", "надо", "назад", "наиболее", "найти", "наконец", "нам", "нами", "народ", "нас", "начала", "начать", "наш", "наша", "наше", "наши", "не", "него", "недавно", "недалеко", "нее", "ней", "некоторый", "нельзя", "нем", "немного", "нему", "непрерывно", "нередко", "несколько", "нет", "нею", "неё", "ни", "нибудь", "ниже", "низко", "никакой", "никогда", "никто", "никуда", "ними", "них", "ничего", "ничто", "но", "новый", "нога", "ночь", "ну", "нужно", "нужный", "нх", "о", "об", "оба", "обычно", "один", "одиннадцатый", "одиннадцать", "однажды", "однако", "одного", "одной", "оказаться", "окно", "около", "он", "она", "они", "оно", "опять", "особенно", "остаться", "от", "ответить", "отец", "отовсюду", "отсюда", "очень", "первый", "перед", "писать", "плечо", "по", "под", "подумать", "пожалуйста", "позже", "пойти", "пока", "пол", "получить", "помнить", "понимать", "понять", "пор", "пора", "после", "последний", "посмотреть", "посреди", "потом", "потому", "почему", "почти", "правда", "прекрасно", "при", "про", "просто", "против", "процентов", "пятнадцатый", "пятнадцать", "пятый", "пять", "работа", "работать", "раз", "разве", "рано", "раньше", "ребенок", "решить", "россия", "рука", "русский", "ряд", "рядом", "с", "сам", "сама", "сами", "самим", "самими", "самих", "само", "самого", "самой", "самом", "самому", "саму", "самый", "свет", "свое", "своего", "своей", "свои", "своих", "свой", "свою", "сделать", "сеаой", "себе", "себя", "сегодня", "седьмой", "сейчас", "семнадцатый", "семнадцать", "семь", "сидеть", "сила", "сих", "сказал", "сказала", "сказать", "сколько", "слишком", "слово", "случай", "смотреть", "сначала", "снова", "со", "собой", "собою", "советский", "совсем", "спасибо", "спросить", "сразу", "стал", "старый", "стать", "стол", "сторона", "стоять", "страна", "суть", "считать", "т", "та", "так", "такая", "также", "таки", "такие", "такое", "такой", "там", "твой", "твоя", "твоё", "те", "тебе", "тебя", "тем", "теми", "теперь", "тех", "то", "тобой", "тобою", "товарищ", "тогда", "того", "тоже", "только", "том", "тому", "тот", "тою", "третий", "три", "тринадцатый", "тринадцать", "ту", "туда", "тут", "ты", "тысяч", "у", "увидеть", "уж", "уже", "улица", "уметь", "утро", "хороший", "хорошо", "хотеть", "хоть", "хотя", "хочешь", "час", "часто", "часть", "чаще", "чего", "человек", "чем", "чему", "через", "четвертый", "четыре", "четырнадцатый", "четырнадцать", "что", "чтоб", "чтобы", "чуть", "шестнадцатый", "шестнадцать", "шестой", "шесть", "эта", "эти", "этим", "этими", "этих", "это", "этого", "этой", "этом", "этому", "этот", "эту", "я"],
        //"sv": ["aderton", "adertonde", "adjö", "aldrig", "alla", "allas", "allt", "alltid", "alltså", "andra", "andras", "annan", "annat", "artonde", "artonn", "att", "av", "bakom", "bara", "behöva", "behövas", "behövde", "behövt", "beslut", "beslutat", "beslutit", "bland", "blev", "bli", "blir", "blivit", "bort", "borta", "bra", "bäst", "bättre", "båda", "bådas", "dag", "dagar", "dagarna", "dagen", "de", "del", "delen", "dem", "den", "denna", "deras", "dess", "dessa", "det", "detta", "dig", "din", "dina", "dit", "ditt", "dock", "du", "där", "därför", "då", "efter", "eftersom", "ej", "elfte", "eller", "elva", "en", "enkel", "enkelt", "enkla", "enligt", "er", "era", "ert", "ett", "ettusen", "fanns", "fem", "femte", "femtio", "femtionde", "femton", "femtonde", "fick", "fin", "finnas", "finns", "fjorton", "fjortonde", "fjärde", "fler", "flera", "flesta", "fram", "framför", "från", "fyra", "fyrtio", "fyrtionde", "få", "får", "fått", "följande", "för", "före", "förlåt", "förra", "första", "genast", "genom", "gick", "gjorde", "gjort", "god", "goda", "godare", "godast", "gott", "gälla", "gäller", "gällt", "gärna", "gå", "går", "gått", "gör", "göra", "ha", "hade", "haft", "han", "hans", "har", "heller", "hellre", "helst", "helt", "henne", "hennes", "hit", "hon", "honom", "hundra", "hundraen", "hundraett", "hur", "här", "hög", "höger", "högre", "högst", "i", "ibland", "icke", "idag", "igen", "igår", "imorgon", "in", "inför", "inga", "ingen", "ingenting", "inget", "innan", "inne", "inom", "inte", "inuti", "ja", "jag", "ju", "jämfört", "kan", "kanske", "knappast", "kom", "komma", "kommer", "kommit", "kr", "kunde", "kunna", "kunnat", "kvar", "legat", "ligga", "ligger", "lika", "likställd", "likställda", "lilla", "lite", "liten", "litet", "länge", "längre", "längst", "lätt", "lättare", "lättast", "långsam", "långsammare", "långsammast", "långsamt", "långt", "man", "med", "mellan", "men", "mer", "mera", "mest", "mig", "min", "mina", "mindre", "minst", "mitt", "mittemot", "mot", "mycket", "många", "måste", "möjlig", "möjligen", "möjligt", "möjligtvis", "ned", "nederst", "nedersta", "nedre", "nej", "ner", "ni", "nio", "nionde", "nittio", "nittionde", "nitton", "nittonde", "nog", "noll", "nr", "nu", "nummer", "när", "nästa", "någon", "någonting", "något", "några", "nödvändig", "nödvändiga", "nödvändigt", "nödvändigtvis", "och", "också", "ofta", "oftast", "olika", "olikt", "om", "oss", "på", "rakt", "redan", "rätt", "sade", "sagt", "samma", "sedan", "senare", "senast", "sent", "sex", "sextio", "sextionde", "sexton", "sextonde", "sig", "sin", "sina", "sist", "sista", "siste", "sitt", "sitta", "sju", "sjunde", "sjuttio", "sjuttionde", "sjutton", "sjuttonde", "själv", "sjätte", "ska", "skall", "skulle", "slutligen", "små", "smått", "snart", "som", "stor", "stora", "stort", "större", "störst", "säga", "säger", "sämre", "sämst", "så", "sådan", "sådana", "sådant", "tack", "tidig", "tidigare", "tidigast", "tidigt", "till", "tills", "tillsammans", "tio", "tionde", "tjugo", "tjugoen", "tjugoett", "tjugonde", "tjugotre", "tjugotvå", "tjungo", "tolfte", "tolv", "tre", "tredje", "trettio", "trettionde", "tretton", "trettonde", "två", "tvåhundra", "under", "upp", "ur", "ursäkt", "ut", "utan", "utanför", "ute", "vad", "var", "vara", "varför", "varifrån", "varit", "varje", "varken", "vars", "varsågod", "vart", "vem", "vems", "verkligen", "vi", "vid", "vidare", "viktig", "viktigare", "viktigast", "viktigt", "vilka", "vilkas", "vilken", "vilket", "vill", "vänster", "vänstra", "värre", "vår", "våra", "vårt", "än", "ännu", "är", "även", "åt", "åtminstone", "åtta", "åttio", "åttionde", "åttonde", "över", "övermorgon", "överst", "övre"],
        //"tr": ["acaba", "acep", "adeta", "altmýþ", "altmış", "altý", "altı", "ama", "ancak", "arada", "artýk", "aslında", "aynen", "ayrıca", "az", "bana", "bari", "bazen", "bazý", "bazı", "baţka", "belki", "ben", "benden", "beni", "benim", "beri", "beþ", "beş", "beţ", "bile", "bin", "bir", "biraz", "biri", "birkaç", "birkez", "birçok", "birþey", "birþeyi", "birşey", "birşeyi", "birţey", "biz", "bizden", "bize", "bizi", "bizim", "bu", "buna", "bunda", "bundan", "bunlar", "bunları", "bunların", "bunu", "bunun", "burada", "böyle", "böylece", "bütün", "da", "daha", "dahi", "dahil", "daima", "dair", "dayanarak", "de", "defa", "deđil", "değil", "diye", "diđer", "diğer", "doksan", "dokuz", "dolayı", "dolayısıyla", "dört", "edecek", "eden", "ederek", "edilecek", "ediliyor", "edilmesi", "ediyor", "elli", "en", "etmesi", "etti", "ettiği", "ettiğini", "eđer", "eğer", "fakat", "gibi", "göre", "halbuki", "halen", "hangi", "hani", "hariç", "hatta", "hele", "hem", "henüz", "hep", "hepsi", "her", "herhangi", "herkes", "herkesin", "hiç", "hiçbir", "iken", "iki", "ila", "ile", "ilgili", "ilk", "illa", "ise", "itibaren", "itibariyle", "iyi", "iyice", "için", "işte", "iţte", "kadar", "kanýmca", "karşın", "katrilyon", "kendi", "kendilerine", "kendini", "kendisi", "kendisine", "kendisini", "kere", "kez", "keţke", "ki", "kim", "kimden", "kime", "kimi", "kimse", "kýrk", "kýsaca", "kırk", "lakin", "madem", "međer", "milyar", "milyon", "mu", "mü", "mý", "mı", "nasýl", "nasıl", "ne", "neden", "nedenle", "nerde", "nere", "nerede", "nereye", "nitekim", "niye", "niçin", "o", "olan", "olarak", "oldu", "olduklarını", "olduğu", "olduğunu", "olmadı", "olmadığı", "olmak", "olması", "olmayan", "olmaz", "olsa", "olsun", "olup", "olur", "olursa", "oluyor", "on", "ona", "ondan", "onlar", "onlardan", "onlari", "onlarýn", "onları", "onların", "onu", "onun", "otuz", "oysa", "pek", "rağmen", "sadece", "sanki", "sekiz", "seksen", "sen", "senden", "seni", "senin", "siz", "sizden", "sizi", "sizin", "sonra", "tarafından", "trilyon", "tüm", "var", "vardı", "ve", "veya", "veyahut", "ya", "yahut", "yani", "yapacak", "yapmak", "yaptı", "yaptıkları", "yaptığı", "yaptığını", "yapılan", "yapılması", "yapıyor", "yedi", "yerine", "yetmiþ", "yetmiş", "yetmiţ", "yine", "yirmi", "yoksa", "yüz", "zaten", "çok", "çünkü", "öyle", "üzere", "üç", "þey", "þeyden", "þeyi", "þeyler", "þu", "þuna", "þunda", "þundan", "þunu", "şey", "şeyden", "şeyi", "şeyler", "şu", "şuna", "şunda", "şundan", "şunları", "şunu", "şöyle", "ţayet", "ţimdi", "ţu", "ţöyle"],
        //"zh": ["、", "。", "〈", "〉", "《", "》", "一", "一切", "一则", "一方面", "一旦", "一来", "一样", "一般", "七", "万一", "三", "上下", "不仅", "不但", "不光", "不单", "不只", "不如", "不怕", "不惟", "不成", "不拘", "不比", "不然", "不特", "不独", "不管", "不论", "不过", "不问", "与", "与其", "与否", "与此同时", "且", "两者", "个", "临", "为", "为了", "为什么", "为何", "为着", "乃", "乃至", "么", "之", "之一", "之所以", "之类", "乌乎", "乎", "乘", "九", "也", "也好", "也罢", "了", "二", "于", "于是", "于是乎", "云云", "五", "人家", "什么", "什么样", "从", "从而", "他", "他人", "他们", "以", "以便", "以免", "以及", "以至", "以至于", "以致", "们", "任", "任何", "任凭", "似的", "但", "但是", "何", "何况", "何处", "何时", "作为", "你", "你们", "使得", "例如", "依", "依照", "俺", "俺们", "倘", "倘使", "倘或", "倘然", "倘若", "借", "假使", "假如", "假若", "像", "八", "六", "兮", "关于", "其", "其一", "其中", "其二", "其他", "其余", "其它", "其次", "具体地说", "具体说来", "再者", "再说", "冒", "冲", "况且", "几", "几时", "凭", "凭借", "则", "别", "别的", "别说", "到", "前后", "前者", "加之", "即", "即令", "即使", "即便", "即或", "即若", "又", "及", "及其", "及至", "反之", "反过来", "反过来说", "另", "另一方面", "另外", "只是", "只有", "只要", "只限", "叫", "叮咚", "可", "可以", "可是", "可见", "各", "各个", "各位", "各种", "各自", "同", "同时", "向", "向着", "吓", "吗", "否则", "吧", "吧哒", "吱", "呀", "呃", "呕", "呗", "呜", "呜呼", "呢", "呵", "呸", "呼哧", "咋", "和", "咚", "咦", "咱", "咱们", "咳", "哇", "哈", "哈哈", "哉", "哎", "哎呀", "哎哟", "哗", "哟", "哦", "哩", "哪", "哪个", "哪些", "哪儿", "哪天", "哪年", "哪怕", "哪样", "哪边", "哪里", "哼", "哼唷", "唉", "啊", "啐", "啥", "啦", "啪达", "喂", "喏", "喔唷", "嗡嗡", "嗬", "嗯", "嗳", "嘎", "嘎登", "嘘", "嘛", "嘻", "嘿", "四", "因", "因为", "因此", "因而", "固然", "在", "在下", "地", "多", "多少", "她", "她们", "如", "如上所述", "如何", "如其", "如果", "如此", "如若", "宁", "宁可", "宁愿", "宁肯", "它", "它们", "对", "对于", "将", "尔后", "尚且", "就", "就是", "就是说", "尽", "尽管", "岂但", "己", "并", "并且", "开外", "开始", "归", "当", "当着", "彼", "彼此", "往", "待", "得", "怎", "怎么", "怎么办", "怎么样", "怎样", "总之", "总的来看", "总的来说", "总的说来", "总而言之", "恰恰相反", "您", "慢说", "我", "我们", "或", "或是", "或者", "所", "所以", "打", "把", "抑或", "拿", "按", "按照", "换句话说", "换言之", "据", "接着", "故", "故此", "旁人", "无宁", "无论", "既", "既是", "既然", "时候", "是", "是的", "替", "有", "有些", "有关", "有的", "望", "朝", "朝着", "本", "本着", "来", "来着", "极了", "果然", "果真", "某", "某个", "某些", "根据", "正如", "此", "此外", "此间", "毋宁", "每", "每当", "比", "比如", "比方", "沿", "沿着", "漫说", "焉", "然则", "然后", "然而", "照", "照着", "甚么", "甚而", "甚至", "用", "由", "由于", "由此可见", "的", "的话", "相对而言", "省得", "着", "着呢", "矣", "离", "第", "等", "等等", "管", "紧接着", "纵", "纵令", "纵使", "纵然", "经", "经过", "结果", "给", "继而", "综上所述", "罢了", "者", "而", "而且", "而况", "而外", "而已", "而是", "而言", "能", "腾", "自", "自个儿", "自从", "自各儿", "自家", "自己", "自身", "至", "至于", "若", "若是", "若非", "莫若", "虽", "虽则", "虽然", "虽说", "被", "要", "要不", "要不是", "要不然", "要么", "要是", "让", "论", "设使", "设若", "该", "诸位", "谁", "谁知", "赶", "起", "起见", "趁", "趁着", "越是", "跟", "较", "较之", "边", "过", "还是", "还有", "这", "这个", "这么", "这么些", "这么样", "这么点儿", "这些", "这会儿", "这儿", "这就是说", "这时", "这样", "这边", "这里", "进而", "连", "连同", "通过", "遵照", "那", "那个", "那么", "那么些", "那么样", "那些", "那会儿", "那儿", "那时", "那样", "那边", "那里", "鄙人", "鉴于", "阿", "除", "除了", "除此之外", "除非", "随", "随着", "零", "非但", "非徒", "靠", "顺", "顺着", "首先", "︿", "！", "＃", "＄", "％", "＆", "（", "）", "＊", "＋", "，", "０", "１", "２", "３", "４", "５", "６", "７", "８", "９", "：", "；", "＜", "＞", "？", "＠", "［", "］", "｛", "｜", "｝", "～", "￥"],
        //"eo": ["adiaŭ", "ajn", "al", "ankoraŭ", "antaŭ", "aŭ", "bonan", "bonvole", "bonvolu", "bv", "ci", "cia", "cian", "cin", "d-ro", "da", "de", "dek", "deka", "do", "doktor'", "doktoro", "du", "dua", "dum", "eble", "ekz", "ekzemple", "en", "estas", "estis", "estos", "estu", "estus", "eĉ", "f-no", "feliĉan", "for", "fraŭlino", "ha", "havas", "havis", "havos", "havu", "havus", "he", "ho", "hu", "ili", "ilia", "ilian", "ilin", "inter", "io", "ion", "iu", "iujn", "iun", "ja", "jam", "je", "jes", "k", "kaj", "ke", "kio", "kion", "kiu", "kiujn", "kiun", "kvankam", "kvar", "kvara", "kvazaŭ", "kvin", "kvina", "la", "li", "lia", "lian", "lin", "malantaŭ", "male", "malgraŭ", "mem", "mi", "mia", "mian", "min", "minus", "naŭ", "naŭa", "ne", "nek", "nenio", "nenion", "neniu", "neniun", "nepre", "ni", "nia", "nian", "nin", "nu", "nun", "nur", "ok", "oka", "oni", "onia", "onian", "onin", "plej", "pli", "plu", "plus", "por", "post", "preter", "s-no", "s-ro", "se", "sed", "sep", "sepa", "ses", "sesa", "si", "sia", "sian", "sin", "sinjor'", "sinjorino", "sinjoro", "sub", "super", "supren", "sur", "tamen", "tio", "tion", "tiu", "tiujn", "tiun", "tra", "tri", "tria", "tuj", "tute", "unu", "unua", "ve", "verŝajne", "vi", "via", "vian", "vin", "ĉi", "ĉio", "ĉion", "ĉiu", "ĉiujn", "ĉiun", "ĉu", "ĝi", "ĝia", "ĝian", "ĝin", "ĝis", "ĵus", "ŝi", "ŝia", "ŝin"],
        //"he": ["אבל", "או", "אולי", "אותה", "אותו", "אותי", "אותך", "אותם", "אותן", "אותנו", "אז", "אחר", "אחרות", "אחרי", "אחריכן", "אחרים", "אחרת", "אי", "איזה", "איך", "אין", "איפה", "איתה", "איתו", "איתי", "איתך", "איתכם", "איתכן", "איתם", "איתן", "איתנו", "אך", "אל", "אלה", "אלו", "אם", "אנחנו", "אני", "אס", "אף", "אצל", "אשר", "את", "אתה", "אתכם", "אתכן", "אתם", "אתן", "באיזומידה", "באמצע", "באמצעות", "בגלל", "בין", "בלי", "במידה", "במקוםשבו", "ברם", "בשביל", "בשעהש", "בתוך", "גם", "דרך", "הוא", "היא", "היה", "היכן", "היתה", "היתי", "הם", "הן", "הנה", "הסיבהשבגללה", "הרי", "ואילו", "ואת", "זאת", "זה", "זות", "יהיה", "יוכל", "יוכלו", "יותרמדי", "יכול", "יכולה", "יכולות", "יכולים", "יכל", "יכלה", "יכלו", "יש", "כאן", "כאשר", "כולם", "כולן", "כזה", "כי", "כיצד", "כך", "ככה", "כל", "כלל", "כמו", "כן", "כפי", "כש", "לא", "לאו", "לאיזותכלית", "לאן", "לבין", "לה", "להיות", "להם", "להן", "לו", "לי", "לכם", "לכן", "למה", "למטה", "למעלה", "למקוםשבו", "למרות", "לנו", "לעבר", "לעיכן", "לפיכך", "לפני", "מאד", "מאחורי", "מאיזוסיבה", "מאין", "מאיפה", "מבלי", "מבעד", "מדוע", "מה", "מהיכן", "מול", "מחוץ", "מי", "מכאן", "מכיוון", "מלבד", "מן", "מנין", "מסוגל", "מעט", "מעטים", "מעל", "מצד", "מקוםבו", "מתחת", "מתי", "נגד", "נגר", "נו", "עד", "עז", "על", "עלי", "עליה", "עליהם", "עליהן", "עליו", "עליך", "עליכם", "עלינו", "עם", "עצמה", "עצמהם", "עצמהן", "עצמו", "עצמי", "עצמם", "עצמן", "עצמנו", "פה", "רק", "שוב", "של", "שלה", "שלהם", "שלהן", "שלו", "שלי", "שלך", "שלכה", "שלכם", "שלכן", "שלנו", "שם", "תהיה", "תחת"],
        //"la": ["a", "ab", "ac", "ad", "at", "atque", "aut", "autem", "cum", "de", "dum", "e", "erant", "erat", "est", "et", "etiam", "ex", "haec", "hic", "hoc", "in", "ita", "me", "nec", "neque", "non", "per", "qua", "quae", "quam", "qui", "quibus", "quidem", "quo", "quod", "re", "rebus", "rem", "res", "sed", "si", "sic", "sunt", "tamen", "tandem", "te", "ut", "vel"],
        //"sk": ["a", "aby", "aj", "ako", "aký", "ale", "alebo", "ani", "avšak", "ba", "bez", "buï", "cez", "do", "ho", "hoci", "i", "ich", "im", "ja", "jeho", "jej", "jemu", "ju", "k", "kam", "kde", "kedže", "keï", "kto", "ktorý", "ku", "lebo", "ma", "mi", "mne", "mnou", "mu", "my", "mòa", "môj", "na", "nad", "nami", "neho", "nej", "nemu", "nich", "nielen", "nim", "no", "nám", "nás", "náš", "ním", "o", "od", "on", "ona", "oni", "ono", "ony", "po", "pod", "pre", "pred", "pri", "s", "sa", "seba", "sem", "so", "svoj", "taký", "tam", "teba", "tebe", "tebou", "tej", "ten", "ti", "tie", "to", "toho", "tomu", "tou", "tvoj", "ty", "tá", "tým", "v", "vami", "veï", "vo", "vy", "vám", "vás", "váš", "však", "z", "za", "zo", "a", "èi", "èo", "èí", "òom", "òou", "òu", "že"],
        //"sl": ["a", "ali", "april", "avgust", "b", "bi", "bil", "bila", "bile", "bili", "bilo", "biti", "blizu", "bo", "bodo", "bojo", "bolj", "bom", "bomo", "boste", "bova", "boš", "brez", "c", "cel", "cela", "celi", "celo", "d", "da", "daleč", "dan", "danes", "datum", "december", "deset", "deseta", "deseti", "deseto", "devet", "deveta", "deveti", "deveto", "do", "dober", "dobra", "dobri", "dobro", "dokler", "dol", "dolg", "dolga", "dolgi", "dovolj", "drug", "druga", "drugi", "drugo", "dva", "dve", "e", "eden", "en", "ena", "ene", "eni", "enkrat", "eno", "etc.", "f", "februar", "g", "g.", "ga", "ga.", "gor", "gospa", "gospod", "h", "halo", "i", "idr.", "ii", "iii", "in", "iv", "ix", "iz", "j", "januar", "jaz", "je", "ji", "jih", "jim", "jo", "julij", "junij", "jutri", "k", "kadarkoli", "kaj", "kajti", "kako", "kakor", "kamor", "kamorkoli", "kar", "karkoli", "katerikoli", "kdaj", "kdo", "kdorkoli", "ker", "ki", "kje", "kjer", "kjerkoli", "ko", "koder", "koderkoli", "koga", "komu", "kot", "kratek", "kratka", "kratke", "kratki", "l", "lahka", "lahke", "lahki", "lahko", "le", "lep", "lepa", "lepe", "lepi", "lepo", "leto", "m", "maj", "majhen", "majhna", "majhni", "malce", "malo", "manj", "marec", "me", "med", "medtem", "mene", "mesec", "mi", "midva", "midve", "mnogo", "moj", "moja", "moje", "mora", "morajo", "moram", "moramo", "morate", "moraš", "morem", "mu", "n", "na", "nad", "naj", "najina", "najino", "najmanj", "naju", "največ", "nam", "narobe", "nas", "nato", "nazaj", "naš", "naša", "naše", "ne", "nedavno", "nedelja", "nek", "neka", "nekaj", "nekatere", "nekateri", "nekatero", "nekdo", "neke", "nekega", "neki", "nekje", "neko", "nekoga", "nekoč", "ni", "nikamor", "nikdar", "nikjer", "nikoli", "nič", "nje", "njega", "njegov", "njegova", "njegovo", "njej", "njemu", "njen", "njena", "njeno", "nji", "njih", "njihov", "njihova", "njihovo", "njiju", "njim", "njo", "njun", "njuna", "njuno", "no", "nocoj", "november", "npr.", "o", "ob", "oba", "obe", "oboje", "od", "odprt", "odprta", "odprti", "okoli", "oktober", "on", "onadva", "one", "oni", "onidve", "osem", "osma", "osmi", "osmo", "oz.", "p", "pa", "pet", "peta", "petek", "peti", "peto", "po", "pod", "pogosto", "poleg", "poln", "polna", "polni", "polno", "ponavadi", "ponedeljek", "ponovno", "potem", "povsod", "pozdravljen", "pozdravljeni", "prav", "prava", "prave", "pravi", "pravo", "prazen", "prazna", "prazno", "prbl.", "precej", "pred", "prej", "preko", "pri", "pribl.", "približno", "primer", "pripravljen", "pripravljena", "pripravljeni", "proti", "prva", "prvi", "prvo", "r", "ravno", "redko", "res", "reč", "s", "saj", "sam", "sama", "same", "sami", "samo", "se", "sebe", "sebi", "sedaj", "sedem", "sedma", "sedmi", "sedmo", "sem", "september", "seveda", "si", "sicer", "skoraj", "skozi", "slab", "smo", "so", "sobota", "spet", "sreda", "srednja", "srednji", "sta", "ste", "stran", "stvar", "sva", "t", "ta", "tak", "taka", "take", "taki", "tako", "takoj", "tam", "te", "tebe", "tebi", "tega", "težak", "težka", "težki", "težko", "ti", "tista", "tiste", "tisti", "tisto", "tj.", "tja", "to", "toda", "torek", "tretja", "tretje", "tretji", "tri", "tu", "tudi", "tukaj", "tvoj", "tvoja", "tvoje", "u", "v", "vaju", "vam", "vas", "vaš", "vaša", "vaše", "ve", "vedno", "velik", "velika", "veliki", "veliko", "vendar", "ves", "več", "vi", "vidva", "vii", "viii", "visok", "visoka", "visoke", "visoki", "vsa", "vsaj", "vsak", "vsaka", "vsakdo", "vsake", "vsaki", "vsakomur", "vse", "vsega", "vsi", "vso", "včasih", "včeraj", "x", "z", "za", "zadaj", "zadnji", "zakaj", "zaprta", "zaprti", "zaprto", "zdaj", "zelo", "zunaj", "č", "če", "često", "četrta", "četrtek", "četrti", "četrto", "čez", "čigav", "š", "šest", "šesta", "šesti", "šesto", "štiri", "ž", "že"],
        //"br": ["a", "ainda", "alem", "ambas", "ambos", "antes", "ao", "aonde", "aos", "apos", "aquele", "aqueles", "as", "assim", "com", "como", "contra", "contudo", "cuja", "cujas", "cujo", "cujos", "da", "das", "de", "dela", "dele", "deles", "demais", "depois", "desde", "desta", "deste", "dispoe", "dispoem", "diversa", "diversas", "diversos", "do", "dos", "durante", "e", "ela", "elas", "ele", "eles", "em", "entao", "entre", "essa", "essas", "esse", "esses", "esta", "estas", "este", "estes", "ha", "isso", "isto", "logo", "mais", "mas", "mediante", "menos", "mesma", "mesmas", "mesmo", "mesmos", "na", "nao", "nas", "nem", "nesse", "neste", "nos", "o", "os", "ou", "outra", "outras", "outro", "outros", "pelas", "pelo", "pelos", "perante", "pois", "por", "porque", "portanto", "propios", "proprio", "quais", "qual", "qualquer", "quando", "quanto", "que", "quem", "quer", "se", "seja", "sem", "sendo", "seu", "seus", "sob", "sobre", "sua", "suas", "tal", "tambem", "teu", "teus", "toda", "todas", "todo", "todos", "tua", "tuas", "tudo", "um", "uma", "umas", "uns"],
        //"ca": ["a", "abans", "ací", "ah", "així", "això", "al", "aleshores", "algun", "alguna", "algunes", "alguns", "alhora", "allà", "allí", "allò", "als", "altra", "altre", "altres", "amb", "ambdues", "ambdós", "apa", "aquell", "aquella", "aquelles", "aquells", "aquest", "aquesta", "aquestes", "aquests", "aquí", "baix", "cada", "cadascuna", "cadascunes", "cadascuns", "cadascú", "com", "contra", "d'un", "d'una", "d'unes", "d'uns", "dalt", "de", "del", "dels", "des", "després", "dins", "dintre", "donat", "doncs", "durant", "e", "eh", "el", "els", "em", "en", "encara", "ens", "entre", "eren", "es", "esta", "estaven", "esteu", "està", "estàvem", "estàveu", "et", "etc", "ets", "fins", "fora", "gairebé", "ha", "han", "has", "havia", "he", "hem", "heu", "hi", "ho", "i", "igual", "iguals", "ja", "l'hi", "la", "les", "li", "li'n", "llavors", "m'he", "ma", "mal", "malgrat", "mateix", "mateixa", "mateixes", "mateixos", "me", "mentre", "meu", "meus", "meva", "meves", "molt", "molta", "moltes", "molts", "mon", "mons", "més", "n'he", "n'hi", "ne", "ni", "no", "nogensmenys", "només", "nosaltres", "nostra", "nostre", "nostres", "o", "oh", "oi", "on", "pas", "pel", "pels", "per", "perquè", "però", "poc", "poca", "pocs", "poques", "potser", "propi", "qual", "quals", "quan", "quant", "que", "quelcom", "qui", "quin", "quina", "quines", "quins", "què", "s'ha", "s'han", "sa", "semblant", "semblants", "ses", "seu", "seus", "seva", "seves", "si", "sobre", "sobretot", "solament", "sols", "son", "sons", "sota", "sou", "sóc", "són", "t'ha", "t'han", "t'he", "ta", "tal", "també", "tampoc", "tan", "tant", "tanta", "tantes", "teu", "teus", "teva", "teves", "ton", "tons", "tot", "tota", "totes", "tots", "un", "una", "unes", "uns", "us", "va", "vaig", "vam", "van", "vas", "veu", "vosaltres", "vostra", "vostre", "vostres", "érem", "éreu", "és"],
        //"cs": ["a", "aby", "ahoj", "aj", "ale", "anebo", "ani", "ano", "asi", "aspoň", "atd", "atp", "ačkoli", "až", "bez", "beze", "blízko", "bohužel", "brzo", "bude", "budem", "budeme", "budete", "budeš", "budou", "budu", "by", "byl", "byla", "byli", "bylo", "byly", "bys", "být", "během", "chce", "chceme", "chcete", "chceš", "chci", "chtít", "chtějí", "chut'", "chuti", "co", "což", "cz", "daleko", "další", "den", "deset", "devatenáct", "devět", "dnes", "do", "dobrý", "docela", "dva", "dvacet", "dvanáct", "dvě", "dál", "dále", "děkovat", "děkujeme", "děkuji", "ho", "hodně", "i", "jak", "jakmile", "jako", "jakož", "jde", "je", "jeden", "jedenáct", "jedna", "jedno", "jednou", "jedou", "jeho", "jehož", "jej", "jejich", "její", "jelikož", "jemu", "jen", "jenom", "jestli", "jestliže", "ještě", "jež", "ji", "jich", "jimi", "jinak", "jiné", "již", "jsem", "jseš", "jsi", "jsme", "jsou", "jste", "já", "jí", "jím", "jíž", "k", "kam", "kde", "kdo", "kdy", "když", "ke", "kolik", "kromě", "kterou", "která", "které", "který", "kteří", "kvůli", "mají", "mezi", "mi", "mne", "mnou", "mně", "moc", "mohl", "mohou", "moje", "moji", "možná", "musí", "my", "má", "málo", "mám", "máme", "máte", "máš", "mé", "mí", "mít", "mě", "můj", "může", "na", "nad", "nade", "napište", "naproti", "načež", "naše", "naši", "ne", "nebo", "nebyl", "nebyla", "nebyli", "nebyly", "nedělají", "nedělá", "nedělám", "neděláme", "neděláte", "neděláš", "neg", "nejsi", "nejsou", "nemají", "nemáme", "nemáte", "neměl", "není", "nestačí", "nevadí", "než", "nic", "nich", "nimi", "nové", "nový", "nula", "nám", "námi", "nás", "náš", "ním", "ně", "něco", "nějak", "někde", "někdo", "němu", "němuž", "o", "od", "ode", "on", "ona", "oni", "ono", "ony", "osm", "osmnáct", "pak", "patnáct", "po", "pod", "podle", "pokud", "potom", "pouze", "pozdě", "pořád", "pravé", "pro", "prostě", "prosím", "proti", "proto", "protože", "proč", "první", "pta", "pět", "před", "přes", "přese", "při", "přičemž", "re", "rovně", "s", "se", "sedm", "sedmnáct", "si", "skoro", "smí", "smějí", "snad", "spolu", "sta", "sto", "strana", "sté", "své", "svých", "svým", "svými", "ta", "tady", "tak", "takhle", "taky", "také", "takže", "tam", "tamhle", "tamhleto", "tamto", "tato", "tebe", "tebou", "ted'", "tedy", "ten", "tento", "teto", "ti", "tipy", "tisíc", "tisíce", "to", "tobě", "tohle", "toho", "tohoto", "tom", "tomto", "tomu", "tomuto", "toto", "trošku", "tu", "tuto", "tvoje", "tvá", "tvé", "tvůj", "ty", "tyto", "téma", "tím", "tímto", "tě", "těm", "těmu", "třeba", "tři", "třináct", "u", "určitě", "už", "v", "vaše", "vaši", "ve", "vedle", "večer", "vlastně", "vy", "vám", "vámi", "vás", "váš", "více", "však", "všechno", "všichni", "vůbec", "vždy", "z", "za", "zatímco", "zač", "zda", "zde", "ze", "zprávy", "zpět", "čau", "či", "článku", "články", "čtrnáct", "čtyři", "šest", "šestnáct", "že"],
        //"el": ["αλλα", "αν", "αντι", "απο", "αυτα", "αυτεσ", "αυτη", "αυτο", "αυτοι", "αυτοσ", "αυτουσ", "αυτων", "για", "δε", "δεν", "εαν", "ειμαι", "ειμαστε", "ειναι", "εισαι", "ειστε", "εκεινα", "εκεινεσ", "εκεινη", "εκεινο", "εκεινοι", "εκεινοσ", "εκεινουσ", "εκεινων", "ενω", "επι", "η", "θα", "ισωσ", "κ", "και", "κατα", "κι", "μα", "με", "μετα", "μη", "μην", "να", "ο", "οι", "ομωσ", "οπωσ", "οσο", "οτι", "παρα", "ποια", "ποιεσ", "ποιο", "ποιοι", "ποιοσ", "ποιουσ", "ποιων", "που", "προσ", "πωσ", "σε", "στη", "στην", "στο", "στον", "τα", "την", "τησ", "το", "τον", "τοτε", "του", "των", "ωσ"],
        //"eu": ["al", "anitz", "arabera", "asko", "baina", "bat", "batean", "batek", "bati", "batzuei", "batzuek", "batzuetan", "batzuk", "bera", "beraiek", "berau", "berauek", "bere", "berori", "beroriek", "beste", "bezala", "da", "dago", "dira", "ditu", "du", "dute", "edo", "egin", "ere", "eta", "eurak", "ez", "gainera", "gu", "gutxi", "guzti", "haiei", "haiek", "haietan", "hainbeste", "hala", "han", "handik", "hango", "hara", "hari", "hark", "hartan", "hau", "hauei", "hauek", "hauetan", "hemen", "hemendik", "hemengo", "hi", "hona", "honek", "honela", "honetan", "honi", "hor", "hori", "horiei", "horiek", "horietan", "horko", "horra", "horrek", "horrela", "horretan", "horri", "hortik", "hura", "izan", "ni", "noiz", "nola", "non", "nondik", "nongo", "nor", "nora", "ze", "zein", "zen", "zenbait", "zenbat", "zer", "zergatik", "ziren", "zituen", "zu", "zuek", "zuen", "zuten"],
        //"ga": ["a", "ach", "ag", "agus", "an", "aon", "ar", "arna", "as", "b'", "ba", "beirt", "bhúr", "caoga", "ceathair", "ceathrar", "chomh", "chtó", "chuig", "chun", "cois", "céad", "cúig", "cúigear", "d'", "daichead", "dar", "de", "deich", "deichniúr", "den", "dhá", "do", "don", "dtí", "dá", "dár", "dó", "faoi", "faoin", "faoina", "faoinár", "fara", "fiche", "gach", "gan", "go", "gur", "haon", "hocht", "i", "iad", "idir", "in", "ina", "ins", "inár", "is", "le", "leis", "lena", "lenár", "m'", "mar", "mo", "mé", "na", "nach", "naoi", "naonúr", "ná", "ní", "níor", "nó", "nócha", "ocht", "ochtar", "os", "roimh", "sa", "seacht", "seachtar", "seachtó", "seasca", "seisear", "siad", "sibh", "sinn", "sna", "sé", "sí", "tar", "thar", "thú", "triúr", "trí", "trína", "trínár", "tríocha", "tú", "um", "ár", "é", "éis", "í", "ó", "ón", "óna", "ónár"],
        //"gl": ["a", "alí", "ao", "aos", "aquel", "aquela", "aquelas", "aqueles", "aquilo", "aquí", "as", "así", "aínda", "ben", "cando", "che", "co", "coa", "coas", "comigo", "con", "connosco", "contigo", "convosco", "cos", "cun", "cunha", "cunhas", "cuns", "da", "dalgunha", "dalgunhas", "dalgún", "dalgúns", "das", "de", "del", "dela", "delas", "deles", "desde", "deste", "do", "dos", "dun", "dunha", "dunhas", "duns", "e", "el", "ela", "elas", "eles", "en", "era", "eran", "esa", "esas", "ese", "eses", "esta", "estaba", "estar", "este", "estes", "estiven", "estou", "está", "están", "eu", "facer", "foi", "foron", "fun", "había", "hai", "iso", "isto", "la", "las", "lle", "lles", "lo", "los", "mais", "me", "meu", "meus", "min", "miña", "miñas", "moi", "na", "nas", "neste", "nin", "no", "non", "nos", "nosa", "nosas", "noso", "nosos", "nun", "nunha", "nunhas", "nuns", "nós", "o", "os", "ou", "para", "pero", "pode", "pois", "pola", "polas", "polo", "polos", "por", "que", "se", "senón", "ser", "seu", "seus", "sexa", "sido", "sobre", "súa", "súas", "tamén", "tan", "te", "ten", "ter", "teu", "teus", "teñen", "teño", "ti", "tido", "tiven", "tiña", "túa", "túas", "un", "unha", "unhas", "uns", "vos", "vosa", "vosas", "voso", "vosos", "vós", "á", "é", "ó", "ós"],
        //"hy": ["այդ", "այլ", "այն", "այս", "դու", "դուք", "եմ", "են", "ենք", "ես", "եք", "է", "էի", "էին", "էինք", "էիր", "էիք", "էր", "ըստ", "թ", "ի", "ին", "իսկ", "իր", "կամ", "համար", "հետ", "հետո", "մենք", "մեջ", "մի", "ն", "նա", "նաև", "նրա", "նրանք", "որ", "որը", "որոնք", "որպես", "ու", "ում", "պիտի", "վրա", "և"],
        //"id": ["ada", "adalah", "adanya", "adapun", "agak", "agaknya", "agar", "akan", "akankah", "akhirnya", "aku", "akulah", "amat", "amatlah", "anda", "andalah", "antar", "antara", "antaranya", "apa", "apaan", "apabila", "apakah", "apalagi", "apatah", "atau", "ataukah", "ataupun", "bagai", "bagaikan", "bagaimana", "bagaimanakah", "bagaimanapun", "bagi", "bahkan", "bahwa", "bahwasanya", "banyak", "beberapa", "begini", "beginian", "beginikah", "beginilah", "begitu", "begitukah", "begitulah", "begitupun", "belum", "belumlah", "berapa", "berapakah", "berapalah", "berapapun", "bermacam", "bersama", "betulkah", "biasa", "biasanya", "bila", "bilakah", "bisa", "bisakah", "boleh", "bolehkah", "bolehlah", "buat", "bukan", "bukankah", "bukanlah", "bukannya", "cuma", "dahulu", "dalam", "dan", "dapat", "dari", "daripada", "dekat", "demi", "demikian", "demikianlah", "dengan", "depan", "di", "dia", "dialah", "diantara", "diantaranya", "dikarenakan", "dini", "diri", "dirinya", "disini", "disinilah", "dong", "dulu", "enggak", "enggaknya", "entah", "entahlah", "hal", "hampir", "hanya", "hanyalah", "harus", "haruslah", "harusnya", "hendak", "hendaklah", "hendaknya", "hingga", "ia", "ialah", "ibarat", "ingin", "inginkah", "inginkan", "ini", "inikah", "inilah", "itu", "itukah", "itulah", "jangan", "jangankan", "janganlah", "jika", "jikalau", "juga", "justru", "kala", "kalau", "kalaulah", "kalaupun", "kalian", "kami", "kamilah", "kamu", "kamulah", "kan", "kapan", "kapankah", "kapanpun", "karena", "karenanya", "ke", "kecil", "kemudian", "kenapa", "kepada", "kepadanya", "ketika", "khususnya", "kini", "kinilah", "kiranya", "kita", "kitalah", "kok", "lagi", "lagian", "lah", "lain", "lainnya", "lalu", "lama", "lamanya", "lebih", "macam", "maka", "makanya", "makin", "malah", "malahan", "mampu", "mampukah", "mana", "manakala", "manalagi", "masih", "masihkah", "masing", "mau", "maupun", "melainkan", "melalui", "memang", "mengapa", "mereka", "merekalah", "merupakan", "meski", "meskipun", "mungkin", "mungkinkah", "nah", "namun", "nanti", "nantinya", "nyaris", "oleh", "olehnya", "pada", "padahal", "padanya", "paling", "pantas", "para", "pasti", "pastilah", "per", "percuma", "pernah", "pula", "pun", "rupanya", "saat", "saatnya", "saja", "sajalah", "saling", "sama", "sambil", "sampai", "sana", "sangat", "sangatlah", "saya", "sayalah", "se", "sebab", "sebabnya", "sebagai", "sebagaimana", "sebagainya", "sebaliknya", "sebanyak", "sebegini", "sebegitu", "sebelum", "sebelumnya", "sebenarnya", "seberapa", "sebetulnya", "sebisanya", "sebuah", "sedang", "sedangkan", "sedemikian", "sedikit", "sedikitnya", "segala", "segalanya", "segera", "seharusnya", "sehingga", "sejak", "sejenak", "sekali", "sekalian", "sekaligus", "sekalipun", "sekarang", "seketika", "sekiranya", "sekitar", "sekitarnya", "sela", "selagi", "selain", "selaku", "selalu", "selama", "selamanya", "seluruh", "seluruhnya", "semacam", "semakin", "semasih", "semaunya", "sementara", "sempat", "semua", "semuanya", "semula", "sendiri", "sendirinya", "seolah", "seorang", "sepanjang", "sepantasnya", "sepantasnyalah", "seperti", "sepertinya", "sering", "seringnya", "serta", "serupa", "sesaat", "sesama", "sesegera", "sesekali", "seseorang", "sesuatu", "sesuatunya", "sesudah", "sesudahnya", "setelah", "seterusnya", "setiap", "setidaknya", "sewaktu", "siapa", "siapakah", "siapapun", "sini", "sinilah", "suatu", "sudah", "sudahkah", "sudahlah", "supaya", "tadi", "tadinya", "tak", "tanpa", "tapi", "telah", "tentang", "tentu", "tentulah", "tentunya", "terdiri", "terhadap", "terhadapnya", "terlalu", "terlebih", "tersebut", "tersebutlah", "tertentu", "tetapi", "tiap", "tidak", "tidakkah", "tidaklah", "toh", "waduh", "wah", "wahai", "walau", "walaupun", "wong", "yaitu", "yakni", "yang"],
        //"ja": ["あっ", "あり", "ある", "い", "いう", "いる", "う", "うち", "お", "および", "おり", "か", "かつて", "から", "が", "き", "ここ", "こと", "この", "これ", "これら", "さ", "さらに", "し", "しかし", "する", "ず", "せ", "せる", "そして", "その", "その他", "その後", "それ", "それぞれ", "た", "ただし", "たち", "ため", "たり", "だ", "だっ", "つ", "て", "で", "でき", "できる", "です", "では", "でも", "と", "という", "といった", "とき", "ところ", "として", "とともに", "とも", "と共に", "な", "ない", "なお", "なかっ", "ながら", "なく", "なっ", "など", "なら", "なり", "なる", "に", "において", "における", "について", "にて", "によって", "により", "による", "に対して", "に対する", "に関する", "の", "ので", "のみ", "は", "ば", "へ", "ほか", "ほとんど", "ほど", "ます", "また", "または", "まで", "も", "もの", "ものの", "や", "よう", "より", "ら", "られ", "られる", "れ", "れる", "を", "ん", "及び", "特に"],
        //"lv": ["aiz", "ap", "apakš", "apakšpus", "ar", "arī", "augšpus", "bet", "bez", "bija", "biji", "biju", "bijām", "bijāt", "būs", "būsi", "būsiet", "būsim", "būt", "būšu", "caur", "diemžēl", "diezin", "droši", "dēļ", "esam", "esat", "esi", "esmu", "gan", "gar", "iekam", "iekams", "iekām", "iekāms", "iekš", "iekšpus", "ik", "ir", "it", "itin", "iz", "ja", "jau", "jeb", "jebšu", "jel", "jo", "jā", "ka", "kamēr", "kaut", "kolīdz", "kopš", "kā", "kļuva", "kļuvi", "kļuvu", "kļuvām", "kļuvāt", "kļūs", "kļūsi", "kļūsiet", "kļūsim", "kļūst", "kļūstam", "kļūstat", "kļūsti", "kļūstu", "kļūt", "kļūšu", "labad", "lai", "lejpus", "līdz", "līdzko", "ne", "nebūt", "nedz", "nekā", "nevis", "nezin", "no", "nu", "nē", "otrpus", "pa", "par", "pat", "pie", "pirms", "pret", "priekš", "pār", "pēc", "starp", "tad", "tak", "tapi", "taps", "tapsi", "tapsiet", "tapsim", "tapt", "tapāt", "tapšu", "taču", "te", "tiec", "tiek", "tiekam", "tiekat", "tieku", "tik", "tika", "tikai", "tiki", "tikko", "tiklab", "tiklīdz", "tiks", "tiksiet", "tiksim", "tikt", "tiku", "tikvien", "tikām", "tikāt", "tikšu", "tomēr", "topat", "turpretim", "turpretī", "tā", "tādēļ", "tālab", "tāpēc", "un", "uz", "vai", "var", "varat", "varēja", "varēji", "varēju", "varējām", "varējāt", "varēs", "varēsi", "varēsiet", "varēsim", "varēt", "varēšu", "vien", "virs", "virspus", "vis", "viņpus", "zem", "ārpus", "šaipus"],
        //"th": ["กล่าว", "กว่า", "กัน", "กับ", "การ", "ก็", "ก่อน", "ขณะ", "ขอ", "ของ", "ขึ้น", "คง", "ครั้ง", "ความ", "คือ", "จะ", "จัด", "จาก", "จึง", "ช่วง", "ซึ่ง", "ดัง", "ด้วย", "ด้าน", "ตั้ง", "ตั้งแต่", "ตาม", "ต่อ", "ต่าง", "ต่างๆ", "ต้อง", "ถึง", "ถูก", "ถ้า", "ทั้ง", "ทั้งนี้", "ทาง", "ที่", "ที่สุด", "ทุก", "ทํา", "ทําให้", "นอกจาก", "นัก", "นั้น", "นี้", "น่า", "นํา", "บาง", "ผล", "ผ่าน", "พบ", "พร้อม", "มา", "มาก", "มี", "ยัง", "รวม", "ระหว่าง", "รับ", "ราย", "ร่วม", "ลง", "วัน", "ว่า", "สุด", "ส่ง", "ส่วน", "สําหรับ", "หนึ่ง", "หรือ", "หลัง", "หลังจาก", "หลาย", "หาก", "อยาก", "อยู่", "อย่าง", "ออก", "อะไร", "อาจ", "อีก", "เขา", "เข้า", "เคย", "เฉพาะ", "เช่น", "เดียว", "เดียวกัน", "เนื่องจาก", "เปิด", "เปิดเผย", "เป็น", "เป็นการ", "เพราะ", "เพื่อ", "เมื่อ", "เรา", "เริ่ม", "เลย", "เห็น", "เอง", "แต่", "แบบ", "แรก", "และ", "แล้ว", "แห่ง", "โดย", "ใน", "ให้", "ได้", "ไป", "ไม่", "ไว้"],
        //"ar": ["،", "أ", "ا", "اثر", "اجل", "احد", "اخرى", "اذا", "اربعة", "اطار", "اعادة", "اعلنت", "اف", "اكثر", "اكد", "الا", "الاخيرة", "الان", "الاول", "الاولى", "التى", "التي", "الثاني", "الثانية", "الذاتي", "الذى", "الذي", "الذين", "السابق", "الف", "الماضي", "المقبل", "الوقت", "الى", "اليوم", "اما", "امام", "امس", "ان", "انه", "انها", "او", "اول", "اي", "ايار", "ايام", "ايضا", "ب", "باسم", "بان", "برس", "بسبب", "بشكل", "بعد", "بعض", "بن", "به", "بها", "بين", "تم", "ثلاثة", "ثم", "جميع", "حاليا", "حتى", "حوالى", "حول", "حيث", "حين", "خلال", "دون", "ذلك", "زيارة", "سنة", "سنوات", "شخصا", "صباح", "صفر", "ضد", "ضمن", "عام", "عاما", "عدة", "عدد", "عدم", "عشر", "عشرة", "على", "عليه", "عليها", "عن", "عند", "عندما", "غدا", "غير", "ـ", "ف", "فان", "فى", "في", "فيه", "فيها", "قال", "قبل", "قد", "قوة", "كان", "كانت", "كل", "كلم", "كما", "لا", "لدى", "لقاء", "لكن", "للامم", "لم", "لن", "له", "لها", "لوكالة", "ما", "مايو", "مساء", "مع", "مقابل", "مليار", "مليون", "من", "منذ", "منها", "نحو", "نفسه", "نهاية", "هذا", "هذه", "هناك", "هو", "هي", "و", "و6", "واحد", "واضاف", "واضافت", "واكد", "وان", "واوضح", "وفي", "وقال", "وقالت", "وقد", "وقف", "وكان", "وكانت", "ولا", "ولم", "ومن", "وهو", "وهي", "يكون", "يمكن", "يوم"],
        //"bg": ["а", "автентичен", "аз", "ако", "ала", "бе", "без", "беше", "би", "бивш", "бивша", "бившо", "бил", "била", "били", "било", "благодаря", "близо", "бъдат", "бъде", "бяха", "в", "вас", "ваш", "ваша", "вероятно", "вече", "взема", "ви", "вие", "винаги", "внимава", "време", "все", "всеки", "всички", "всичко", "всяка", "във", "въпреки", "върху", "г", "ги", "главен", "главна", "главно", "глас", "го", "година", "години", "годишен", "д", "да", "дали", "два", "двама", "двамата", "две", "двете", "ден", "днес", "дни", "до", "добра", "добре", "добро", "добър", "докато", "докога", "дори", "досега", "доста", "друг", "друга", "други", "е", "евтин", "едва", "един", "една", "еднаква", "еднакви", "еднакъв", "едно", "екип", "ето", "живот", "за", "забавям", "зад", "заедно", "заради", "засега", "заспал", "затова", "защо", "защото", "и", "из", "или", "им", "има", "имат", "иска", "й", "каза", "как", "каква", "какво", "както", "какъв", "като", "кога", "когато", "което", "които", "кой", "който", "колко", "която", "къде", "където", "към", "лесен", "лесно", "ли", "лош", "м", "май", "малко", "ме", "между", "мек", "мен", "месец", "ми", "много", "мнозина", "мога", "могат", "може", "мокър", "моля", "момента", "му", "н", "на", "над", "назад", "най", "направи", "напред", "например", "нас", "не", "него", "нещо", "нея", "ни", "ние", "никой", "нито", "нищо", "но", "нов", "нова", "нови", "новина", "някои", "някой", "няколко", "няма", "обаче", "около", "освен", "особено", "от", "отгоре", "отново", "още", "пак", "по", "повече", "повечето", "под", "поне", "поради", "после", "почти", "прави", "пред", "преди", "през", "при", "пък", "първата", "първи", "първо", "пъти", "равен", "равна", "с", "са", "сам", "само", "се", "сега", "си", "син", "скоро", "след", "следващ", "сме", "смях", "според", "сред", "срещу", "сте", "съм", "със", "също", "т", "т.н.", "тази", "така", "такива", "такъв", "там", "твой", "те", "тези", "ти", "то", "това", "тогава", "този", "той", "толкова", "точно", "три", "трябва", "тук", "тъй", "тя", "тях", "у", "утре", "харесва", "хиляди", "ч", "часа", "че", "често", "чрез", "ще", "щом", "юмрук", "я", "як"],
        //"bn": ["অনেক", "অন্য", "অবশ্য", "আগে", "আছে", "আজ", "আবার", "আমরা", "আমাদের", "আর", "ই", "উত্তর", "উপর", "উপরে", "এ", "এই", "এক্", "এখন", "এত", "এব", "এমন", "এমনি", "এর", "এস", "এসে", "ও", "ওই", "কমনে", "করা", "করে", "কাছে", "কাজ", "কাজে", "কারণ", "কি", "কিছু", "কে", "কেউ", "কেখা", "কেন", "কোটি", "কোনো", "কয়েক", "খুব", "গিয়ে", "গেল", "চার", "চালু", "চেষ্টা", "ছিল", "জানা", "জ্নজন", "টি", "তখন", "তবে", "তা", "তাই", "তো", "থাকা", "থেকে", "দিন", "দু", "দুই", "দেওয়া", "ধামার", "নতুন", "না", "নাগাদ", "নিয়ে", "নেওয়া", "নয়", "পর", "পরে", "পাচ", "পি", "পেয়্র্", "প্রতি", "প্রথম", "প্রযন্ত", "প্রাথমিক", "প্রায়", "বক্তব্য", "বন", "বলা", "বলে", "বলেন", "বহু", "বা", "বি", "বিভিন্ন", "বেশ", "বেশি", "মতো", "মধ্যে", "মনে", "যখন", "যদি", "যা", "যাওয়া", "যে", "র", "রকম", "লক্ষ", "শুধু", "শুরু", "সঙ্গে", "সব", "সহ", "সাধারণ", "সামনে", "সি", "সে", "সেই", "হতে", "হাজার", "হয়"],
        //"fa": ["آباد", "آره", "آری", "آمد", "آمده", "آن", "آنان", "آنجا", "آنكه", "آنها", "آنچه", "آورد", "آورده", "آيد", "آیا", "اثرِ", "از", "است", "استفاده", "اش", "اكنون", "البته", "البتّه", "ام", "اما", "امروز", "امسال", "اند", "انکه", "او", "اول", "اي", "ايشان", "ايم", "اين", "اينكه", "اگر", "با", "بار", "بارة", "باره", "باشد", "باشند", "باشيم", "بالا", "بالایِ", "بايد", "بدون", "بر", "برابرِ", "براساس", "براي", "برایِ", "برخوردار", "برخي", "برداري", "بروز", "بسيار", "بسياري", "بعد", "بعری", "بعضي", "بلكه", "بله", "بلکه", "بلی", "بنابراين", "بندي", "به", "بهترين", "بود", "بودن", "بودند", "بوده", "بي", "بيست", "بيش", "بيشتر", "بيشتري", "بين", "بی", "بیرونِ", "تا", "تازه", "تاكنون", "تان", "تحت", "تر", "ترين", "تمام", "تمامي", "تنها", "تواند", "توانند", "توسط", "تولِ", "تویِ", "جا", "جاي", "جايي", "جدا", "جديد", "جريان", "جز", "جلوگيري", "جلویِ", "حتي", "حدودِ", "حق", "خارجِ", "خدمات", "خواست", "خواهد", "خواهند", "خواهيم", "خود", "خويش", "خیاه", "داد", "دادن", "دادند", "داده", "دارد", "دارند", "داريم", "داشت", "داشتن", "داشتند", "داشته", "دانست", "دانند", "در", "درباره", "دنبالِ", "ده", "دهد", "دهند", "دو", "دوم", "ديده", "ديروز", "ديگر", "ديگران", "ديگري", "دیگر", "را", "راه", "رفت", "رفته", "روب", "روزهاي", "روي", "رویِ", "ريزي", "زياد", "زير", "زيرا", "زیرِ", "سابق", "ساخته", "سازي", "سراسر", "سریِ", "سعي", "سمتِ", "سوم", "سوي", "سویِ", "سپس", "شان", "شايد", "شد", "شدن", "شدند", "شده", "شش", "شما", "شناسي", "شود", "شوند", "صورت", "ضدِّ", "ضمن", "طبقِ", "طريق", "طور", "طي", "عقبِ", "علّتِ", "عنوانِ", "غير", "فقط", "فكر", "فوق", "قابل", "قبل", "قصدِ", "كرد", "كردم", "كردن", "كردند", "كرده", "كسي", "كل", "كمتر", "كند", "كنم", "كنند", "كنيد", "كنيم", "كه", "لطفاً", "ما", "مان", "مانند", "مانندِ", "مثل", "مثلِ", "مختلف", "مدّتی", "مردم", "مرسی", "مقابل", "من", "مورد", "مي", "ميليارد", "ميليون", "مگر", "ناشي", "نام", "نبايد", "نبود", "نخست", "نخستين", "نخواهد", "ندارد", "ندارند", "نداشته", "نزديك", "نزدِ", "نزدیکِ", "نشان", "نشده", "نظير", "نكرده", "نمايد", "نمي", "نه", "نوعي", "نيز", "نيست", "ها", "هاي", "هايي", "هر", "هرگز", "هزار", "هست", "هستند", "هستيم", "هفت", "هم", "همان", "همه", "همواره", "همين", "همچنان", "همچنين", "همچون", "همین", "هنوز", "هنگام", "هنگامِ", "هنگامی", "هيچ", "هیچ", "و", "وسطِ", "وقتي", "وقتیکه", "ولی", "وي", "وگو", "يا", "يابد", "يك", "يكديگر", "يكي", "ّه", "پاعینِ", "پس", "پنج", "پيش", "پیش", "پیشِ", "چرا", "چطور", "چند", "چندین", "چنين", "چه", "چهار", "چون", "چيزي", "چگونه", "چیز", "چیزی", "چیست", "کجا", "کجاست", "کدام", "کس", "کسی", "کنارِ", "که", "کَی", "کی", "گذاري", "گذاشته", "گردد", "گرفت", "گرفته", "گروهي", "گفت", "گفته", "گويد", "گويند", "گيرد", "گيري", "یا", "یک"],
        //"hi": ["अंदर", "अत", "अदि", "अप", "अपना", "अपनि", "अपनी", "अपने", "अभि", "अभी", "आदि", "आप", "इंहिं", "इंहें", "इंहों", "इतयादि", "इत्यादि", "इन", "इनका", "इन्हीं", "इन्हें", "इन्हों", "इस", "इसका", "इसकि", "इसकी", "इसके", "इसमें", "इसि", "इसी", "इसे", "उंहिं", "उंहें", "उंहों", "उन", "उनका", "उनकि", "उनकी", "उनके", "उनको", "उन्हीं", "उन्हें", "उन्हों", "उस", "उसके", "उसि", "उसी", "उसे", "एक", "एवं", "एस", "एसे", "ऐसे", "ओर", "और", "कइ", "कई", "कर", "करता", "करते", "करना", "करने", "करें", "कहते", "कहा", "का", "काफि", "काफ़ी", "कि", "किंहें", "किंहों", "कितना", "किन्हें", "किन्हों", "किया", "किर", "किस", "किसि", "किसी", "किसे", "की", "कुछ", "कुल", "के", "को", "कोइ", "कोई", "कोन", "कोनसा", "कौन", "कौनसा", "गया", "घर", "जब", "जहाँ", "जहां", "जा", "जिंहें", "जिंहों", "जितना", "जिधर", "जिन", "जिन्हें", "जिन्हों", "जिस", "जिसे", "जीधर", "जेसा", "जेसे", "जैसा", "जैसे", "जो", "तक", "तब", "तरह", "तिंहें", "तिंहों", "तिन", "तिन्हें", "तिन्हों", "तिस", "तिसे", "तो", "था", "थि", "थी", "थे", "दबारा", "दवारा", "दिया", "दुसरा", "दुसरे", "दूसरे", "दो", "द्वारा", "न", "नहिं", "नहीं", "ना", "निचे", "निहायत", "नीचे", "ने", "पर", "पहले", "पुरा", "पूरा", "पे", "फिर", "बनि", "बनी", "बहि", "बही", "बहुत", "बाद", "बाला", "बिलकुल", "भि", "भितर", "भी", "भीतर", "मगर", "मानो", "मे", "में", "यदि", "यह", "यहाँ", "यहां", "यहि", "यही", "या", "यिह", "ये", "रखें", "रवासा", "रहा", "रहे", "ऱ्वासा", "लिए", "लिये", "लेकिन", "व", "वगेरह", "वरग", "वर्ग", "वह", "वहाँ", "वहां", "वहिं", "वहीं", "वाले", "वुह", "वे", "वग़ैरह", "संग", "सकता", "सकते", "सबसे", "सभि", "सभी", "साथ", "साबुत", "साभ", "सारा", "से", "सो", "हि", "ही", "हुअ", "हुआ", "हुइ", "हुई", "हुए", "हे", "हें", "है", "हैं", "हो", "होता", "होति", "होती", "होते", "होना", "होने"],
        //"mr": ["अधिक", "अनेक", "अशी", "असलयाचे", "असलेल्या", "असा", "असून", "असे", "आज", "आणि", "आता", "आपल्या", "आला", "आली", "आले", "आहे", "आहेत", "एक", "एका", "कमी", "करणयात", "करून", "का", "काम", "काय", "काही", "किवा", "की", "केला", "केली", "केले", "कोटी", "गेल्या", "घेऊन", "जात", "झाला", "झाली", "झाले", "झालेल्या", "टा", "डॉ", "तर", "तरी", "तसेच", "ता", "ती", "तीन", "ते", "तो", "त्या", "त्याचा", "त्याची", "त्याच्या", "त्याना", "त्यानी", "त्यामुळे", "त्री", "दिली", "दोन", "न", "नाही", "निर्ण्य", "पण", "पम", "परयतन", "पाटील", "म", "मात्र", "माहिती", "मी", "मुबी", "म्हणजे", "म्हणाले", "म्हणून", "या", "याचा", "याची", "याच्या", "याना", "यानी", "येणार", "येत", "येथील", "येथे", "लाख", "व", "व्यकत", "सर्व", "सागित्ले", "सुरू", "हजार", "हा", "ही", "हे", "होणार", "होत", "होता", "होती", "होते"],
        //"ro": ["acea", "aceasta", "această", "aceea", "acei", "aceia", "acel", "acela", "acele", "acelea", "acest", "acesta", "aceste", "acestea", "aceşti", "aceştia", "acolo", "acord", "acum", "ai", "aia", "aibă", "aici", "al", "ale", "alea", "altceva", "altcineva", "am", "ar", "are", "asemenea", "asta", "astea", "astăzi", "asupra", "au", "avea", "avem", "aveţi", "azi", "aş", "aşadar", "aţi", "bine", "bucur", "bună", "ca", "care", "caut", "ce", "cel", "ceva", "chiar", "cinci", "cine", "cineva", "contra", "cu", "cum", "cumva", "curând", "curînd", "când", "cât", "câte", "câtva", "câţi", "cînd", "cît", "cîte", "cîtva", "cîţi", "că", "căci", "cărei", "căror", "cărui", "către", "da", "dacă", "dar", "datorită", "dată", "dau", "de", "deci", "deja", "deoarece", "departe", "deşi", "din", "dinaintea", "dintr-", "dintre", "doi", "doilea", "două", "drept", "după", "dă", "ea", "ei", "el", "ele", "eram", "este", "eu", "eşti", "face", "fata", "fi", "fie", "fiecare", "fii", "fim", "fiu", "fiţi", "frumos", "fără", "graţie", "halbă", "iar", "ieri", "la", "le", "li", "lor", "lui", "lângă", "lîngă", "mai", "mea", "mei", "mele", "mereu", "meu", "mi", "mie", "mine", "mult", "multă", "mulţi", "mulţumesc", "mâine", "mîine", "mă", "ne", "nevoie", "nici", "nicăieri", "nimeni", "nimeri", "nimic", "nişte", "noastre", "noastră", "noi", "noroc", "nostru", "nouă", "noştri", "nu", "opt", "ori", "oricare", "orice", "oricine", "oricum", "oricând", "oricât", "oricînd", "oricît", "oriunde", "patra", "patru", "patrulea", "pe", "pentru", "peste", "pic", "poate", "pot", "prea", "prima", "primul", "prin", "printr-", "puţin", "puţina", "puţină", "până", "pînă", "rog", "sa", "sale", "sau", "se", "spate", "spre", "sub", "sunt", "suntem", "sunteţi", "sută", "sînt", "sîntem", "sînteţi", "să", "săi", "său", "ta", "tale", "te", "timp", "tine", "toate", "toată", "tot", "totuşi", "toţi", "trei", "treia", "treilea", "tu", "tăi", "tău", "un", "una", "unde", "undeva", "unei", "uneia", "unele", "uneori", "unii", "unor", "unora", "unu", "unui", "unuia", "unul", "vi", "voastre", "voastră", "voi", "vostru", "vouă", "voştri", "vreme", "vreo", "vreun", "vă", "zece", "zero", "zi", "zice", "îi", "îl", "îmi", "împotriva", "în", "înainte", "înaintea", "încotro", "încât", "încît", "între", "întrucât", "întrucît", "îţi", "ăla", "ălea", "ăsta", "ăstea", "ăştia", "şapte", "şase", "şi", "ştiu", "ţi", "ţie"],
        "en": ["a", "a's", "able", "about", "above", "according", "accordingly", "across", "actually", "after", "afterwards", "again", "against", "ain't", "all", "allow", "allows", "almost", "alone", "along", "already", "also", "although", "always", "am", "among", "amongst", "an", "and", "another", "any", "anybody", "anyhow", "anyone", "anything", "anyway", "anyways", "anywhere", "apart", "appear", "appreciate", "appropriate", "are", "aren't", "around", "as", "aside", "ask", "asking", "associated", "at", "available", "away", "awfully", "b", "be", "became", "because", "become", "becomes", "becoming", "been", "before", "beforehand", "behind", "being", "believe", "below", "beside", "besides", "best", "better", "between", "beyond", "both", "brief", "but", "by", "c", "c'mon", "c's", "came", "can", "can't", "cannot", "cant", "cause", "causes", "certain", "certainly", "changes", "clearly", "co", "com", "come", "comes", "concerning", "consequently", "consider", "considering", "contain", "containing", "contains", "corresponding", "could", "couldn't", "course", "currently", "d", "definitely", "described", "despite", "did", "didn't", "different", "do", "does", "doesn't", "doing", "don't", "done", "down", "downwards", "during", "e", "each", "edu", "eg", "eight", "either", "else", "elsewhere", "enough", "entirely", "especially", "et", "etc", "even", "ever", "every", "everybody", "everyone", "everything", "everywhere", "ex", "exactly", "example", "except", "f", "far", "few", "fifth", "first", "five", "followed", "following", "follows", "for", "former", "formerly", "forth", "four", "from", "further", "furthermore", "g", "get", "gets", "getting", "given", "gives", "go", "goes", "going", "gone", "got", "gotten", "greetings", "h", "had", "hadn't", "happens", "hardly", "has", "hasn't", "have", "haven't", "having", "he", "he's", "hello", "help", "hence", "her", "here", "here's", "hereafter", "hereby", "herein", "hereupon", "hers", "herself", "hi", "him", "himself", "his", "hither", "hopefully", "how", "howbeit", "however", "i", "i'd", "i'll", "i'm", "i've", "ie", "if", "ignored", "immediate", "in", "inasmuch", "inc", "indeed", "indicate", "indicated", "indicates", "inner", "insofar", "instead", "into", "inward", "is", "isn't", "it", "it'd", "it'll", "it's", "its", "itself", "j", "just", "k", "keep", "keeps", "kept", "know", "known", "knows", "l", "last", "lately", "later", "latter", "latterly", "least", "less", "lest", "let", "let's", "like", "liked", "likely", "little", "look", "looking", "looks", "ltd", "m", "mainly", "many", "may", "maybe", "me", "mean", "meanwhile", "merely", "might", "more", "moreover", "most", "mostly", "much", "must", "my", "myself", "n", "name", "namely", "nd", "near", "nearly", "necessary", "need", "needs", "neither", "never", "nevertheless", "new", "next", "nine", "no", "nobody", "non", "none", "noone", "nor", "normally", "not", "nothing", "novel", "now", "nowhere", "o", "obviously", "of", "off", "often", "oh", "ok", "okay", "old", "on", "once", "one", "ones", "only", "onto", "or", "other", "others", "otherwise", "ought", "our", "ours", "ourselves", "out", "outside", "over", "overall", "own", "p", "particular", "particularly", "per", "perhaps", "placed", "please", "plus", "possible", "presumably", "probably", "provides", "q", "que", "quite", "qv", "r", "rather", "rd", "re", "really", "reasonably", "regarding", "regardless", "regards", "relatively", "respectively", "right", "s", "said", "same", "saw", "say", "saying", "says", "second", "secondly", "see", "seeing", "seem", "seemed", "seeming", "seems", "seen", "self", "selves", "sensible", "sent", "serious", "seriously", "seven", "several", "shall", "she", "should", "shouldn't", "since", "six", "so", "some", "somebody", "somehow", "someone", "something", "sometime", "sometimes", "somewhat", "somewhere", "soon", "sorry", "specified", "specify", "specifying", "still", "sub", "such", "sup", "sure", "t", "t's", "take", "taken", "tell", "tends", "th", "than", "thank", "thanks", "thanx", "that", "that's", "thats", "the", "their", "theirs", "them", "themselves", "then", "thence", "there", "there's", "thereafter", "thereby", "therefore", "therein", "theres", "thereupon", "these", "they", "they'd", "they'll", "they're", "they've", "think", "third", "this", "thorough", "thoroughly", "those", "though", "three", "through", "throughout", "thru", "thus", "to", "together", "too", "took", "toward", "towards", "tried", "tries", "truly", "try", "trying", "twice", "two", "u", "un", "under", "unfortunately", "unless", "unlikely", "until", "unto", "up", "upon", "us", "use", "used", "useful", "uses", "using", "usually", "uucp", "v", "value", "various", "very", "via", "viz", "vs", "w", "want", "wants", "was", "wasn't", "way", "we", "we'd", "we'll", "we're", "we've", "welcome", "well", "went", "were", "weren't", "what", "what's", "whatever", "when", "whence", "whenever", "where", "where's", "whereafter", "whereas", "whereby", "wherein", "whereupon", "wherever", "whether", "which", "while", "whither", "who", "who's", "whoever", "whole", "whom", "whose", "why", "will", "willing", "wish", "with", "within", "without", "won't", "wonder", "would", "wouldn't", "x", "y", "yes", "yet", "you", "you'd", "you'll", "you're", "you've", "your", "yours", "yourself", "yourselves", "z", "zero"]
    };

    return cfg;
}
function browserExtension(config, window) {
    "use strict";
    return {
        isExtensionInstalled: isExtensionInstalled
    };

    function isExtensionInstalled(callback) {
        if (window.chrome != null && window.chrome.runtime != null) {
            window.chrome.runtime.sendMessage(config.chromeExtensionId, { message: config.chromeExtensionName },
              function (response) {
                  if (response === config.chromeExtensionName) {
                      callback(true);
                  } else {
                      callback(false);
                  }
              });
        } else {
            callback(false);
        }
    }
}
function common(config, navigator, window) {
    "use strict";

    return {
        extend: extend,
        addClass: addClass,
        removeClass: removeClass,
        setSelectable: setSelectable,
        getLanguage: getLanguage,
        mobileAndTabletcheck: mobileAndTabletcheck
    };

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

    function addClass(el, cname) {
        el.className += ' ' + cname;
    }

    function removeClass(el, cName) {
        el.className = el.className.replace(new RegExp('(?:^|\\s)' + cName + '(?!\\S)', 'g'), '');
    }

    function setSelectable(el, selectable) {
        el.style.userSelect = selectable ? '' : 'none';
        el.style.webkitUserSelect = selectable ? '' : 'none';
        el.style.MozUserSelect = selectable ? '' : 'none';
        el.style.msUserSelect = selectable ? '' : 'none';
        el.setAttribute('unselectable', selectable ? '' : 'on'); // For IE and Opera
    }

    function getLanguage() {
        if (config.avialableUI.indexOf(config.language) >= 0) {
            return config.language;
        }
        if (navigator.language) {
            var language = navigator.language.substr(0, 2).toLocaleLowerCase();
            if (config.avialableUI.indexOf(tlang) >= 0) {
                return language;
            }
        }
        return config.avialableUI[0];
    }

    function mobileAndTabletcheck() {
        var check = false;
        (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    }
}
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
function panelShared(config, localStorage, document) {
    "use striuct";
    return {
        savePanelWrapperWidth: savePanelWrapperWidth,
        getPanelWrapperWidth: getPanelWrapperWidth,
        checkPanelMaxSize: checkPanelMaxSize
    };

    function savePanelWrapperWidth(panelWrapper) {
        localStorage[config.panelWidthLocalStorageKey] = panelWrapper.offsetWidth / document.documentElement.clientWidth;
    }

    function getPanelWrapperWidth() {
        var storedWidth = localStorage.getItem(config.panelWidthLocalStorageKey);
        return (storedWidth == null ? config.defaultPanelWidth : storedWidth) * document.documentElement.clientWidth;
    }

    function checkPanelMaxSize(panelWrapper) {
        var panelWidth = panelWrapper.offsetWidth;
        if (panelWidth > document.documentElement.clientWidth - config.openPanelButtonWidth) {
            panelWrapper.style.width = document.documentElement.clientWidth - config.openPanelButtonWidth + 'px';
            panelWidth = panelWrapper.offsetWidth;
        }
        panelWrapper.style.right = (-panelWidth - config.panelBorderWidth) + 'px';
    }
}
function panelResizer(config, common, panelShared, document, window) {
    "use strict";
    var panelDragData = null,
        panelWrapper = null;

    return {
        init: init
    };

    function init() {
        panelWrapper = document.getElementById(config.panelWrapperId);
        addWindowOnResizeEvent();
        addPanelDragAndDropEvents();
        preventPanelToggleLabelDrag();
    }

    function preventPanelToggleLabelDrag() {
        document.getElementById(config.panelToggleLabelId).onmousedown = function (e) {
            if (!e) e = event || window.event;
            e.cancelBubble = true;
        };
    }

    function addWindowOnResizeEvent() {
        window.onresize = function () {
            common.addClass(panelWrapper, config.panelResizedClass);
            panelSharedModule.checkPanelMaxSize(panelWrapper);
            common.removeClass(panelWrapper, config.panelResizedClass);
        };
    }

    function prepareForDrag(isDrag) {
        if (isDrag) {
            common.addClass(panelWrapper, config.panelDraggedClass);

            var outerShutter = document.createElement('div');
            outerShutter.id = config.outerShutterId;
            outerShutter.setAttribute('class', config.cleanClass);
            document.body.insertBefore(outerShutter, panelWrapper);

            var innerShutter = document.createElement('div');
            innerShutter.id = config.innerShutterId;
            panelWrapper.appendChild(innerShutter);

            common.setSelectable(document.body, false);
        } else {
            common.removeClass(panelWrapper, config.panelDraggedClass);

            document.getElementById(config.outerShutterId).remove();
            document.getElementById(config.innerShutterId).remove();

            common.setSelectable(document.body, true);
        }
    }

    function panelStartDrag(e) {
        var panelWidth = panelWrapper.offsetWidth;
        if (!panelDragData) {
            e = e || event;
            panelDragData = {
                x: e.clientX,
                startwidth: panelWidth
            };

            prepareForDrag(true);
        };
    }

    function panelDrag(e) {
        if (panelDragData) {
            e = e || event;
            panelWrapper.style.width = panelDragData.startwidth - (e.clientX - panelDragData.x) - config.panelBorderWidth + 'px';
            panelSharedModule.checkPanelMaxSize(panelWrapper);
        }
    }

    function panelStopDrag(e) {
        if (panelDragData) {
            e = e || event;
            panelWrapper.style.width = panelDragData.startwidth - (e.clientX - panelDragData.x) - config.panelBorderWidth + 'px';
            panelSharedModule.checkPanelMaxSize(panelWrapper);
            panelDragData = null;

            prepareForDrag(false);

            panelShared.savePanelWrapperWidth(panelWrapper);
        }
    }

    function addPanelDragAndDropEvents() {
        panelWrapper.addEventListener('mousedown', panelStartDrag, false);
        panelWrapper.addEventListener('mouseup', panelStopDrag, false);
        panelWrapper.addEventListener('mousemove', panelDrag, false);

        document.body.addEventListener('mousemove', panelDrag, false);
        document.body.addEventListener('mouseup', panelStopDrag, false);
    }
}
function dataLoader(config, common, localStorage) {
    "use strict";
    return {
        getThreadsCount: getThreadsCount,
        getStopWords: getStopWords
    };

    function getThreadsCount(callback) {
        var url = config.context2Url + config.getThreadsCountUrl + '?url=' + encodeURIComponent(location.href) + '&language=' + common.getLanguage();
        jsonp(url, function (response) {
            callback(response == 0 ? null : response);
        });
    }

    function getStopWordsFromServer(callback) {
        var url = config.context2Url + config.getStopWordsUrl + '?domain=' + encodeURIComponent(location.host);
        jsonp(url, function (stopWords) {
            localStorage[config.stopWordsLocalStorageKeyPrefix + location.host] = stopWords;
            localStorage[config.stopWordsLastUpdateLocalStorageKeyPrefix + location.host] = new Date();
            callback(stopWords);
        });
    }

    function getStopWords(callback) {
        var
            stopWords = localStorage[config.stopWordsLocalStorageKeyPrefix + location.host],
            stopWordsUpdated = new Date(localStorage[config.stopWordsLastUpdateLocalStorageKeyPrefix + location.host]),
            now = new Date();
        if ((stopWords != null && stopWords != "") || (now - stopWordsUpdated < config.stopWordsCacheTimeout)) {
            callback(stopWords);
        } else {
            getStopWordsFromServer(callback);
        }
    }

    function jsonp(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                callback(JSON.parse(xhr.responseText));
            }
        }
        xhr.send();
    }
}
function frameLoader(config, common, dataLoader, analyzer, document, navigator, window) {
    "use strict";
    return {
        loadFrame: loadFrame
    }

    function loadFrame(frame, panelWrapper, isMobile, frameOpenCallback, frameCloseCallback) {
        var theme = config.theme === '' || config.theme == null ? '' : '-' + config.theme;
        frame.id = config.frameId;
        frame.src = config.context2Url + 'app/index' + theme + '.html?url=' + encodeURIComponent(window.location.href);
        panelWrapper.appendChild(frame);

        dataLoader.getStopWords(function (stopWords) {
            window.addEventListener('message', function (e) {
                if (e.data == config.frameReadyMessageData) {
                    var postData = {
                        keywords: analyzer.extractKeywords(document.body, {
                            top: config.postWordsCount,
                            stopLangs: navigator.languages
                        }, stopWords),
                        type2: "keywords",
                        title: analyzer.extractTitle(document.body, stopWords),
                        layout: isMobile ? 'mobile' : 'desktop',
                        url: window.location.href,
                        language: common.getLanguage()
                    };
                    frame.contentWindow.postMessage(postData, config.context2Url);
                    frameOpenCallback();
                }
                if (e.data == config.frameCloseMessageData) {
                    frameCloseCallback()
                }
            }, false);
        });
    }
}
function panel(config, common, panelShared, panelResizer, dataLoader, frameLoader, document) {
    "use strict";
    return {
        init: init
    }

    function init() {
        dataLoader.getThreadsCount(function (threadCount) {            
            var panelWrapper = document.createElement('div'),
            panelToggleCheckBox = document.createElement('input'),
            panelToggleLabel = document.createElement('label'),
            panelTitleSpan = document.createElement('span'),
            panelArrowDiv = document.createElement('div'),
            panelIcon = document.createElement('i'),
            isMobile = common.mobileAndTabletcheck(),
            labelTitle = isMobile ? config.mobileContent : config.content,
            hasTitle = labelTitle != null && labelTitle != '',
            container = !!config.container ? document.querySelector(config.container) : document.body;

            if (isMobile) {
                panelToggleLabel.style.top = config.mobilePosition === 'top' ? '0' : config.mobilePosition === 'middle' ? '40%' : 'auto';
                panelToggleLabel.style.bottom = config.mobilePosition === 'bottom' ? '0' : 'auto';
                panelToggleLabel.style.marginTop = config.mobileMarginTop;
                panelToggleLabel.style.marginBottom = config.mobileMarginBottom;
            } else {
                panelToggleLabel.style.top = config.position === 'top' ? '0' : config.position === 'middle' ? '40%' : 'auto';
                panelToggleLabel.style.bottom = config.position === 'bottom' ? '0' : 'auto';
                panelToggleLabel.style.marginTop = config.marginTop;
                panelToggleLabel.style.marginBottom = config.marginBottom;
            }

            panelWrapper.id = config.panelWrapperId;
            setPanelWrapperPosition(panelWrapper);

            panelToggleCheckBox.id = config.panelToggleCheckBoxId;
            panelToggleCheckBox.type = 'checkbox';

            panelToggleLabel.id = config.panelToggleLabelId;
            panelToggleLabel.setAttribute('for', config.panelToggleCheckBoxId);

            panelArrowDiv.innerHTML = '&#9668';

            panelIcon.style.backgroundImage = 'url("' + config.context2Url + 'app/images/icon.png")';
            if (threadCount != null) {
                var panelThreadCount = document.createElement('b');
                panelThreadCount.innerHTML = '+' + threadCount;
                panelToggleLabel.appendChild(panelThreadCount);
            }

            panelToggleLabel.appendChild(panelIcon);

            if (hasTitle) {
                panelTitleSpan.innerHTML = labelTitle;
                panelToggleLabel.appendChild(panelTitleSpan);
            }
            
            panelToggleLabel.appendChild(panelArrowDiv);            

            panelWrapper.appendChild(panelToggleLabel);
            container.appendChild(panelToggleCheckBox);
            container.appendChild(panelWrapper);
            common.addClass(panelWrapper, config.cleanClass);

            if (hasTitle) {
                panelTitleSpan.style.marginTop = (panelTitleSpan.scrollWidth - 16) + 'px';
            }
            if (!isMobile) {
                panelResizer.init();
            }
            panelToggleLabel.addEventListener('click', function () {
                var isFirstTimeOpen = !panelToggleCheckBox.checked && document.getElementById(config.frameId) == null;
                if (isFirstTimeOpen) {
                    var frame = document.createElement('iframe');
                    frameLoader.loadFrame(frame, panelWrapper, isMobile, function () {
                    }, function () {                                                
                        panelToggleCheckBox.checked = false;
                        setPanelWrapperPosition(panelWrapper);
                    });
                }

                if (isMobile) {
                    panelWrapper.style.width = '100%';
                }
            });
        });
    }

    function setPanelWrapperPosition(panelWrapper) {
        var panelWidth = panelShared.getPanelWrapperWidth();
        panelWrapper.style.width = panelWidth + 'px';
        panelWrapper.style.right = (-panelWidth - config.panelBorderWidth) + 'px';

    }
}
function embedded(config, common, frameLoader, document) {
    "use strict";
    return {
        init: init
    }

    function init() {
        var isMobile = common.mobileAndTabletcheck(),
             container = !!config.container ? document.querySelector(config.container) : document.body,
             height = config.height,
            frame = document.createElement('iframe');
        frame.style.width = '100%';
        frame.style.height = config.height;
        frameLoader.loadFrame(frame, container, isMobile, function () { });
    }
}
function appLoader(config, panel, embedded, browserExtension) {
    "use strict";
    return {
        init: init
    };

    function init() {
        if (config.method === 'sidepanel') {
            panel.init();
        } else if (config.method === 'embedded') {
            browserExtension.isExtensionInstalled(function (isInstalled) {
                if (isInstalled) {
                    panel.init();
                } else {
                    embedded.init();
                }
            });            
        }
    }
}
var sharedConfigModule = sharedConfig(),
    configModule = config(sharedConfigModule),
    browserExtensionModule = browserExtension(configModule, window),
    commonModule = common(configModule, navigator, window),
    analyzerModule = analyzer(configModule, commonModule),
    panelSharedModule = panelShared(configModule, localStorage, document),
    panelResizerModule = panelResizer(configModule, commonModule, panelSharedModule, document, window),
    dataLoaderModule = dataLoader(configModule, commonModule, localStorage),
    frameLoaderModule = frameLoader(configModule, commonModule, dataLoaderModule, analyzerModule, document, navigator, window),
    panelModule = panel(configModule, commonModule, panelSharedModule, panelResizerModule, dataLoaderModule, frameLoaderModule, document),
    embeddedModule = embedded(configModule, commonModule, frameLoaderModule, document),
    appLoaderModule = appLoader(configModule, panelModule, embeddedModule, browserExtensionModule);

init(configModule, commonModule, appLoaderModule, window);

function init(config, common, appLoader, window) {
    if (window.top !== window.self || window.CONTEXT_PANEL) return;
    window.CONTEXT_PANEL = true;
    if (typeof window.initContext2 === 'function') {
        var initOptions = window.initContext2();
        config.theme = initOptions.theme || config.theme;
        config.container = initOptions.container || config.container;
        config.method = initOptions.method || config.method;
        config.height = initOptions.height || config.height;
        config.language = initOptions.language || config.language;
        config.position = initOptions.position || config.position;
        config.marginTop = initOptions.marginTop || config.marginTop;
        config.marginBottom = initOptions.marginBottom || config.marginBottom;
        config.content = initOptions.content || config.content;
        config.mobilePosition = initOptions.mobilePosition || config.mobilePosition;
        config.mobileMarginTop = initOptions.mobileMarginTop || config.mobileMarginTop;
        config.mobileMarginBottom = initOptions.mobileMarginBottom || config.mobileMarginBottom;
        config.mobileContent = initOptions.mobileContent || config.mobileContent;
    }
    appLoader.init();
}})();
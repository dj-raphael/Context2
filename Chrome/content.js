var panelToggleLabelId = 'context2-panel-toggle-label';
var scriptSource = 'http://localhost:2341/app/mainEmbedded.js';
//var scriptSource = 'https://context2.com/app/mainEmbedded.js';
var panelToggle = function(){
    var panelLabel = document.getElementById(panelToggleLabelId);
    var y = window.scrollY;
    var x = window.scrollX;
    panelLabel.click();
    window.blur();
    window.scrollTo(x,y);
};
var isScriptInjected = function(){
    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i<scripts.length;i++){
        if (scripts[i].src == scriptSource){
            return true;
        }
    }
    return false;
};
var isScriptLoaded = function(){
    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i<scripts.length;i++){
        if (scripts[i].src == scriptSource && scripts[i].dataset.loaded == 'true'){
            return true;
        }
    }
    return false;
};
var setScriptLoad = function(){
    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i<scripts.length;i++){
        if (scripts[i].src == scriptSource){
            scripts[i].dataset.loaded = 'true';
            return;
        }
    }
};
if (!isScriptInjected()){
    var head = document.getElementsByTagName("head")[0];
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = scriptSource;
    script.onload = function(){
        setScriptLoad();
        panelToggle();
    };
    head.appendChild(script);
} else if (isScriptLoaded()){
    panelToggle();
}
document.body.setAttribute('data-context2title', chrome.i18n.getMessage("title_comments"));
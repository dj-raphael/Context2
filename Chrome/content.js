var panelToggleLabelId = 'context2-panel-toggle-label';
var scriptSource = 'http://localhost:2341/app/mainEmbedded.js';
var panelToggle = function(){
    var panelLabel = document.getElementById(panelToggleLabelId);
    panelLabel.click();
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

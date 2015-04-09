var buttonClicked = function() {
    chrome.tabs.executeScript(null, {file: "content.js"});
};
chrome.browserAction.onClicked.addListener(buttonClicked);

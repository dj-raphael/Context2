var context2Url = 'https://context2.com/',
	//context2Url = 'http://localhost:2341/',

	buttonClicked = function() {
		chrome.tabs.executeScript(null, {file: "content.js"});
	};
chrome.browserAction.onClicked.addListener(buttonClicked);
chrome.runtime.onMessageExternal.addListener(function(request, sender, sendResponse){
		if (request.message == "contextcomment")
			sendResponse("contextcomment");
	});

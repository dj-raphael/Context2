var context2Url = 'https://context2.com/',
	//context2Url = 'http://localhost:2341/',
	getThreadCount = function(tabURL, language, callback){
		var http = new XMLHttpRequest();
		var url = context2Url+"api/Thread/GetThreadsCount";
		var params = "url=" + tabURL + "&language=" + language;
		http.open("POST", url, true);

		//Send the proper header information along with the request
		http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

		http.onreadystatechange = function() {//Call a function when the state changes.
			if(http.readyState == 4 && http.status == 200) {
				callback(http.responseText);
			}
		}
		http.send(params);
	}
	buttonClicked = function() {
		chrome.tabs.executeScript(null, {file: "content.js"});
	},
	setBadgeText = function(url) {
		var language = window.navigator.language.substring(0,2);
		getThreadCount(url, language, function(count){
			if (count > 0)
				chrome.browserAction.setBadgeText({text: count.toString()})
			else
				chrome.browserAction.setBadgeText({text: ""})
		})
		
	};

chrome.browserAction.onClicked.addListener(buttonClicked);
chrome.runtime.onMessageExternal.addListener(function(request, sender, sendResponse){
		if (request.message == "contextcomment")
			sendResponse("contextcomment");
	});

chrome.tabs.onActivated.addListener(function (activeInfo){ //activeInfo = {tabId, windowId}
	chrome.tabs.get(activeInfo.tabId, function(tab){
		setBadgeText(tab.url);
	})
});
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab){ //check changeInfo.url, it exists if changed
	if (changeInfo.url != null)
		setBadgeText(changeInfo.url);
})
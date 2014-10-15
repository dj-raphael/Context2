var sended = false;
window.onload = function () {
    setTimeout(function () {
        /*Send request to current tab when page action is clicked*/
        var tabId;

        chrome.tabs.query({ active: true, windowType: "normal", currentWindow: true }, function (d) {
            if (!sended) {
                sended = true;
                chrome.tabs.sendMessage(
                    //Selected tab id
                    d[0].id,
                    //Params inside a object data
                    { callFunction: "toggleSidebar" }
                );
            }
            window.close();
        });
    });
};
const buttons = require('sdk/ui/button/action');
const tabs = require("sdk/tabs");
const self = require("sdk/self");
const _ = require('sdk/l10n').get;
var workers = {};

var button = buttons.ActionButton({
	id: "contextcomment",
	label: "Toggle Context Comment",
	icon: {
		"16": "./icon-16.png",
		"32": "./icon-32.png",
		"64": "./icon-64.png"
	},
	onClick: handleClick
});

function handleClick(state) {
	worker = tabs.activeTab.attach({
			contentScriptFile: self.data.url("content.js")
		});
	worker.port.emit("ContextCommentExecute", {title_comments: _('title_comments')});
}
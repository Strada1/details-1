"use strict";
exports.__esModule = true;
exports.createMessage = void 0;
var consts_js_1 = require("./consts.js");
function createMessage(textContent, userName, date, who) {
    var sampleMessage = document.createElement('div');
    sampleMessage.className = "".concat(consts_js_1.mainClassNameContainer, " ").concat(who);
    if (consts_js_1.tmpl) {
        var sample = consts_js_1.tmpl.cloneNode(true);
        sampleMessage.append(sample.content);
        if (consts_js_1.windowChat) {
            consts_js_1.windowChat.prepend(sampleMessage);
        }
        var messageText = sampleMessage.querySelector(consts_js_1.messageItemSelector);
        var messageDate = sampleMessage.querySelector(consts_js_1.messageTimeSelector);
        var messageUserName = sampleMessage.querySelector(consts_js_1.userNameSelector);
        if (messageText) {
            messageText.textContent = textContent;
        }
        if (messageDate) {
            messageDate.textContent = date;
        }
        if (messageUserName) {
            messageUserName.textContent = userName;
        }
    }
}
exports.createMessage = createMessage;

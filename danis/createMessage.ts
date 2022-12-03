import { windowChat, tmpl, messageItemSelector, messageTimeSelector, userNameSelector, mainClassNameContainer } from './consts.js';

export function createMessage(textContent: string, userName: string, date: string, who: string): void {
    const sampleMessage = document.createElement('div');
    sampleMessage.className = `${mainClassNameContainer} ${who}`;

    if (tmpl) {
        const sample: any = tmpl.cloneNode(true)
        sampleMessage.append(sample.content);

        if (windowChat) {
            windowChat.prepend(sampleMessage);
        } 

        const messageText: Element | null = sampleMessage.querySelector(messageItemSelector);
        const messageDate: Element | null = sampleMessage.querySelector(messageTimeSelector);
        const messageUserName: Element | null = sampleMessage.querySelector(userNameSelector);

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
import Cookies from 'js-cookie';
import { getAllMessage } from './requests.js';

const USER = `Я`;
const messagesListWrap = document.querySelector('.messenger__body');
const messageTmp = document.querySelector('#message-tmp');
const currentUser = Cookies.get('ChatUserEmail');

const scrollToBottomMsgWrap = (scrollNum = 0) => {
   messagesListWrap.scrollTo(scrollNum, messagesListWrap.scrollHeight)
}

const addToDomMessage = (text, userName = false, time = false, userEmail = null) => {
   messagesListWrap.append(messageTmp.content.cloneNode(true));

   const wrapMsg = document.querySelector('.messenger__body .message:last-child');
   const textMsg = document.querySelector('.messenger__body .message:last-child .text');
   const userMsg = document.querySelector('.messenger__body .message:last-child .name');
   const timeMsg = document.querySelector('.messenger__body .message:last-child .time');

   userMsg.textContent = userName ? `${userName}:` : `${USER}:`;
   textMsg.textContent = text;
   if (time) {
      timeMsg.textContent = new Date(time).getHours() + ":" + new Date(time).getMinutes();
   } else {
      timeMsg.textContent = new Date().getHours() + ":" + new Date().getMinutes();
   }

   currentUser === userEmail ? wrapMsg.classList.add('user') : wrapMsg.classList.add('recipient');

};

const renderMessage = (scrollTo = 0) => {
   let displayedMessages = 20;
   let message = getAllMessage();
   message
      .then(result => result.json())
      .then(result => {
         const messages = result.messages.reverse().slice(result.messages.length - displayedMessages);
         messages.forEach(msg => {
            addToDomMessage(msg.text, msg.user.name, msg.createdAt, msg.user.email)
            scrollToBottomMsgWrap(scrollTo);
         });
         displayedMessages += 20;
      })
}


messagesListWrap.addEventListener('scroll', (event) => {
   if (event.target.scrollTop === 0) {
      renderMessage(event.target.scrollTop);
   }
});
document.addEventListener('DOMContentLoaded', renderMessage)


export { addToDomMessage, renderMessage }
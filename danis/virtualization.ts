import { localStorageNameHistoryMessages, addClassForMe, addClassForAnother, messagesCountStart, messagesCountEnd, windowChat } from './consts'
import { createMessage } from './createMessage'
import { format } from 'date-fns'
import { getUserInfo } from './getUserInfo'

export async function virtualization() {
    let countOne = messagesCountStart;
    let countTwo = messagesCountEnd;


    const getLocalStorage: string | null = localStorage.getItem(localStorageNameHistoryMessages);
    if (getLocalStorage) {
        const arrayMessages = JSON.parse(getLocalStorage).messages;
        const getEmail = await getUserInfo();             

        let sliceArrayMessages = arrayMessages.slice(0, messagesCountStart);

        if (windowChat) {
            windowChat.addEventListener("scroll", function () {
                scrollLurking();
            });
        }

        function scrollLurking() {
            if (windowChat && windowChat.scrollTop === 0) {              
                    sliceArrayMessages = arrayMessages.slice(countOne, countTwo);
                    renderMessages(sliceArrayMessages);
                    countOne = countOne + messagesCountStart;
                    countTwo = countTwo + messagesCountStart;
            }
        }

        renderMessages(sliceArrayMessages)

        function renderMessages(array: any) {
            array.map(function (item, index) {
                const arrayIndex = array[index];
                if (array[index].user.email === getEmail) {
                    createMessage(arrayIndex.text, arrayIndex.user.name, format(Date.parse(arrayIndex.createdAt), "HH:mm"), addClassForMe);
                } else {
                    createMessage(arrayIndex.text, arrayIndex.user.name, format(Date.parse(arrayIndex.createdAt), "HH:mm"), addClassForAnother);
                }
            });
        }
    }
}
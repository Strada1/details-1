import { format } from 'date-fns';

export function createMessage(user = 'me', userName = '', inputValue, timeValue = new Date()) {
	const myMessage = document.createElement('div');
	const content = document.createElement('div');
	const text = document.createElement('p');
	const time = document.createElement('div');
	const timeText = document.createElement('span');

	myMessage.classList.add(`content__${user}`);
	myMessage.classList.add('message');
	content.classList.add('content__message');
	time.classList.add('content__time');

	myMessage.append(content);
	content.append(text);
	content.append(time);
	time.append(timeText);

	user === 'me'
		? (text.textContent = inputValue)
		: (text.textContent = `${userName}: ${inputValue}`);

	timeText.textContent = format(new Date(timeValue), 'HH:mm');

	const chat = document.querySelector('.content__chat');

	return chat.append(myMessage);
}

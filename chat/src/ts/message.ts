import { format } from 'date-fns';

import { CONTENT_CHAT } from './const';

export function createMessage(
	user: string = 'me',
	userName: string = '',
	inputValue: any,
	timeValue: Date = new Date(),
) {
	const myMessage = document.createElement('div') as HTMLDivElement;
	const content = document.createElement('div') as HTMLDivElement;
	const text = document.createElement('p') as HTMLParagraphElement;
	const time = document.createElement('div') as HTMLDivElement;
	const timeText = document.createElement('span') as HTMLSpanElement;

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

	return CONTENT_CHAT.VIEW?.append(myMessage);
}

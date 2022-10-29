import { intervalToDuration, formatDuration } from 'date-fns';

const inputDate = document.querySelector('input');
const button = document.querySelector('button');
const hours = document.querySelector('.hours');
const form = document.querySelector('form');

function onCountDownTime() {
	setInterval(() => {
		const userTime = new Date(inputDate.value);
		const result = intervalToDuration({
			start: userTime,
			end: new Date(),
		});

		const duration = formatDuration(result);

		hours.textContent = duration;
	}, 1000);

	setTimeout(() => clearInterval(), 10000);
}

button.addEventListener('click', event => {
	event.preventDefault();
	onCountDownTime();
});

form.addEventListener('submit', evt => {
	evt.preventDefault();
	onCountDownTime();
});

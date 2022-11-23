import { MODAL_VIEW, FORM } from './const';

import { post } from './fetch';

export function authorization(evt) {
	evt.preventDefault();

	post(FORM.AUTH_INPUT.value);

	FORM.AUTH.classList.add('hide');
	MODAL_VIEW.ACCESS.classList.remove('hide');
}

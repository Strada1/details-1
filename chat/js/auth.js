import { Modal, MODAL_TYPES } from './modal.js';
import { sendData } from './data-api.js';
import { validateEmail } from './validation.js';


const GET_CODE_URL = 'https://edu.strada.one/api/user';


const onSendEmailSuccess = () => {
  alert('success');
};

const onSendEmailFail = () => {
  alert('fail');
};

const sendEmail = (formData) => {
  sendData(
    onSendEmailSuccess,
    onSendEmailFail,
    formData,
    GET_CODE_URL
  );
};

const initAuthorization = () => {
  const authModal = new Modal(MODAL_TYPES.get('authorization'), sendEmail, validateEmail);
  authModal.addModal();
  //sendData();
}

export { initAuthorization };

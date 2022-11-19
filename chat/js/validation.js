const MESSAGE_MAX_LENGTH = null;


const validateMessage = (message) => {
  message = message.trim();
  const isValid = message.length > 0;

  if (MESSAGE_MAX_LENGTH) {
    isValid = message.length <= MESSAGE_MAX_LENGTH;
  }

  return isValid;
};


const validateEmail = (email) => {
  const EMAIL_REGEXP = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return EMAIL_REGEXP.test(email);
};


export { validateMessage, validateEmail };

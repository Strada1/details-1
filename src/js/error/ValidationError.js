export const ERROR_MESSAGES = {
  INPUT_NOTHING: 'введите сообщение',
  INPUT_FULL: 'слишком длинное сообщение',
};

export class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

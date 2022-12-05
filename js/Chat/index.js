import Network from '../Network';

const DISABLED_LIST_CLASS = 'meassage-list_disabled';
const MESSAGE_CLASS = 'message';
const MY_MESSAGE_CLASS = 'message_my';
const SHIPPED_MESSAGE_CLASS = 'message_shipped';
const { log } = console;

export default class Chat {
  #currentUser;

  // TODO subscribe unsubscribe
  #callbacks = [];

  #messages = [];

  #UI;

  #initUI() {
    try {
      this.#UI = {
        form: document.querySelector('.chat-form'),
        input: document.querySelector('.chat-form .text-input'),
        sendBtn: document.querySelector('.chat-form .btn'),
        messageList: document.querySelector('.meassage-list'),
        messageTpl: document.getElementById('message-tpl'),
      };

      this.#UI.form.addEventListener('submit', (event) => {
        event.preventDefault();
        try {
          const data = Object.fromEntries(new FormData(this.#UI.form).entries);
          this.#callbacks.forEach((fn) => fn(data));
        } catch (e) {
          log(e);
        }
      });
      log(this);
    } catch (e) {
      log(e);
    }
  }

  #getMessageEl(message) {
    const { user: { email, name }, text, createdAt } = message;
    const msgHTML = this.#UI.messageTpl.content.cloneNode(true);
    if (this.#currentUser && this.#currentUser.email === email) {
      msgHTML.querySelector(`.${MESSAGE_CLASS}`).classList.add(MY_MESSAGE_CLASS);
    }

    msgHTML.querySelector('.message__name').textContent = `${name ?? email}:`;
    msgHTML.querySelector('.message__body').textContent = text;
    msgHTML.querySelector('.message__time').textContent = createdAt;

    return msgHTML;
  }

  constructor(user) {
    this.#currentUser = user;

    // TODO init chat with current user to add class with my messages
    this.#initUI();
    this.loadMessages();
    const socket = Network.getSocker();

    socket.addEventListener('message', (data) => {
      const message = JSON.parse(data.data);
      log('ON MESSAGE', message);
      const messageEl = this.#getMessageEl(message);
      this.#UI.messageList.append(messageEl);
      this.#UI.messageList.scrollTop = this.#UI.messageList.scrollHeight;
    });

    this.#callbacks.push(({ text }) => {
      socket.send(JSON.stringify({ text }));
      this.#UI.input.value = '';
    });
  }

  // pushMessages

  loadMessages() {
    Network.getMessages().then(({ messages }) => {
      log(messages.map((m) => m.text));
      if (messages && messages.length) {
        const elements = messages.reverse().map((meassage) => this.#getMessageEl(meassage));

        this.#UI.messageList.append(...elements);
        this.#UI.messageList.scrollTop = this.#UI.messageList.scrollHeight;
      }
    }).catch(log);

    // TODO bug doulbe modal
    // Network.saveUserEmail('example@example.com').then((res) => log(res));
  }

  enableUI() {
    this.#UI.messageList.classList.remove(DISABLED_LIST_CLASS);
    this.#UI.sendBtn.removeAttribute('disabled');
    this.#UI.input.removeAttribute('disabled');
    this.#UI.form.removeAttribute('disabled');
  }

  disableUI() {
    this.#UI.messageList.classList.add(DISABLED_LIST_CLASS);
    this.#UI.sendBtn.setAttribute('disabled');
    this.#UI.input.setAttribute('disabled');
    this.#UI.form.setAttribute('disabled');
  }

  onSubmit(callback) {
    this.#callbacks.push(callback);
  }
}

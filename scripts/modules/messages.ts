const CHAT_DIALOG = document.querySelector('.chat__messages');

export function createNewMessageSelf(textValue : string, date : string) {
  const newMessage = (<HTMLTemplateElement>document.querySelector('#chatMessageSelf'))?.content.cloneNode(true) as HTMLElement;
  newMessage.querySelector('.chat__text')?.append(textValue);
  newMessage.querySelector('.chat__time')?.append(`${new Date(date).getHours()}:${new Date(date).getMinutes()}`);

  CHAT_DIALOG?.append(newMessage);
}

export function createNewMessage(textValue: string, date: string) {
  const newMessage = (<HTMLTemplateElement>document.querySelector('#chatMessage')).content.cloneNode(true) as HTMLElement;
  newMessage.querySelector('.chat__text')?.append(textValue);
  newMessage.querySelector('.chat__time')?.append(`${new Date(date).getHours()}:${new Date(date).getMinutes()}`);

  CHAT_DIALOG?.prepend(newMessage);
}
export class Message {
    username: string;
    email: string;
    text: string;
    timestamp: Date;
    isMyMessage: boolean;

    constructor(username: string, email: string, text: string, timestamp: Date, isMyMessage: boolean) {
        this.username = username;
        this.email = email;
        this.text = text;
        this.timestamp = timestamp;
        this.isMyMessage = isMyMessage;
    }
}

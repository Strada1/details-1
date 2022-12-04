import { ChatClient } from './api';
import { initPage } from './page';

const client = new ChatClient();
initPage(client);
client.authorize();

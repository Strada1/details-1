// import { getUrlSocket} from './consts.js'
// import { existsCookie } from './script.js'
// import { createMessage } from './createMessage.js'

// export function socket(textMessage) {


//     const socketName = new WebSocket(`${getUrlSocket}${existsCookie('user')}`)

//     socketName.onopen = function () {
//         socketName.send(JSON.stringify({ text: textMessage }));
//         socketName.onmessage = function (event) {
//             const result = JSON.parse(event.data);
//             if (result.user.email === existsCookie('userEmail')) {
//                 createMessage(result.text, result.user.name, result.createdAt)
//             } else {
//                 createMessage(result.text, result.user.name, result.createdAt, 'another')
               
//             }

//         }
//     }

// }
// export function getWeatherPromise(cityName){
//     try{
//         const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
//         const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
//         const metric = `&units=metric`;
//         const url = `${serverUrl}?q=${cityName}&appid=${apiKey}${metric}`;
//
//         return fetch(url)
//             .then((response) => {
//                 if(!response.ok){
//                     throw new Error(`Проверьте название города`)
//                 }
//                 return response.json();
//             } )
//     }catch (error) {
//         alert(error.message);
//     }
// }


export async function getWeatherPromise(cityName){
    try {
        const SERVER_URL = 'http://api.openweathermap.org/data/2.5/weather';
        const API_KEY = 'f660a2fb1e4bad108d6160b7f58c555f';
        const METRIC = `&units=metric`;
        const URL = `${SERVER_URL}?q=${cityName}&appid=${API_KEY}${METRIC}`;

        const RESPONSE = await fetch(URL);
        if(!RESPONSE.ok){
           throw new Error(`Проверьте название города`)
        }
        const JSON = await RESPONSE.json();
        return  JSON;
    }catch (e) {
        alert(e.message)
    }
}
export async function getWeatherPromise(cityName) {
  try {
    const SERVER_URL = 'http://api.openweathermap.org/data/2.5/weather';
    const API_KEY = 'f660a2fb1e4bad108d6160b7f58c555f';
    const METRIC = '&units=metric';
    const URL = `${SERVER_URL}?q=${cityName}&appid=${API_KEY}${METRIC}`;

    const RESPONSE = await fetch(URL);
    if (!RESPONSE.ok) {
      throw new Error('Проверьте название города');
    }
    const JSON = await RESPONSE.json();
    return JSON;
  } catch (e) {
    console.log(e.message);
  }
}

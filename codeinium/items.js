
export const ELEMENTS = {
    FINDINPUT: document.querySelector("#find-input"),
    FORM: document.querySelector("#find-form"),
    WEATHERICON: document.querySelector("#weather-icon"),
    TEMPERATURE: document.querySelector("#temperature"),
    LOCATION: document.querySelector("#loca"),
    LOCATIONFORBUTTON: document.querySelector('.location'),
    ADDBUTTON: document.querySelector('#add-button'),
    ADDBUTTONICON: document.querySelector('#add-icon'),
    ADDEDLOCATIONS: document.querySelector("#added-locations"),
    DETAILS_LOCATION: document.querySelector('#city'),
    DETAILS_TEMPERATURE: document.querySelector('#temp'),
    DETAILS_FEEL: document.querySelector('#feel'),
    DETAILS_WEATHER: document.querySelector('#weather'),
    DETAILS_SUNRISE: document.querySelector('#sunrise'),
    DETAILS_SUNSET: document.querySelector('#sunset'),
    FORECAST_LOCATION: document.querySelector('#city2'),
    FORECASTS: document.querySelectorAll('.forecast')
}

export const API = {
    KEY: '4dac46ba5170c186410fd41ea59f39db',
    SERVERURL: `https://api.openweathermap.org/data/2.5/weather`,
    IMG: "https://openweathermap.org/img/wn/",
    FORECAST_URL: `https://api.openweathermap.org/data/2.5/forecast`
}

export const TEMPERATURE_WORDS = {
    TEMPERATURE: 'Temperature: ',
    FEELS_LIKE: 'Feels like: ',
    WEATHER: 'Weather: ',
    SUNRISE: 'Sunrise: ',
    SUNSET: 'Sunset: '
}

// export const MONTHES = {
//     0: 'Jan',
//     1: 'Feb',
//     2: 'Mar',
//     3: 'Apr',
//     4: 'May',
//     5: 'Jun',
//     6: 'Jul',
//     7: 'Aug',
//     8: 'Sen',
//     9: 'Oct',
//     10: 'Nov',
//     11: 'Dec',
// }

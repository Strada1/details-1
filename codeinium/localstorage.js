// export function setCurrentCity(value) {
//     return localStorage.setItem('currentCity', value);
// }

// export function getCurrentCity() {
//     return localStorage.getItem('currentCity');
// }


export function setFavoriteCities(value) {
    localStorage.setItem('favoriteCities', value);
}

export function getFavoriteCities() {
    return localStorage.getItem('favoriteCities');
}

export function setCookieCurrentCity(value, time = 3600) {
    document.cookie = encodeURIComponent(`currentCity`) + '=' + encodeURIComponent(`${value}`) + `; max-age=${time}`;
}

export function getCookieCurrentCity() {
    const city = decodeURIComponent(document.cookie.slice(document.cookie.indexOf('currentCity') + 'currentCity='.length));
    if (!city) {
        return undefined;
    }
    else {
        return city;
    }
}
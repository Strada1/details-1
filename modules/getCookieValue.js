const getCookieValue = function(key) {
    const cookies = document.cookie.split('; ');
    const cookie = cookies.find(cookie => {
        if (cookie.indexOf(`${key}=`) === 0) {
            return true
        }
    })
    if (!cookie) {
       return null;
    }
    return cookie.slice(key.length+1);
};


const cookiesHasKey = function(key) {
    return document.cookie.includes(`${key}=`);
}

export {getCookieValue, cookiesHasKey};


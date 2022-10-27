export function setCookie(cityName) {
	document.cookie = `town=${encodeURIComponent(cityName)}; path=/; max-age=10`;
}

function getCookie(name) {
	const value = `; ${document.cookie}`;
	const parts = value.split(`; ${name}=`);
	if (parts.length === 2) return parts.pop().split(';').shift();
}

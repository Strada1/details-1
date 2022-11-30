var firstName = document.querySelector(".input-url");
var sendRequest = document.querySelector(".form-input");
function postRequest(name) {
    if (!name) {
        return;
    }
    try {
        var serverUrl = new URL('https://api.genderize.io');
        var url = "".concat(serverUrl, "?name=").concat(name);
        fetch(url)
            .then(function (response) { return response.json(); })
            .then(function (commits) { return (alert("".concat(name, " is ").concat(commits.gender))); });
    }
    catch (error) {
        new Error(error.message);
    }
}
sendRequest.addEventListener("submit", function (event) {
    event.preventDefault();
    postRequest(firstName.value);
});

const ELEMENTS = {
    NOW: document.querySelector("#Now"),
    DETAILS: document.querySelector("#Details"),
    FORECAST: document.querySelector("#Forecast")
};
ELEMENTS.NOW.addEventListener("click", changeBackground);
ELEMENTS.DETAILS.addEventListener("click", changeBackground);
ELEMENTS.FORECAST.addEventListener("click", changeBackground);
function changeBackground() {
    switch(this){
        case ELEMENTS.NOW:
            ELEMENTS.NOW.style.backgroundColor = "#000";
            ELEMENTS.NOW.querySelector("span").style.color = "white";
            ELEMENTS.DETAILS.style.backgroundColor = "white";
            ELEMENTS.DETAILS.querySelector("span").style.color = "#000";
            ELEMENTS.FORECAST.style.backgroundColor = "white";
            ELEMENTS.FORECAST.querySelector("span").style.color = "#000";
            break;
        case ELEMENTS.DETAILS:
            ELEMENTS.NOW.style.backgroundColor = "white";
            ELEMENTS.NOW.querySelector("span").style.color = "#000";
            ELEMENTS.DETAILS.style.backgroundColor = "#000";
            ELEMENTS.DETAILS.querySelector("span").style.color = "white";
            ELEMENTS.FORECAST.style.backgroundColor = "white";
            ELEMENTS.FORECAST.querySelector("span").style.color = "#000";
            break;
        case ELEMENTS.FORECAST:
            ELEMENTS.NOW.style.backgroundColor = "white";
            ELEMENTS.NOW.querySelector("span").style.color = "#000";
            ELEMENTS.DETAILS.style.backgroundColor = "white";
            ELEMENTS.DETAILS.querySelector("span").style.color = "#000";
            ELEMENTS.FORECAST.style.backgroundColor = "#000";
            ELEMENTS.FORECAST.querySelector("span").style.color = "white";
    }
}

//# sourceMappingURL=index.7f9af00b.js.map

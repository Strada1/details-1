const { intervalToDuration } = require("date-fns");

const TIME_UNITS = {
    years: {
        singular: " year",
        plural: " years"
    },
    months: {
        singular: " month",
        plural: " months"
    },
    days: {
        singular: " day",
        plural: " days"
    },
    hours: {
        singular: " hour",
        plural: " hours"
    },
    minutes: {
        singular: " minute",
        plural: " minutes"
    },
    seconds: {
        singular: " second",
        plural: " seconds"
    }
};

const ELEMENT = {
    FORM: document.querySelector(".form"),
    INPUT: document.querySelector(".input"),
    BUTTON: document.querySelector(".button"),
    RESULTS: document.querySelector(".results"),
    RESULT: document.querySelectorAll(".result")
};

function calcTime() {
    if (!ELEMENT.INPUT.value) {
        alert("Enter date!");
        return;
    }

    const futureDate = new Date(ELEMENT.INPUT.value);
    const currentDate = new Date();

    if (checkFutureDate(futureDate, currentDate)) {
        alert("This day has already passed :(");
        return;
    }

    const duration = getInterval(futureDate, currentDate);
    render(duration);
}

function checkFutureDate(futureDate, currentDate) {
    if (currentDate > futureDate) {
        return true;
    }
}

function getInterval(futureDate, currentDate) {
    const time = intervalToDuration({
        start: currentDate,
        end: futureDate
    });
    const duration = {
        years: time.years,
        months: time.months,
        days: time.days,
        hours: time.hours,
        minutes: time.minutes,
        seconds: time.seconds
    };
    return duration;
}

function render(duration) {
    clearResults();

    const results = createElement("div", "results");
    ELEMENT.FORM.after(results);

    for (item in duration) {
        if (duration[item] === 0) {
            continue;
        } else if (duration[item] === 1) {
            const timeBlock = createTimeBlock(TIME_UNITS[item].singular, duration[item]);
            results.append(timeBlock);
            continue;
        }
        const timeBlock = createTimeBlock(TIME_UNITS[item].plural, duration[item]);
        results.append(timeBlock);
    }
}

function clearResults() {
    if (document.querySelector(".results") !== null) {
        document.querySelector(".results").remove();
    }
}

function createTimeBlock(timeUnit, time) {
    const div = createElement("div", "result");
    const p = createElement("p", "result__text");
    const span = document.createElement("span");

    p.textContent = time;
    span.textContent = timeUnit;

    p.append(span);
    div.append(p);
    
    return div;
}

function createElement(tagName, className = "") {
    const element = document.createElement(tagName);
    element.className = className;
    return element;
}

ELEMENT.FORM.addEventListener("submit", event => {
    event.preventDefault();
    setInterval(() => calcTime(), 1000);
});

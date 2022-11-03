let mydate = require('date-fns');

let inputDateElement = document.querySelector(".inputDate");
let showCurrDate = document.querySelector(".showCurrDate");
let showUserDate = document.querySelector(".showUserDate");
let showResult = document.querySelector(".showResult");


function StartCount() {
    let userDate = inputDateElement.value;
    showUserDate.textContent = userDate;

    let currDate =  mydate.format(new Date(), "dd'.'MM'.'yyyy");
    showCurrDate.textContent = currDate;
    
    const futureDate = mydate.parse(userDate, "dd'.'MM'.'yyyy", new Date());
    const currentDate = new Date();

    function getInterval(){
        const durationObj = mydate.intervalToDuration({
            start: currentDate,
            end: futureDate
        });  

        return durationObj;

    }
    let result = getInterval();

    showResult.textContent = mydate.formatDuration(result);

}

startButton.addEventListener("click", StartCount);


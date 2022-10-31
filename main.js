//---------Error Handlers
/*
class ReadError extends Error {
    constructor(message, cause) {
      super(message);
      this.cause = cause;
      this.name = 'ReadError';
    }
  }

class ValidationError extends Error {}
  
class PropertyRequiredError extends ValidationError {
    constructor(property) {
        super("Нет свойства: " + property);
        this.property = property;
    }
}

function validateJSON(json) {
  if (!json.name) {
    throw new PropertyRequiredError("name");
  }
  return json;
}

function readJson(json) {
    let myJSON;

    try {
        myJSON = JSON.parse(json);
    } catch (err) {
      if (err instanceof SyntaxError) {
        throw new ReadError("Синтаксическая ошибка", err);
      } else {
        throw err;
      }
    }
  
    try {
        validateJSON(myJSON);
    } catch (err) {
      if (err instanceof ValidationError) {
        throw new ReadError("Ошибка валидации", err);
      } else {
        throw err;
      }
    }
    return myJSON;
}
*/

//------------Main

//function-constructor City()
function City() {
    this.cityName = document.getElementById('now_city');
    this.inputCity = document.getElementById('inputName');
    this.temperature = document.getElementById('now_temp');
    this.weatherPic = document.getElementById('weatherPic');
    
    this.details__city = document.getElementById('details__city');
    this.details__temp = document.getElementById('details__temp');
    this.feels_like = document.getElementById('details__feels_like');
    this.details__weather = document.getElementById('details__weather');
    this.details__sunrise = document.getElementById('details__sunrise');
    this.details__sunset = document.getElementById('details__sunset');

    this.toHumanDate = function(timestamp, timezone){
        let localTime = new Date();
        let localOffset = (localTime.getTimezoneOffset());// minutes
        let cityTime = new Date(timestamp*1000);
        let hours = cityTime.getHours() + localOffset/60 + timezone/3600;
        let minutes = cityTime.getMinutes();
       
        function timeToString(time) {//converts 7:8 -> 07:08
            let stringtime = '';
            if (time<10) {
                stringtime = "0" + time.toString();
            }
            else {
                stringtime = time.toString();
            }
            return stringtime;
        }
        
        return (timeToString(hours)+':'+timeToString(minutes));
    }
}

function getCurrentCity(){
    try {
        let localStorageValue = localStorage.getItem('currJSON');
        lastJSON = JSON.parse(localStorageValue);
        let city = new City();

        city.cityName.textContent = `${lastJSON.name}`;
        city.inputCity.textContent =`${lastJSON.name}`;
        city.temperature.textContent = Math.round(`${lastJSON.main.temp}`-273) + '\u2103';
        const iconsUrl = 'https://openweathermap.org/img/wn/';
        let iconData = lastJSON.weather[0].icon;
        city.weatherPic.innerHTML = `<img src=\"${iconsUrl}${iconData}@2x.png\">`;


        city.details__city.textContent = `${lastJSON.name}`;
        city.details__temp.textContent = `Temperature: ${Math.round(lastJSON.main.temp-273)}\u2103`;
        city.feels_like.textContent = `Feels like: ${Math.round(lastJSON.main.feels_like-273)}\u2103`;
        city.details__weather.textContent = `Weather: ${lastJSON.weather[0].main}`;
        city.details__sunrise.textContent = `Sunrise: ${city.toHumanDate(lastJSON.sys.sunrise, lastJSON.timezone)}`;
        city.details__sunset.textContent = `Sunset: ${city.toHumanDate(lastJSON.sys.sunset, lastJSON.timezone)}`;

    } catch (e) {
        if (e instanceof ReadError) {
          alert(e);
          alert(e.cause);
        } else {
          throw e; // неизвестная ошибка, пробросить исключение (**)
        }
      }
}


//---GET city weather after clicking on Search button
async function OnButtonPress() {
    try {
        //button and fields
        let city = new City();

        //get city json
        const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
        const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f'; 
        const url = `${serverUrl}?q=${city.inputCity.value}&appid=${apiKey}`;
        let response = await fetch(url);
        let json = await response.json();
        console.log(json);

        //save current city to LocalStorage
        let currentCity = city.inputCity.value;
        let currJSON = JSON.stringify(json);
        localStorage.setItem('currJSON', currJSON);
        localStorage.setItem('current', currentCity);

        //now_tab
        city.cityName.textContent = `${json.name}`;
        city.temperature.textContent = Math.round(`${json.main.temp}`-273) + '\u2103';
        const iconsUrl = 'https://openweathermap.org/img/wn/';
        let iconData = json.weather[0].icon;
        city.weatherPic.innerHTML = `<img src=\"${iconsUrl}${iconData}@2x.png\">`;
        //city.weatherPic.src = "https://openweathermap.org/img/wn/04n@2x.png";

        //details_tabs
        city.details__city.textContent = `${json.name}`;
        city.details__temp.textContent = `Temperature: ${Math.round(json.main.temp-273)}\u2103`;
        city.feels_like.textContent = `Feels like: ${Math.round(json.main.feels_like-273)}\u2103`;
        city.details__weather.textContent = `Weather: ${json.weather[0].main}`;
        city.details__sunrise.textContent = `Sunrise: ${city.toHumanDate(json.sys.sunrise, json.timezone)}`;
        city.details__sunset.textContent = `Sunset: ${city.toHumanDate(json.sys.sunset, json.timezone)}`;
    } 
    catch(error) {
        alert(error.message);
    }
}
//let button = document.getElementById('searchButton');


//--- GET City List from LocalStorage
const CITYLIST = new Set();
function getFavoriteCities(){  
    getCurrentCity(); 
    for (let i=0; i<localStorage.length; i++){
        if (localStorage.key(i).startsWith('favCity')){
            let key = localStorage.key(i);
            CITYLIST.add(localStorage.getItem(key));
        }
    }
    //console.log(CITYLIST);
    render(CITYLIST);
}

//--- ADD cities to favorites after clicking on Like button
function saveFavoriteCities(input){
    const cityElement = document.getElementById(input);
    let cityName = cityElement.textContent;
    //---add city to array
    let city = cityName;
    if (CITYLIST.size<=4){
        CITYLIST.add(city);
        cityKey = `favCity${city}`;    
        localStorage.setItem(cityKey, city);
    }
    render();
}

function deleteTask(city) {
    let cityKey;
    let localStorageKeys = Object.keys(localStorage);
    for (let key of localStorageKeys){
        if (city == localStorage.getItem(key)){
            cityKey = key;
        }
    }
    CITYLIST.delete(city);    
    localStorage.removeItem(cityKey);
    render();
}


function removeCityList(){
    let allTasks = document.getElementsByClassName('task');
    for (let i=allTasks.length-1; i>=0; i--) {
        allTasks[i].remove();
    }
}


function showCities(){ //create DOM structure from the TODO
    let taskPattern = document.getElementById("pattern");
    for (let city of CITYLIST) {
        //create new task div in HTML
        let newdiv = taskPattern.cloneNode(true); //make a clone of hidden Task task
        newdiv.className = "task";
        newdiv.removeAttribute('Style'); //remove style="display:none in new div

        //create div with task text
        newdiv.childNodes[1].innerHTML = city;

        //create cross icon to remove the task
        let closeElem = newdiv.childNodes[3]; //find task with Cross Icon
        closeElem.onclick = () => deleteTask(city);
        //newdiv.remove();
        
        //choose container where to put new div
        let container;
        container = document.getElementById('container');
        container.appendChild(newdiv);
    }
}

function render(){
    removeCityList();
    showCities();
}

getFavoriteCities();





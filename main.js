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

function validateJSON(user) {
    if (!user.age) {
      throw new PropertyRequiredError("age");
    }
  
    if (!user.name) {
      throw new PropertyRequiredError("name");
    }
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
        validateJSON(json);
    } catch (err) {
      if (err instanceof ValidationError) {
        throw new ReadError("Ошибка валидации", err);
      } else {
        throw err;
      }
    }
  
  }


function getCurrentCity(){
    try {
        let lastJSON = readJson(localStorage.getItem('currJSON'));

        let city = new City();
        city.cityName.innerHTML = `${lastJSON.name}`;
        city.inputCity.innerHTML =`${lastJSON.name}`;
        city.temperature.innerHTML = Math.round(`${lastJSON.main.temp}`-273) + '&#176';

        const iconsUrl = 'https://openweathermap.org/img/wn/';
        let icon = lastJSON.weather[0].icon;
        city.weatherPic.innerHTML = `<img src=\"${iconsUrl}${icon}@2x.png\">`;
        city.details__city.innerHTML = `${lastJSON.name}`;

        city.details__temp.innerHTML = `Temperature: ${Math.round(lastJSON.main.temp-273)}&#176`;
        city.feels_like.innerHTML = `Feels like: ${Math.round(lastJSON.main.feels_like-273)}&#176`;
        city.details__weather.innerHTML = `Weather: ${lastJSON.weather[0].main}`;

        city.details__sunrise.innerHTML = `Sunrise: ${city.toHumanDate(lastJSON.sys.sunrise, lastJSON.timezone)}`;
        city.details__sunset.innerHTML = `Sunset:${city.toHumanDate(lastJSON.sys.sunset, lastJSON.timezone)}`;

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
        currJSON = JSON.stringify(json);
        localStorage.setItem('currJSON', currJSON);
        localStorage.setItem('current', currentCity);

        //now_tab
        city.cityName.innerHTML = `${json.name}`;
        city.temperature.innerHTML = Math.round(`${json.main.temp}`-273) + '&#176';
        const iconsUrl = 'https://openweathermap.org/img/wn/';
        let icon = json.weather[0].icon;
        city.weatherPic.innerHTML = `<img src=\"${iconsUrl}${icon}@2x.png\">`;
        

        //details_tab
        city.details__city.innerHTML = `${json.name}`;
        city.details__temp.innerHTML = `Temperature: ${Math.round(json.main.temp-273)}&#176`;
        city.feels_like.innerHTML = `Feels like: ${Math.round(json.main.feels_like-273)}&#176`;
        city.details__weather.innerHTML = `Weather: ${json.weather[0].main}`;
        city.details__sunrise.innerHTML = `Sunrise: ${city.toHumanDate(json.sys.sunrise, json.timezone)}`;
        city.details__sunset.innerHTML = `Sunset:${city.toHumanDate(json.sys.sunset, json.timezone)}`;
    } 
    catch(error) {
        alert(error.message);
    }
}
let button = document.getElementById('searchButton');
button.onclick = OnButtonPress;

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
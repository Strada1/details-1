import {UIELEMENTS} from './uielements.js';
import {saveFavoriteCities,getFavoriteCities} from './localstorage.js';
import {getWeatherPromise} from "./getWeatherPromise.js";
import {renderDetails} from "./renderDetails.js";
import {MyError} from "./customError.js";

UIELEMENTS.form_input.addEventListener('submit', function (event, TODO) {
    event.preventDefault();
    const inputCity = getWeatherPromise(UIELEMENTS.cityName.value.split(' ').join(''));
    const divRemove = document.querySelector("#divRemove");

    UIELEMENTS.form_input.reset();
    renderNow(inputCity);
    renderDetails(inputCity);
    divRemove.innerHTML = "";
});



function renderNow(inputCity){
    const divRemove = document.querySelector("#divRemove");
    let promise = inputCity;

    promise
        .then((data) => {
        const temperature = data.main.temp;
        const tempCount = `${temperature.toFixed(0)}°`;
        const serverImgUrl = `http://openweathermap.org/img/wn/`;
        const src = `${serverImgUrl}${data.weather[0]['icon']}@2x.png`;

        const span = document.createElement("span");
        span.className = "count";
        span.textContent = tempCount;
        divRemove.append(span);

        const img = document.createElement("img");
        img.className = "icon-cloud";
        img.src  = src;
        divRemove.append(img);

        const city_like = document.createElement("div");
        city_like.className = "city-like";
        divRemove.append(city_like);

        const city_name = document.createElement("span");
        city_name.className = "city-name";
        city_name.id = "nowIdCity";
        city_name.textContent = data.name;
        city_like.appendChild(city_name);

        const likeImg = document.createElement("img");
        likeImg.className = "like";
        likeImg.src  = "img/like.png";
        likeImg.id = "nowIdLike"
        city_like.appendChild(likeImg);

        const like_location = document.querySelector("#nowIdLike");
        like_location.addEventListener("click", likeLocation);

    })
        .catch(error => alert(error.message))
}


function renderLikeList (){
   const  locations = document.querySelector(".locations");
   let list = getFavoriteCities();
   locations.innerHTML = "";

    list.forEach( (el) => {
        const selectLocation = document.createElement("div");
        selectLocation.className = "selectLocation";

        const div = document.createElement("div");
        div.className = "city-name";
        div.id = `divId` + el.cityName;
        div.textContent = el.cityName;

        const remove = document.createElement("img");
        remove.className = "removeLocation";
        remove.src  = "img/remove.png";
        remove.id = `removeId` + el.cityName;
        selectLocation.appendChild(div);
        selectLocation.appendChild(remove);
        locations.append(selectLocation);

        remove.addEventListener("click", () => {
            const newList = list.filter((item) =>(item !== el))
            saveFavoriteCities(newList);
            renderLikeList();
        });

        div.addEventListener("click",() => {
            const divRemove = document.querySelector("#divRemove");
            const inputCity = getWeatherPromise(el.cityName);
            divRemove.innerHTML = "";
            renderNow(inputCity);
            renderDetails(inputCity);
        });
    })
}


function AddFavoriteCities(list){
    this.cityName =  list;
}

function likeLocation(){
    try {
        const list = new Set ( getFavoriteCities() );
        const likeCity = document.querySelector(".city-name");

        list.forEach((item) => {
            if ( likeCity.textContent === item.cityName ){
                throw new MyError (`${likeCity.textContent}  уже существует в избранных `)
            }
        })

        const favoriteCities  =  new AddFavoriteCities(likeCity.textContent);
        list.add(favoriteCities);
        saveFavoriteCities(list);
        renderLikeList();
    }catch (error) {
        alert(error.message);
    }
}


// function likeLocation() {
//
//       const list = new Set ( getFavoriteCities() );
//     const likeCity = document.querySelector(".city-name");
//     const cloneList =  [...list];
//
//
//     if (cloneList.length === 0) {
//         return;
//     }
//
//     // for(let key of cloneList){
//     //     if( key["cityName"] === likeCity.textContent) {
//     //         console.log(`${likeCity.textContent}  уже существует в избранных `)
//     //         return;
//     //     }
//     // }
//
//     cityList.pop();
//
//     if(cloneList === likeCity.textContent){
//         console.log(`${likeCity.textContent}  уже существует в избранных `)
//         return;
//     }
//
//     likeLocation(list,cloneList);
//
//     const favoriteCities  =  new AddFavoriteCities(likeCity.textContent);
//     list.add(favoriteCities);
//    saveFavoriteCities(list);
//     renderLikeList();
// }


renderLikeList();
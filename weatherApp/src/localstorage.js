export function saveFavoriteCities (favoriteCities ){
    localStorage.setItem("cityName", JSON.stringify([...favoriteCities]));
}

export function getFavoriteCities(){
    let favoriteCity = localStorage.getItem("cityName");
    if(!favoriteCity){
        return [];
    }
    return (JSON.parse(favoriteCity));
}
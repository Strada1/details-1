export { ITEMS_TAB, renderNowHTML, renderDetailsHTML, renderAddedLocationHTML }

const ITEMS_TAB = {
  Town2: document.getElementById('Town2'),
  formSumbitNow: document.getElementById('formSumbitNow'),
  Town: document.getElementById('Town'),
  formSumbitDetalis: document.getElementById('forrmSubmitDetalis'),
  tabNow: document.getElementById('tabNow'),
  tabDetalis: document.getElementById('tabDetalis'),
  tabForecast: document.getElementById('tabForecast')
}

function renderNowHTML (temperature, cityName, icon) {
  const linkImg = `//openweathermap.org/img/wn/${icon}@2x.png`

  // картинка в now
  const imgWeather = document.createElement('img')
  imgWeather.className = 'img_cloud'
  imgWeather.src = linkImg
  temperatureNow.prepend(imgWeather)

  // температура
  const divTemperature = document.createElement('div')
  divTemperature.className = 'temperature'
  divTemperature.textContent = `${temperature}°`
  temperatureNow.prepend(divTemperature)

  // локация во вкладке now
  const divName = document.createElement('div')
  divName.className = 'section1_text'
  divName.id = 'cityName'
  divName.textContent = cityName
  temperatureNow.append(divName)
}

function renderDetailsHTML (temperature, cityName, feelsLike, weatherStatus, Sunrise, Sunset) {
  // Имя города
  const divName = document.createElement('div')
  divName.className = 'Actobe_text'
  divName.textContent = cityName
  DetalisTab.prepend(divName)

  // Temperature
  const divTemperature = document.createElement('div')
  divTemperature.textContent = `Temperature: ${temperature}°`
  dataWether.append(divTemperature)

  // Feels like
  const divFeelslike = document.createElement('div')
  divFeelslike.textContent = `Feels like: ${feelsLike}°`
  dataWether.append(divFeelslike)

  // Weather
  const divWeather = document.createElement('div')
  divWeather.textContent = `Weather: ${weatherStatus}`
  dataWether.append(divWeather)

  // Sunrise
  const divSunrise = document.createElement('div')
  divSunrise.textContent = `Sunrise: ${Sunrise}`
  dataWether.append(divSunrise)

  // Sunset
  const divSunset = document.createElement('div')
  divSunset.textContent = `Sunset: ${Sunset}`
  dataWether.append(divSunset)
}

function renderAddedLocationHTML (listLocal, showNowTab, deleteTown) {
  listLocal.forEach(function (item) {
    // добавление в Now
    const divLocation = document.createElement('div')
    divLocation.textContent = item
    divLocation.onclick = showNowTab
    city.append(divLocation)
    // cityTab2.append(divLocation)

    const cross = document.createElement('input')
    cross.value = '☒'
    cross.type = 'submit'
    cross.classList = 'button_close'
    cross.onclick = deleteTown // переделать AddEventListner
    city.append(cross)
    // cityTab2.append(cross)

    // добавление в Detalis
    const divLocationTab2 = document.createElement('div')
    divLocationTab2.textContent = item
    divLocationTab2.onclick = showNowTab
    cityTab2.append(divLocationTab2)

    const crossTab2 = document.createElement('input')
    crossTab2.value = '☒'
    crossTab2.type = 'submit'
    crossTab2.classList = 'button_close'
    crossTab2.onclick = deleteTown
    cityTab2.append(crossTab2)
  })
}

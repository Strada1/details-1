import { ITEMS_TAB, renderNowHTML, renderDetailsHTML, renderAddedLocationHTML } from './view.js'
import { format } from 'date-fns'

window.addEventListener('unhandledrejection', function (event) {
  console.log(event.promise)
  console.log(event.reason)
})

let list = []

ITEMS_TAB.formSumbitNow.addEventListener('submit', addTown)
ITEMS_TAB.formSumbitDetalis.addEventListener('submit', addTown)

async function getItem () {
  let cityName = ITEMS_TAB.Town.value
  if (!cityName) {
    cityName = localStorage.getItem('lastCity')
  }
  cityName = cityName.trim()

  const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f'
  const serverUrl = '//api.openweathermap.org/data/2.5/weather'
  const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`

  const response = await fetch(url)
  if (response.ok) {
    const json = await response.json()
    createItems(json, cityName)
  } else {
    alert('Ошибка HTTP: ' + response.status)
  }
}

function createItems (json, cityName) {
  let temperature = (json.main.temp)
  temperature = Math.round(temperature)

  let feelsLike = (json.main.feels_like)
  feelsLike = Math.round(feelsLike)

  const WeatherStatus = (json.weather[0].main)

  let Sunrise = (json.sys.sunrise)
  Sunrise = new Date(Sunrise * 1000)
  Sunrise = format(Sunrise, "H':'mm':'ss")

  let Sunset = (json.sys.sunset)
  Sunset = new Date(Sunset * 1000)
  Sunset = format(Sunset, "H':'mm':'ss")

  const icon = (json.weather[0].icon)

  renderNow(temperature, cityName, icon)
  renderDetalis(temperature, cityName, feelsLike, WeatherStatus, Sunrise, Sunset)
  ITEMS_TAB.formSumbitNow.reset()
  ITEMS_TAB.formSumbitDetalis.reset()
}

async function addTown (event) {
  event.preventDefault()
  getItem()
}

function renderNow (temperature, cityName, icon) {
  const temperatureNow = document.getElementById('temperatureNow')
  const loveButton = document.getElementById('loveButton')
  temperatureNow.textContent = ''

  renderNowHTML(temperature, cityName, icon)

  // loveButton
  loveButton.classList.add('after__render')
  loveButton.addEventListener('click', addLocation)
}

function renderDetalis (temperature, cityName, feelsLike, WeatherStatus, Sunrise, Sunset) {
  const DetalisTab = document.getElementById('DetalisTab')
  const dataWether = document.getElementById('dataWether')
  DetalisTab.textContent = ''
  dataWether.textContent = ''

  renderDetailsHTML(temperature, cityName, feelsLike, WeatherStatus, Sunrise, Sunset)
}

function toStorage (list) {
  const citiesArray = JSON.stringify(list)
  localStorage.setItem('citiesArray', citiesArray)
}

function lastFavoriteViewed (cityName) {
  const lastCity = cityName
  localStorage.setItem('lastCity', lastCity)
}

function addLocation () {
  const cityValue = document.getElementById('cityName')
  const cityName = cityValue.textContent

  if (!list) {
    list = ['Варшава']
  }
  lastFavoriteViewed(cityName)

  const indexObj = list.findIndex(function (item) {
    return item === cityName
  })

  if (indexObj === -1 && localStorage.length) {
    toStorage(list)
    const cityInLs = JSON.parse(localStorage.getItem('citiesArray'))
    list = cityInLs
    list.push(cityName) // (заменить на concat или оператор расширения)

    toStorage(list)

    renderAddedLocation()
  } else {
    alert('Уже есть такой город')
  }
}

document.body.onload = renderAddedLocation()

function renderAddedLocation () {
  const city = document.getElementById('city')
  const cityTab2 = document.getElementById('cityTab2')
  city.textContent = ''
  cityTab2.textContent = ''

  let listLocal = JSON.parse(localStorage.getItem('citiesArray'))
  list = listLocal
  if (!listLocal) {
    listLocal = ['Варшава']
  }

  renderAddedLocationHTML(listLocal, showNowTab, deleteTown)
  showlastCity()
}

function deleteTown (event) {
  let town = event.target.previousSibling.textContent
  town = town.trim()
  const newList = list.filter((item) => (item !== town))
  toStorage(newList)
  renderAddedLocation()
}

async function showNowTab (event) {
  const cityName = event.target.textContent

  lastFavoriteViewed(cityName)
  getItem()

  // меняю цвет города по которому кликнул
  event.target.classList = 'showTown'
  setTimeout(() => event.target.className = 'delete__class', 350)
}

async function showlastCity () {
  let cityName = localStorage.getItem('lastCity')

  if (!cityName) {
    cityName = 'Варшава'
  }

  getItem()
}

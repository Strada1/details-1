const blockNowTemplate = document.getElementById('now-block')
  .content
  .querySelector('.now-block__wrapper');

const blockDetailsTemplate = document.getElementById('details-block')
  .content
  .querySelector('.details-block__wrapper');

const locationItemTemplate = document.getElementById('locations-item')
  .content
  .querySelector('.weather__locations-item');

const forecastItemTemplate = document.getElementById('forecast-item')
  .content
  .querySelector('.forecast-block__card');


export {
  blockNowTemplate,
  locationItemTemplate,
  blockDetailsTemplate,
  forecastItemTemplate
};

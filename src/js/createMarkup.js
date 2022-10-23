import { refs } from './refs';

export function createCountryListMarkup({ name, flags }) {
  const markup = `
  <li class="js-country-item">
    <img src="${flags.svg}" class="country-flag" alt="Flag" width="25">
    <p class="js-country-item__text">${name.common}</p>
  </li>`;

  refs.countryList.insertAdjacentHTML('beforeend', markup);
}

export function createCountryCardMarkup({
  name,
  capital,
  population,
  flags,
  languages,
}) {
  const lang = Object.values(languages);
  const card = `
    <div class="country-card">
    <div style="padding: 0">
      <img class="country-card__flag" src="${flags.svg}" alt="Flag">
    </div>
      <h2 class="country-card__title">${name.common}</h2>
    </div>
    <ul class="country-card__list">
      <li class="country-card__item"><b>Capital</b>: ${capital}</li>
      <li class="country-card__item"><b>Population</b>: ${population}</li>
      <li class="country-card__item"><b>Languages</b>: ${lang}</li>
    </ul>`;

  refs.countryCard.insertAdjacentHTML('beforeend', card);
}

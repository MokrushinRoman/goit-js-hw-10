import debounce from 'lodash.debounce';

import '../css/styles.css';

import { refs } from './refs';
import { onManyResultsAlert, onNoResultsAlert } from './notify';
import { fetchCountries } from './fetchCountries';
import {
  createCountryCardMarkup,
  createCountryListMarkup,
} from './createMarkup';

const DEBOUNCE_DELAY = 300;

refs.input.addEventListener('input', debounce(onInputChange, DEBOUNCE_DELAY));

function onInputChange(e) {
  const inputValue = e.target.value.trim().toLowerCase();

  if (!inputValue) {
    return;
  }

  fetchCountries(inputValue)
    .then(data => {
      dataFilter(data);
    })
    .catch(() => {
      clearMarkup();
      onNoResultsAlert();
    });
}

function dataFilter(data) {
  const length = data.length;

  if (length > 10) {
    onManyResultsAlert();
    clearMarkup();
    return;
  } else if (length >= 2 && length <= 10) {
    clearMarkup();
    data.forEach(country => createCountryListMarkup(country));
    return;
  } else {
    clearMarkup();
    createCountryCardMarkup(...data);
    return;
  }
}

function clearMarkup() {
  refs.countryList.innerHTML = '';
  refs.countryCard.innerHTML = '';
}

/*
--слушатель инпут на инпут(с DEBOUNCE_DELAY) {
    - запрос на сервер
    - фильтр пришедших данных {
        - если вернет больше 10 обьектов то обьявление
        -если 2-10 то список стран с флагом и название страны (".country-list")
        - если 1 то возвращиет карточку с данными (".country-info")
        - если пустой массив то вернет ошибку (new Error) c обьявлением
    }

+ --ссылки на инпутбсписок и див 

+ --оповещения {
    -инфо
    -ошибка
}

+ --запрос на сервер

--рендринг списка

--рендринг карточки

+ -- фильтр

      
}

*/

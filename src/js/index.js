import '../css/styles.css';
import debounce from 'lodash.debounce';

import { refs } from './refs';
import { onManyResults, onNoResults } from './notify';
import { fetchCountries, filtersToString } from './fetchCountries';

const DEBOUNCE_DELAY = 300;

refs.input.addEventListener('input', debounce(onInputChange, DEBOUNCE_DELAY));

function onInputChange(e) {
  const inputValue = e.target.value.trim().toLowerCase();

  if (!inputValue) {
    return;
  }

  fetchCountries(inputValue);
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

--запрос на сервер

--рендринг списка

--рендринг карточки

      
}

*/

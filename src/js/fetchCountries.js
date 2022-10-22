const SOURCE = 'https://restcountries.com/v3.1/name/';
const FILTERS = ['name', 'capital', 'population', 'flags', 'languages'];
const filtersToString = FILTERS.join();

export function fetchCountries(name) {
  return fetch(`${SOURCE}${name}?fields=${filtersToString}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

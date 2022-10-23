import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function onManyResultsAlert() {
  Notify.info('Too many matches found. Please enter a more specific name.');
}

export function onNoResultsAlert() {
  Notify.failure('Oops, there is no country with that name');
}

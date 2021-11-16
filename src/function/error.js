import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ref } from './ref';

export function error(errorID) {
  ref.country_info.innerHTML = '';
  ref.country_list.innerHTML = '';

  if (errorID === 404) {
    Notify.failure('Oops, there is no country with that name');
    return;
  }
  Notify.failure('Oops, something went wrong');
}

import { Notify } from 'notiflix/build/notiflix-notify-aio';
export function error(errorID) {
  if (errorID === 404) {
    Notify.failure('Oops, there is no country with that name');
    return;
  }
  Notify.failure('Oops, something went wrong');
}

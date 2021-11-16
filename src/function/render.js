import { ref } from './ref';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function renderCountries(countries) {
  if (countries.length > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
  } else if (countries.length < 2) {
    renderInfo(countries[0]);
  } else {
    renderList(countries);
  }
}

function renderInfo({ name, capital, population, flags, languages }) {
  ref.country_list.innerHTML = '';
  const infoCountrie = `
  <div><img class="flags" src="${flags.svg}" alt="${name.official}"> <span class="name"> ${
    name.official
  }</span></div>
  <div><span class="label">capital:</span> ${capital}</div>
  <div><span class="label">population:</span> ${new Intl.NumberFormat('ru-RU', {
    useGrouping: 'currency',
  }).format(population)} - 웃 </div>
  <div><span class="label">languages:</span> ${Object.values(languages).join(', ')}</div>
  `;
  ref.country_info.innerHTML = infoCountrie;
}

function renderList(countries) {
  ref.country_info.innerHTML = '';
  let listCountries = '';
  countries.map(({ name, flags }) => {
    listCountries += `
        <li class="item">  <img class="flags" src="${flags.svg}" alt="${name.official}"> <span class="name"> ${name.official}</span> </li>
        `;
    ref.country_list.innerHTML = listCountries;
  });
}

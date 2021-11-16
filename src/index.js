import './css/styles.css';
import { fetchCountries } from './function/fetchAPI';
import { error } from './function/error';
import debounce from 'lodash.debounce';
import { ref } from './function/ref';
import { renderCountries } from './function/render';

const DEBOUNCE_DELAY = 300;

ref.search_box.addEventListener('input', debounce(onInputName, DEBOUNCE_DELAY));

function onInputName(e) {
  //console.log(e.target.value);
  const name = e.target.value.trim();
  if (name) {
    fetchCountries(name).then(renderCountries).catch(error);
  } else {
    ref.country_info.innerHTML = '';
    ref.country_list.innerHTML = '';
  }
}

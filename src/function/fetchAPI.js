export function fetchCountries(name) {
  const url = `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`;
  return fetch(url).then(response => {
    if (!response.ok) {
      if (response.status === 404) {
        throw 404;
      }
      throw new Error(response.status);
    }
    return response.json();
  });
}

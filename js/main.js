const lodeCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displyCountries(data))
}
lodeCountries()
const displyCountries = countries => {
    //console.log(countries[0]);
    const container = document.getElementById('countries')
    const countryHTML = countries.map(country => getCountriesHTML
        (country))
    container.innerHTML = countryHTML.join(' ');
    //  console.log(countryHTML[0])
}
getCountriesHTML = country => {
    const { name, capital, flag } = country;
    return `
    <div class="country">
    <h2>${name}</h2>
    <h4>capital: ${capital}</h4>
    <img src="${flag}">
    </div>
    `
}
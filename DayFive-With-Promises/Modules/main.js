//^ Importing the named modules (functions)
import { getCountryByName } from './get-country-data.js';
import { getNeighborCountry } from './get-neighbor.js';

//^ Grabbing Actions (Button Fire & container to display data)
const getCountryDataBtn = document.querySelector('#GetCountryData');
const container = document.getElementById('country-container');

//^ Apply the event handler
getCountryDataBtn.addEventListener('click', () => {
    const countryName = document.getElementById('countryName').value.trim();
    
    //^ check on country name
    if (!countryName) {
        container.innerHTML = "<p>Please enter a country name</p>";
        return;
    }

    //& Apply Promise chaining
    getCountryByName(countryName) //^ Egypt
        .then(country => {
            const name = country.name; //^ Egypt
            const region = country.region;  //^ Africa
            const population = (country.population / 1_000_000).toFixed(1) + " Million People";
            const language = country.languages[0].name;
            const currency = country.currencies[0].name;
            const flag = country.flag;

            //^ Displaying the data in the container
            container.innerHTML = `
                <div class="country-card">
                    <img src="${flag}" alt="${name} flag">
                    <h2>${name}</h2>
                    <h3>${region}</h3>
                    <p>Population: ${population}</p>
                    <p>Lang: ${language}</p>
                    <p>Currency: ${currency}</p>
                </div>
            `;

            //& chain neighbor fetch
            return getNeighborCountry(); 
        })
        .catch(err => {
            container.innerHTML = "<p>Country not found!</p>";
            const neighborContainer = document.getElementById('neighbor-country');
            neighborContainer.innerHTML = "";
            console.error(err);
        });
});

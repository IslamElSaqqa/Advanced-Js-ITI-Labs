//? in the first module, I am gonna fetch a specific country by name
//? Named Export

import { getNeighborCountry } from "./get-neighbor.js";
//^ I need to keep track of the input country entered from the user to use it in the second module
//& make a variable and initialize it to null
export let chosenCountry = null;


export const getCountryByName = async () => {
    //& Get the Country Button and the container for displaying the data
    const getCountryDataBtn = document.querySelector('#GetCountryData');
    const container = document.getElementById('country-container');

    //^ using the event listener with the async instead of catching promises
    getCountryDataBtn.addEventListener('click', async () => {
        const countryName = document.getElementById('countryName').value.trim();

        if (!countryName) {
            throw new Error("Country name doesn't exist"); //^ Fires error on the console and ends
            // return;
        }

        try {
            //& getting the Response data using await
            const res = await fetch(`https://restcountries.com/v2/name/${countryName}`);
            const data = await res.json(); //^ to be cleaned in JSON FORMAT

             chosenCountry = data[0] //^ Egypt
            console.log(chosenCountry); //^ {0: {name: 'Egypt'}, .....}

            //& Geographical Data
            const name = chosenCountry.name;
            const region = chosenCountry.region;
            //^ Population Equation in millions Format (103000000 / 1000000) -> 103.0
            const population = (chosenCountry.population / 1_000_000).toFixed(1) + " Million People";
            const language = chosenCountry.languages[0].name; //^ Arabic
            const currency = chosenCountry.currencies[0].name; //^ Pounds
            const flag = chosenCountry.flag; //^ Getting the flag Image

            //^ Appending Country Data on the card container(#country-container)
            container.innerHTML = `
                <div class="country-card">
                    <img src="${flag}" alt="${name} flag">
                    <h2>${name}</h2>
                    <h3>${region}</h3>
                    <p>population: ${population}</p>
                    <p>Lang:${language}</p>
                    <p>Currency: ${currency}</p>
                </div>
            `;

            getNeighborCountry();
            //& Catching the error
        } catch (error) {
            container.innerHTML = `<p>Sorry, Country not found! </p>`;
            chosenCountry = null;
        }
    });
}
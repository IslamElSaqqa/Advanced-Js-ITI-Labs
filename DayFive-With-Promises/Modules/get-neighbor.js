import { chosenCountry } from "./get-country-data.js";

export const getNeighborCountry = () => {
    //^ Grab the container on which we display data
    const neighborContainer = document.getElementById('neighbor-country');

        //& neighbor code is 1
        const neighborCode = chosenCountry.borders[1];

        fetch(`https://restcountries.com/v2/alpha/${neighborCode}`)
            .then(res => res.json()) //^ return a promise ^fulfilled to data object
            .then(neighbor => {
                neighborContainer.innerHTML = `
                    <div class="country-card">
                        <img src="${neighbor.flag}" alt="${neighbor.name} flag">
                        <h2>${neighbor.name}</h2>
                        <h3>${neighbor.region}</h3> 
                        <p>Population: ${(neighbor.population/1_000_000).toFixed(1)} Million People</p>
                        <p>Lang: ${neighbor.languages[0].name}</p>
                        <p>Currency: ${neighbor.currencies[0].name}</p>
                    </div>
                `;
            })
            .catch(err => {
                neighborContainer.innerHTML = "<p>Neighbor country not found.</p>";
            });
};


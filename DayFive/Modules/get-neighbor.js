//? Module 2: Get the neighbor of the country (get-neighbor.js)
//? We need to get the neighbor of the country used by name

 //^ Named Import
import { chosenCountry } from "./get-country-data.js";

export const getNeighborCountry = async () => {
    const neighborContainer = document.getElementById('neighbor-country');

    try {
        if (!chosenCountry || !chosenCountry.borders || chosenCountry.borders.length === 0) {
            neighborContainer.innerHTML = "<p>No neighboring countries found.</p>";
            // throw new Error("No neighbor or borders = 0");
            return;
        }

        //& Get the neighbor Code and pass it to the fetch 
        const neighborCode = chosenCountry.borders[1];
        const res = await fetch(`https://restcountries.com/v2/alpha/${neighborCode}`);
        
        //^ Cleaning and tranforming data into json
        const neighbor = await res.json(); 

        //^ Get Business data
        const name = neighbor.name; //& Libya
        const region = neighbor.region; //& Africa
        const population = (neighbor.population / 1_000_000).toFixed(1) + " Million People";
        const language = neighbor.languages[0].name;
        const currency = neighbor.currencies[0].name;
        const flag = neighbor.flag;

        //^ Displaying data on the card container
        neighborContainer.innerHTML = `
            <div class="country-card">
                <img src="${flag}" alt="${name} flag">
                <h2>${name}</h2>    //& Country name
                <h3>${region}</h3>  //& Region
                <p>Population: ${population}</p> //& 103.0 Million
                <p>Lang: ${language}</p>    //& Arabic
                <p>Currency: ${currency}</p> 
            </div>
        `;
    } catch (error) {
        neighborContainer.innerHTML = "<p>Neighbor country not found.</p>";
        console.error(error);
    }
};

//? Module 1
//& to keep track on the country name 
//& Check on the borders
export let chosenCountry = null; //^ Initial value to keep track on the chosenCountry

//^ 1- Fetch country by name
//^ 2- return a Promise with the country object
export const getCountryByName = (countryName) => {
    return fetch(`https://restcountries.com/v2/name/${countryName}`)
        .then(res => res.json()) //^ Parsing
        .then(data => {
            if (!data || !data[0]) {
                throw new Error("Country not found");
            }

            //? Get the data from the object after parsing
            chosenCountry = data[0];

            return chosenCountry; //^ Promise Chain
        });
};

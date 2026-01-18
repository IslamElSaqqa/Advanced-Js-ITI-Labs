const userProfiles = [];

//? Creating A user Profile Constructor
function createUser(name, age, street, city) {
    return {
        name: name,
        age: age,
        address: { street, city },
        getFullAddress() {
            return `${this.address.street}, ${this.address.city}`;
        }
    };
}

//? (Add, Display, sortByName, sortByAge, filterByAge )
//& Add User
function addUser(name, age, street, city) {
    if (name && age && street && city) {
        const user = createUser(name, age, street, city);
        userProfiles.push(user);
        console.log(`User added: ${name}`);

    } else {
        console.log('All inputs are required');
    }
}

function displayUsers() {
    console.log("All Users:");
    if (userProfiles.length === 0) {
        console.log("Empty Users.");
        return;
    }

    userProfiles.forEach((user, index) => {
        console.log(`
            ${index + 1}.  
            Name: ${user.name},
            Age: ${user.age}, 
            Address: ${user.getFullAddress()}`);
    });
}

//& sort by name (a,b) => a.name.localCompare(b.name)
function sortByName() {
    userProfiles.sort((a, b) => a.name.localeCompare(b.name));
    console.log("Users sorted by name.");
    displayUsers();
}

//& sort by Age (Minimum age = 25)  sort (a,b)=> a - b => ascending
function sortByAge() {
    userProfiles.sort((a, b) => a.age - b.age);
    console.log("Users sorted by age.");
    displayUsers();
}

//& Filtering by age using filter ()
function filterByAge(minimumAge = 25) {
    const filtered = userProfiles.filter(user => user.age > minAge);
    console.log(`Users with age > ${minimumAge}:`);

    //& check if the filterd array is empty
    if (filtered.length === 0) {
        console.log("No users found.");
        return;
    }
    filtered.forEach((user, index) => {
        console.log(`
            ${index + 1}.
            Name: ${user.name}, 
            Age: ${user.age}, 
            Address: ${user.getFullAddress()}`
        );
    });
}

//^ Function Calls:
addUser('Islam', 26, 'Amr-Ibn-Aljomouht', 'Alexandria');
addUser('ahmed', 25, 'ELAwayed', 'Alexandria');
displayUsers();
sortByName();
// sortByAge();
// filterByAge();

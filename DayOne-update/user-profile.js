const userProfiles = {
    users: [],

    // Add a new user
    addUser(name, age, street, city) {
        if (name && age && street && city) {
            const user = {
                name: name,
                age: age,
                address: { street, city },
                getFullAddress() {
                    return `${this.address.street}, ${this.address.city}`;
                }
            };
            this.users.push(user);
            console.log(`User added: ${name}`);
            return true;
        }
        console.log('All inputs are required');
        return false;
    },

    // Remove a user by name
    removeUser(name) {
        const index = this.users.findIndex(user => user.name === name);
        if (index > -1) {
            const removed = this.users.splice(index, 1)[0];
            console.log(`User removed: ${removed.name}`);
            return true;
        }
        console.log(`User not found: ${name}`);
        return false;
    },

    // List all users
    listUsers() {
        console.log("All Users:");
        if (this.users.length === 0) {
            console.log("No users found.");
            return;
        }

        this.users.forEach((user, index) => {
            console.log(`${index + 1}. Name: ${user.name}, Age: ${user.age}, Address: ${user.getFullAddress()}`);
        });
    },

    // Sort users by name
    sortByName() {
        this.users.sort((a, b) => a.name.localeCompare(b.name));
        console.log("Users sorted by name.");
        this.listUsers();
    },

    // Sort users by age
    sortByAge() {
        this.users.sort((a, b) => a.age - b.age);
        console.log("Users sorted by age.");
        this.listUsers();
    },

    // Filter users by minimum age
    filterByAge(minimumAge = 25) {
        const filtered = this.users.filter(user => user.age > minimumAge);
        console.log(`Users with age > ${minimumAge}:`);

        if (filtered.length === 0) {
            console.log("No users found.");
            return;
        }

        filtered.forEach((user, index) => {
            console.log(`${index + 1}. Name: ${user.name}, Age: ${user.age}, Address: ${user.getFullAddress()}`);
        });
    }
};

//^ Function Calls:
userProfiles.addUser('Islam', 26, 'Amr-Ibn-Aljomouht', 'Alexandria');
userProfiles.addUser('Ahmed', 25, 'ELAwayed', 'Alexandria');
userProfiles.listUsers();        //! List all
userProfiles.sortByName();       //! Sorted by name
userProfiles.sortByAge();        //! Sorted by age
userProfiles.filterByAge(25);    //! Filter users older than 25
userProfiles.removeUser('Ahmed');//! Remove user
userProfiles.listUsers();        //! List after removal

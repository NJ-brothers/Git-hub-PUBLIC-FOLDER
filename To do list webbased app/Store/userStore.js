let users = []

getUsersFromLocalStorage();

// [
//     {
//         username: "rjjngr", password: "rrggr"
//         for future  db/local storage ka kam:
//              todos : [{},{},{}]
//     },
//     {
//         username: "rjjngr", password: "rrggr"
//     },
//     {
//         username: "rjjngr", password: "rrggr"
//     },
//     {
//         username: "rjjngr", password: "rrggr"
//     },
//     {
//         username: "rjjngr", password: "rrggr"
//     },
// ]

export function addUser(username, password) {
    users.push({
        username,
        password
    });
    saveUsersToLocalStorage();
}

export function getUsers() {
    return users;
}

export function getUserByUsernameAndPassword(username, password) {
    const user = users.map((value) => { 
        if(value.username === username && value.password === password) {
            return value;
        }
    });

    return user;

    // for(let i = 0; i < users.length; i++) {
    //     if(users[i].username === username && users[i].password === password) {
    //         return users[i];
    //     }
    // }

    // return null;
}

function saveUsersToLocalStorage() {
    localStorage.setItem("users", JSON.stringify(users));
}

function getUsersFromLocalStorage() {
    users = JSON.parse(localStorage.getItem("users")) || [];
}
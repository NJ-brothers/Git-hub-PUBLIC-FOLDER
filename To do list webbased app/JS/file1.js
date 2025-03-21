import { getUserByUsernameAndPassword } from "../Store/userStore.js";

const loginBtn = document.querySelector("#login-btn");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

function validateFields() {
    if(username.value.length === 0) {
        alert("Please fill username!")
        return false;
    }

    if(password.value.length === 0) {
        alert("Please fill password!")
        return false;
    }

    return true;
}

function handleLogin() {
    if(validateFields()) {
        console.log(username.value, password.value)
        const user = getUserByUsernameAndPassword(username.value, password.value);
        console.log(user);
        if(user) {
            alert("Login successful!");
            window.location.assign("http://127.0.0.1:5500/HTML/file2.html");
        }
        else {
            alert("Invalid Credentials!");
        }
        
    }
}

loginBtn.addEventListener(('click'), handleLogin);
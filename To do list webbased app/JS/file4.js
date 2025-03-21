import { addUser } from "../Store/userStore.js";

const signUpBtn = document.querySelector("#sign-up-btn");

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

    if(password.value.length < 8) {
        alert("Password length must be 8 or greater!")
        return false;
    }

    return true;
}

function handleSignUp() {
    if(validateFields()) {
        addUser(username.value, password.value);   
        alert("Sign up successful!");
        window.location.assign("http://127.0.0.1:5500/HTML/file1.html");
    }
}

signUpBtn.addEventListener(('click'), handleSignUp);
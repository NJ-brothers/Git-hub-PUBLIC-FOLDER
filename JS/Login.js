const emailaddress = document.getElementById("input1");
const password = document.getElementById("input2");
const button1 = document.getElementById("loginbtn");
const errormsg1 = document.getElementById("error1");
const errormsg2 = document.getElementById("error2");

button1.addEventListener('click',event=>{
    checkemail();
    checkpass();

});


function checkemail() {
    const value = emailaddress.value;
    if(value.length === 0) {
        errormsg1.textContent = "email cannot be empty";
    }
    else if(!value.includes('@')){
        errormsg1.textContent = "Invalid email";
    }
    else {
        errormsg1.textContent = "";
    }
}


function checkpass() {
    const value = password.value;
    if(value.length <= 6){
        errormsg2.textContent = "length should be greater or equal to 6";
    }
    else {
        errormsg2.textContent = "";
    }
}


//use regex for number detecting number in strings.9.9
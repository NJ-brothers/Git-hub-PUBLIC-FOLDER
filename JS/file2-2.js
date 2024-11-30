const name = document.getElementById("input3");
const surname = document.getElementById("input4");
const emailaddress = document.getElementById("input1");
const password = document.getElementById("input2");
const buton1 = document.getElementById("createbtn");


buton1.addEventListener("click",event=>{
    checkemail();
    checkpass();
    username();
    username2(surname);

});


function checkemail() {
    const value = emailaddress.value;
    if(value.length === 0) {
        console.log("email cannot be empty");
    }
    else if(!value.includes('@')){
        console.log("Invalid email")
    }
    else {
        console.log("");
    }
}


function checkpass() {
    const value = password.value;
    if(value.length <= 6){
        console.log("length should be greater or equal to 6");
    }
    else {
        console.log("");
    }
}

function username() {
    console.log(name);

}

function username2() {
    console.log(surname);
}
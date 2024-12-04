const display1 = document.getElementById("display");
const condition1 = document.getElementById("calculate");

function appendToDisplay(input) {
    display1.value += input;

}

function clearDisplay(input) {
    display1.value = "";

}

function calculate(input) {
    display1.value = eval(display1.value);

}
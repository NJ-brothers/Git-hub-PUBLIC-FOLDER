// let soup = 1;
// let burger = 3;
// let icecream = 1;

// // For 20 percent 2e excersise
// console.log("Your total soup price is:",soup *10);
// console.log("Your total burger price is:",burger*8);
// console.log("Your total icecream price is:",icecream*5);


// console.log("Your total soup price is:",soup *10*20/100);
// console.log("Your total burger price is:",burger*8*20/100);
// console.log("Your total icecream price is:",icecream*5*20/100);


// let temp = -5;
// Farhenheit = (temp*9/5)+32;
// console.log(Farhenheit);

// let temp2 = 86;
// Celsius = (temp2-32)*5/9;
// console.log(Celsius);

// let num1 = '$' + (20+10);
// console.log(num1);


//EX3g complete 
// let coffe = 599;
// let baggel = 295; 
// total = (coffe + baggel)/100;
// console.log("Total cost:$",total);
// console.log("Thank you,come again!");

// let cartButton = document.getElementById("cart-button");
// let buyButton = document.getElementById("buy-button");

// cartButton.addEventListener("click",event=>{
//     cartButton.style.background = "blue";
//     cartButton.style.textContent = "Added";
//     cartButton.style.color = "white";

// })

// cartButton.addEventListener("mouseout",event=>{
//     cartButton.style.backgroundColor = "Yellow";
//     cartButton.style.color = "Black";

// })


// buyButton.addEventListener("click",event=>{
//     buyButton.style.background = "green";
//     buyButton.style.TextContent = "Buyed";
//     buyButton.style.color = "white";

// })

// buyButton.addEventListener("mouseout",event=>{
//     buyButton.style.backgroundColor = "red";
//     buyButton.style.color = "Black";

// })



let showbuton = document.getElementById("showbuton");
let addbuton = document.getElementById("addbuton");
let add1 = document.getElementById("add1");
let resetbuton = document.getElementById("resetbuton");
let quantity = 0;

showbuton.addEventListener("click",event=>{
    console.log("Your Quantity:",quantity);

})

addbuton.addEventListener("click",event=>{
    quantity+=1;
    console.log("Quantity Added:",quantity);

})


add1.addEventListener("click",event=>{
    quantity+=2;
    console.log("Quantity Added:",quantity);

})


add2.addEventListener("click",event=>{
    quantity+=3;
    console.log("Quantity Added:",quantity);

})

resetbuton.addEventListener("click",event=>{
    quantity=0;
    console.log("Quantity Reset:",quantity);

})
// let function1 = function hello1(){
//     console.log("hello1");
// };
// function1();


// let object1 = {
//     name:"Jawad",
//     fun: function hello4(object1) {
//         console.log("hello2");
//     }
// };

// console.log(object1.name);
// object1.fun();


// let function3 = function call1(function1,){
//     console.log("it's me call 1");
//     function1();
//     console.log(object1.name);

// };

// function3(function1);


// function main_func_J() {

// setTimeout(function(){
//     console.log("hello guys how are you i hope you are fine! here's my little project");
//     console.log(" ******\n");
//     console.log("   **\n");
//     console.log("   **\n");
//     console.log("   **\n");
//     console.log(" ****\n");
//     console.log(" ****\n");
// },5000);

// }

// function show1() {
//     setTimeout(function(){
//         console.log("Here's the starting!")
//     },11500);
    
//     setTimeout(function(){
//         console.log(" ******\n");
//     },12000);
    
//     setTimeout(function(){
//         console.log("   **\n");
//     },13000);
    
//     setTimeout(function(){
//         console.log("   **\n");
//     },14000);
    
//     setTimeout(function(){
//         console.log("   **\n");
//     },15000);
    
//     setTimeout(function(){
//         console.log(" ****\n");
//     },16000);
    
//     setTimeout(function(){
//         console.log(" ****\n");
//     },17000);
    
    
//     setInterval(() => {
//        console.log("****THE END*****") 
//     }, 18000);

//     setInterval(() => {
//         console.log("****THE END*****") 
//      }, 19000);
// }


function practice1_filter() {
    let array1 = [1 ,2 , 4, 3, 0].filter((value, index)=>{
        if(value < 0) {
            return false;
        }
        else if(value > 0) {
            return true;
        }
        else if(value === 0) {
            let this1 = console.log("hello");
            return this1;
        }
    });
    console.log(array1);
}

practice1_filter();
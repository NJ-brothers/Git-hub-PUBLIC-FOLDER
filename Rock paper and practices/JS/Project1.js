let buton1 = document.getElementById("button1");
let buton2 = document.getElementById("button2");
let buton3 = document.getElementById("button3");
let buton4 = document.getElementById("button4");
let youtubeBtn1 = document.getElementById("youtube-Btn1");
let inputbuton = document.getElementById("inp-Btn");
let costprice;

//using object
const score = {
    win: 0,
    loses: 0,
    draws: 0,
};


buton1.addEventListener("click", event => {
    playgame1();
})
function playgame1(usermove1='Rock') {
    let result1 = '';
    const random1 = Math.random();
    let computermove1 = '';

    if (random1 >= 0 && random1 < 0.3) {
        computermove1 = "Rock";
    }
    else if (random1 >= 0.3 && random1 < 0.6) {
        computermove1 = "Paper";
    }
    else if (random1 >= 0.6 && random1 < 1) {
        computermove1 = "Scissors";
    }

    if (usermove1 === 'Rock') {
        if (computermove1 === "Rock") {
            result1 = "Tie";
        }
        else if (computermove1 === "Scissors") {
            result1 = "You win";
        }
        else if (computermove1 === "Paper") {
            result1 = "You lose";
        }
    }

    document.querySelector('.resultofmoves').innerHTML = `You Picked:Rock and Computer Picked:${computermove1}`;


    document.querySelector('.result').innerHTML = `Result=${result1}`;


    if (result1 === 'You win') {
        score.win = score.win + 1;
    }
    else if (result1 === 'You lose') {
        score.loses = score.loses + 1;
    }
    else if (result1 === 'Tie') {
        score.draws = score.draws + 1;
    }

    document.querySelector('.resultwinsandloses')
    .innerHTML = `Wins:${score.win},loses:${score.loses},ties:${score.draws}`;


    // alert(`You picked rock and Computer picked ${computermove1} \nResult:${result1}\nWins:${score.win} Loses:${score.loses} Draws:${score.draws}`);
}


buton3.addEventListener("click", event => {
    playgame2();

})
function playgame2(computermove4 = 'Scissors') {
    const random2 = Math.random();
    let result2 = '';
    let computermove2 = '';

    if (random2 >= 0 && random2 < 0.3) {
        computermove2 = "Rock";
    }
    else if (random2 >= 0.3 && random2 < 0.6) {
        computermove2 = "Paper";
    }
    else if (random2 >= 0.6 && random2 < 1) {
        computermove2 = "Scissors";
    }

    if (computermove4 === 'Scissors') {

        if (computermove2 === "Rock") {
            result2 = "You lose";
        }
        else if (computermove2 === "Scissors") {
            result2 = "Tie";
        }
        else if (computermove2 === "Paper") {
            result2 = "You win";
        }

    }


    document.querySelector('.resultofmoves').innerHTML = `You Picked:Scissors and Computer Picked:${computermove2}`;


    document.querySelector('.result').innerHTML = `Result=${result2}`;

    if (result2 === 'You win') {
        score.win = score.win + 1;
    }
    else if (result2 === 'You lose') {
        score.loses = score.loses + 1;
    }
    else if (result2 === 'Tie') {
        score.draws = score.draws + 1;
    }

    // alert(`You picked scissors and Computer picked ${computermove2} \nResult:${result2}\nWins:${score.win} Loses:${score.loses} Draws:${score.draws}`);
    document.querySelector('.resultwinsandloses')
    .innerHTML = `Wins:${score.win},loses:${score.loses},ties:${score.draws}`;

}


buton2.addEventListener("click", event => {
    playgame3();

})
function playgame3(computermove5 = 'Paper') {
    const random3 = Math.random();
    let computermove3 = '';
    let result3 = '';

    if (random3 >= 0 && random3 < 0.3) {
        computermove3 = "Rock";
    }
    else if (random3 >= 0.3 && random3 < 0.6) {
        computermove3 = "Paper";
    }
    else if (random3 >= 0.6 && random3 < 1) {
        computermove3 = "Scissors";
    }

    if (computermove5 === 'Paper') {
        if (computermove3 === "Rock") {
            result3 = "You win";
        }
        else if (computermove3 === "Scissors") {
            result3 = "You lose";
        }
        else if (computermove3 === "Paper") {
            result3 = "tie";
        }
    }

    document.querySelector('.resultofmoves').innerHTML = `You Picked:Paper and Computer Picked:${computermove3}`;


    document.querySelector('.result').innerHTML = `Result=${result3}`;

    if (result3 === 'You win') {
        score.win = score.win + 1;
    }
    else if (result3 === 'You lose') {
        score.loses = score.loses + 1;
    }
    else if (result3 === 'tie') {
        score.draws = score.draws + 1;
    }

    document.querySelector('.resultwinsandloses')
    .innerHTML = `Wins:${score.win},loses:${score.loses},ties:${score.draws}`;

    // alert(`You picked paper and Computer picked ${computermove3} \nResult:${result3}\nWins:${score.win} Loses:${score.loses} Draws:${score.draws}`);
}


buton4.addEventListener("click", event => {
    resetbuton();
});
function resetbuton() {
    score.win = 0;
    score.loses = 0;
    score.draws = 0;
    // alert(`Win:${score.win} Loses:${score.loses} Draws:${score.draws}`);
    document.querySelector('.resultwinsandloses')
    .innerHTML = `Wins:${score.win},loses:${score.loses},ties:${score.draws}`;
}

//1st method:
youtubeBtn1.addEventListener('click',event=>{
    youtubeBtn1.style.backgroundColor = 'red';
    youtubeBtn1.style.color = 'white';
    youtubeBtn1.style.border = '1px white solid';
    youtubeBtn1.style.textContent = 'Sub';
    subscribe();

});
youtubeBtn1.addEventListener('mouseout',event=>{
    youtubeBtn1.style.backgroundColor = 'white';
    youtubeBtn1.style.color = 'black';
    youtubeBtn1.style.border = '1px solid black';
    reset_subscribe();

});


function reset_subscribe() {
    const buttonElement = document.querySelector('.youtube-btn1');
    buttonElement.innerHTML= 'Subscribe';
}

inputbuton.addEventListener('click',event=> {
    for_caculation();

})


function for_caculation() {
    let costprice = Number(document.querySelector(".inp1").value);
    if ( costprice <= 40){
        costprice = costprice + 10;
        console.log(costprice);
        //if order is less than 40 it means order=order+10 shipping fee
    }
        document.querySelector('.result2').innerHTML = `Result:$${costprice}`;
    }


//2nd method(supersimpledev):
// youtubeBtn1.addEventListener('click',event=>{
//     subscribe();
//     youtubeBtn1.style.color = 'red';
//     youtubeBtn1.style.border= '1px solid red';
// })
function subscribe() {
    const buttonElement = document.querySelector('.youtube-btn1');
    if (buttonElement.innerHTML=== 'Subscribe'){
        buttonElement.innerHTML = 'Subscribed';
    }
    else {
        buttonElement.innerHTML = 'Subscribe';
    }
}


// document.querySelector('.result').innerHTML = "";
// document.querySelector('.resultofmoves').innerHTML = "";
// document.querySelector('.resultwinsandloses')
//     .innerHTML = `Wins:${score.win},loses:${score.loses},ties:${score.draws}`;


//conversion
// Number(12);
// console.log(192+10);
let buton1 = document.getElementById("rock-pic");
let buton2 = document.getElementById("paper-pic");
let buton3 = document.getElementById("scissors-pic");
let rockpic = document.getElementById("para2");
let buton4 = document.getElementById("button4");
let mymove1 = document.getElementById("mymove1");
let computermoves1 = document.getElementById("computermoves1");
let autoplaybuton1 = document.getElementById("button5");
let autoplaybuton2 = document.getElementById("button6");
let autoplaybuton3 = document.getElementById("button7");



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

    mymove1.setAttribute('src','/Pics/rock-emoji.png');

    if (random1 >= 0 && random1 < 0.3) {
        computermove1 = "Rock";
        computermoves1.setAttribute('src','/Pics/rock-emoji.png');

    }
    else if (random1 >= 0.3 && random1 < 0.6) {
        computermove1 = "Paper";
        computermoves1.setAttribute('src','/Pics/paper-emoji.png');
    }
    else if (random1 >= 0.6 && random1 < 1) {
        computermove1 = "Scissors";
        computermoves1.setAttribute('src','/Pics/scissors-emoji.png');
    }
    if (usermove1 === 'Rock') {
        if (computermove1 === "Rock") {
            result1 = "Tie";
            document.querySelector('.moves_result').innerHTML = ("Tie.");
        }
        else if (computermove1 === "Scissors") {
            result1 = "You win";
            document.querySelector('.moves_result').innerHTML = ("You Win.");
        }
        else if (computermove1 === "Paper") {
            result1 = "You lose";
            document.querySelector('.moves_result').innerHTML = ("You Lose.");
        }
    }

    document.querySelector('.para1').innerHTML = `You Picked:rock and Computer Picked:${computermove1}`;


    if (result1 === 'You win') {
        score.win = score.win + 1;
    }
    else if (result1 === 'You lose') {
        score.loses = score.loses + 1;
    }
    else if (result1 === 'Tie') {
        score.draws = score.draws + 1;
    }

    document.querySelector('.result')
    .innerHTML = `Wins:${score.win},loses:${score.loses},ties:${score.draws}`;

    document.querySelector('.para3').innerHTML = `Result = ${result1}`;

    document.querySelector('.mymovepara-1').innerHTML = 'You: ';
    document.querySelector('.computerpara-1').innerHTML = 'Computer: ';
    // alert(`You picked rock and Computer picked ${computermove1} \nResult:${result1}\nWins:${score.win} Loses:${score.loses} Draws:${score.draws}`);
}


buton3.addEventListener("click", event => {
    playgame2();

})
function playgame2(computermove4 = 'Scissors') {
    const random2 = Math.random();
    let result2 = '';
    let computermove2 = '';


    mymove1.setAttribute('src','/Pics/scissors-emoji.png');

    if (random2 >= 0 && random2 < 0.3) {
        computermove2 = "Rock";
        computermoves1.setAttribute('src','/Pics/rock-emoji.png')
    }
    else if (random2 >= 0.3 && random2 < 0.6) {
        computermove2 = "Paper";
        computermoves1.setAttribute('src','/Pics/paper-emoji.png');
    }
    else if (random2 >= 0.6 && random2 < 1) {
        computermove2 = "Scissors";
        computermoves1.setAttribute('src','/Pics/scissors-emoji.png');
    }

    if (computermove4 === 'Scissors') {

        if (computermove2 === "Rock") {
            result2 = "You lose";
            document.querySelector('.moves_result').innerHTML = ("You Lose.");
        }
        else if (computermove2 === "Scissors") {
            result2 = "Tie";
            document.querySelector('.moves_result').innerHTML = ("Tie.");
        }
        else if (computermove2 === "Paper") {
            result2 = "You win";
            document.querySelector('.moves_result').innerHTML = ("You Win.");
        }

    }


    document.querySelector('.para1').innerHTML = `You Picked:Scissors and Computer Picked:${computermove2}`;


    document.querySelector('.para3').innerHTML = `Result=${result2}`;

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
    document.querySelector('.result')
    .innerHTML = `Wins:${score.win},loses:${score.loses},ties:${score.draws}`;


    document.querySelector('.mymovepara-1').innerHTML = 'You: ';
    document.querySelector('.computerpara-1').innerHTML = 'Computer: ';

}


buton2.addEventListener("click", event => {
    playgame3();

})
function playgame3(computermove5 = 'Paper') {
    const random3 = Math.random();
    let computermove3 = '';
    let result3 = '';

    mymove1.setAttribute('src','/Pics/paper-emoji.png');

    if (random3 >= 0 && random3 < 0.3) {
        computermove3 = "Rock";
        computermoves1.setAttribute('src','/Pics/rock-emoji.png');

    }
    else if (random3 >= 0.3 && random3 < 0.6) {
        computermove3 = "Paper";
        computermoves1.setAttribute('src','/Pics/paper-emoji.png');

    }
    else if (random3 >= 0.6 && random3 < 1) {
        computermove3 = "Scissors";
        computermoves1.setAttribute('src','/Pics/scissors-emoji.png');
    }

    if (computermove5 === 'Paper') {
        if (computermove3 === "Rock") {
            result3 = "You win";
            document.querySelector('.moves_result').innerHTML = ("You Win.");
            
        }
        else if (computermove3 === "Scissors") {
            result3 = "You lose";
            document.querySelector('.moves_result').innerHTML = ("You Lose.");
        }
        else if (computermove3 === "Paper") {
            result3 = "tie";
            document.querySelector('.moves_result').innerHTML = ("Tie.");
        }
    }

    document.querySelector('.para1').innerHTML = `You Picked:Paper and Computer Picked:${computermove3}`;


    document.querySelector('.para3').innerHTML = `Result=${result3}`;

    if (result3 === 'You win') {
        score.win = score.win + 1;
    }
    else if (result3 === 'You lose') {
        score.loses = score.loses + 1;
    }
    else if (result3 === 'tie') {
        score.draws = score.draws + 1;
    }

    document.querySelector('.result')
    .innerHTML = `Wins:${score.win},loses:${score.loses},ties:${score.draws}`;

    // alert(`You picked paper and Computer picked ${computermove3} \nResult:${result3}\nWins:${score.win} Loses:${score.loses} Draws:${score.draws}`);

    document.querySelector('.mymovepara-1').innerHTML = 'You: ';
    document.querySelector('.computerpara-1').innerHTML = 'Computer: ';
}


buton4.addEventListener("click", event => {
    resetbuton();
});
function resetbuton() {
    score.win = 0;
    score.loses = 0;
    score.draws = 0;
    // alert(`Win:${score.win} Loses:${score.loses} Draws:${score.draws}`);
    document.querySelector('.result')
    .innerHTML = `Wins:${score.win},loses:${score.loses},ties:${score.draws}`;
    computermoves1.setAttribute('src','');
    mymove1.setAttribute('src','');


    document.querySelector('.mymovepara-1').innerHTML = '';
    document.querySelector('.computerpara-1').innerHTML = '';
}



autoplaybuton1.addEventListener("click",event=>{
    auto_func1();
});

let auto_playing1 = false;
let intervalId1;

function auto_func1() {
    if(!auto_playing1) {
        intervalId1 = setInterval(function(intervalId1) {
            playgame1(intervalId1);
        },1000);
        auto_playing1 = true;
    }
    else {
        clearInterval(intervalId1);
        auto_playing1 = false;
    }
}

autoplaybuton2.addEventListener("click",event=>{
    auto_func2();
});



let auto_playing2 = false;
let intervalId2;

function auto_func2() {
    if(!auto_playing2) {
        intervalId2 = setInterval(function(intervalId2) {
            playgame2(intervalId2);
        },1000);
        auto_playing2 = true;
    }
    else {
        clearInterval(intervalId2);
        auto_playing2 = false;
    }
}



autoplaybuton3.addEventListener("click",event=>{
    auto_func3();
});

let auto_playing3 = false;
let intervalId3;

function auto_func3() {
    if(!auto_playing3) {
        intervalId3 = setInterval(function(intervalId3) {
            playgame3(intervalId3);
        },1000);
        auto_playing3 = true;
    }
    else {
        clearInterval(intervalId3);
        auto_playing3 = false;
    }
}

document.body.addEventListener("keydown",(event)=>{
    if(event.key === 'r'){
        playgame1(); 
    }
    else if(event.key ==='p'){
        playgame3();
    }
    else if(event.key ==='s'){
        playgame2();
    }
});
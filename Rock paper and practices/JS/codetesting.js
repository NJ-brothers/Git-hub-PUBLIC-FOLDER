// DOM Elements
let buttonRock = document.getElementById("rock-pic");
let buttonPaper = document.getElementById("paper-pic");
let buttonScissors = document.getElementById("scissors-pic");
let buttonReset = document.getElementById("button4");

let myMoveImage = document.getElementById("mymove1");
let computerMoveImage = document.getElementById("computermoves1");

// Score Object
const score = {
    wins: 0,
    losses: 0,
    draws: 0,
};

// Event Listeners
buttonRock.addEventListener("click", () => playGame("Rock"));
buttonPaper.addEventListener("click", () => playGame("Paper"));
buttonScissors.addEventListener("click", () => playGame("Scissors"));
buttonReset.addEventListener("click", resetGame);

// Play Game Function
function playGame(userMove) {
    const computerMove = generateComputerMove();
    const result = determineResult(userMove, computerMove);

    updateImages(userMove, computerMove);
    updateResultText(userMove, computerMove, result);
    updateScore(result);
}

// Generate Computer's Move
function generateComputerMove() {
    const random = Math.random();
    if (random < 0.33) return "Rock";
    if (random < 0.66) return "Paper";
    return "Scissors";
}

// Determine Result
function determineResult(userMove, computerMove) {
    if (userMove === computerMove) return "Tie";
    if (
        (userMove === "Rock" && computerMove === "Scissors") ||
        (userMove === "Paper" && computerMove === "Rock") ||
        (userMove === "Scissors" && computerMove === "Paper")
    ) {
        return "You win";
    }
    return "You lose";
}

// Update Images
function updateImages(userMove, computerMove) {
    const imageMap = {
        Rock: "/Pics/rock-emoji.png",
        Paper: "/Pics/paper-emoji.png",
        Scissors: "/Pics/scissors-emoji.png",
    };

    myMoveImage.setAttribute("src", imageMap[userMove]);
    computerMoveImage.setAttribute("src", imageMap[computerMove]);
}

// Update Result Text
function updateResultText(userMove, computerMove, result) {
    document.querySelector(".para1").innerHTML = 
        `You Picked: ${userMove}, Computer Picked: ${computerMove}`;
    document.querySelector(".para3").innerHTML = `Result: ${result}`;
    document.querySelector(".moves_result").innerHTML = result;
    document.querySelector(".mymovepara-1").innerHTML = "You:";
    document.querySelector(".computerpara-1").innerHTML = "Computer:";
}

// Update Score
function updateScore(result) {
    if (result === "You win") score.wins++;
    else if (result === "You lose") score.losses++;
    else if (result === "Tie") score.draws++;

    document.querySelector(".result").innerHTML = 
        `Wins: ${score.wins}, Losses: ${score.losses}, Draws: ${score.draws}`;
}

// Reset Game
function resetGame() {
    score.wins = 0;
    score.losses = 0;
    score.draws = 0;

    document.querySelector(".result").innerHTML = 
        `Wins: ${score.wins}, Losses: ${score.losses}, Draws: ${score.draws}`;
    myMoveImage.setAttribute("src", "");
    computerMoveImage.setAttribute("src", "");

    document.querySelector(".para1").innerHTML = "";
    document.querySelector(".para3").innerHTML = "";
    document.querySelector(".moves_result").innerHTML = "";
    document.querySelector(".mymovepara-1").innerHTML = "";
    document.querySelector(".computerpara-1").innerHTML = "";
}

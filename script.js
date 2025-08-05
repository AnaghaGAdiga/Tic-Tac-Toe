console.log("Welcome to Tic Tac Toe By Anagha");

let music = new Audio("music.mp3");
let audioTurn = new Audio("Sparkle.mp3");
let gameover = new Audio("Win.mp3");

let turn = "X";
let gameOver = false;

// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X";
};

// Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    wins.forEach(win => {
        if (
            boxtext[win[0]].innerText !== "" &&
            boxtext[win[0]].innerText === boxtext[win[1]].innerText &&
            boxtext[win[1]].innerText === boxtext[win[2]].innerText
        ) {
            document.querySelector(".info").innerText =
                "Winner: " + boxtext[win[0]].innerText;
            gameOver = true;
            gameover.play();
            
            // Show GIF
            let img = document.querySelector(".imgbox img");
            img.style.width = "200px";
        }
    });
};

// Main logic for the game
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", () => {
        if (boxtext.innerText === "" && !gameOver) {
            boxtext.innerText = turn;
            audioTurn.play();
            checkWin();
            if (!gameOver) {
                turn = changeTurn();
                document.querySelector(".info").innerText = "Turn for " + turn;
            }
        }
    });
});

// Reset button functionality
document.getElementById("reset").addEventListener("click", () => {
    let boxtexts = document.querySelectorAll(".boxtext");
    boxtexts.forEach(box => (box.innerText = ""));
    turn = "X";
    gameOver = false;
    document.querySelector(".info").innerText = "Turn for " + turn;
    
    // Hide GIF again
    document.querySelector(".imgbox img").style.width = "0px";
});

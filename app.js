// DOM Elements
const container = document.querySelector(".container");
let blocks = document.querySelectorAll(".blocks");
const restartBtn = document.getElementById("restart");

console.log(blocks);

// Player
const player = (playerChoice) => {

    const choiceContainer = document.querySelector("#playerChoice");
    const choices = document.querySelectorAll("#choice");
    choices.forEach(choice => choice.addEventListener("click", () => {
        if (choice.textContent === "X") {
            playerChoice = "X";
        } else {
            playerChoice = "O";
        }
        choiceContainer.classList.add("invisible");
        restartBtn.classList.remove("invisible");
        // Add event listeners on blocks
        blocks.forEach(block => block.addEventListener("click", () => {block.textContent = `${playerChoice}`}));
    }));
    return playerChoice
}
player()

// Computer
const computer = (board, computerChoice) => {

}
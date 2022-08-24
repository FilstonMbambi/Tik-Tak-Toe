// DOM Elements
const container = document.querySelector(".container");
let blocks = document.querySelectorAll(".blocks");

console.log(blocks);
// Players
const player = (playerChoice) => {
    const choices = document.querySelectorAll("#playerChoice");
    choices.forEach(choice => choice.addEventListener("click", () => {
        playerChoice = choice.textContent;
    }));
    return {playerChoice}
}
// Add event listeners on blocks
blocks.forEach(block => block.addEventListener("click", () => {block.textContent = `${"X"}`}))
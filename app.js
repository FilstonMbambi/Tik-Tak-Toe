// DOM Elements
const container = document.querySelector(".container");
let blocks = document.querySelectorAll(".blocks");
const restartBtn = document.getElementById("restart");


// Player
const player = (() => {
    
    let _computerChoice;
    let _playerChoice;
    const choiceContainer = document.querySelector("#playerChoice");
    const choices = document.querySelectorAll("#choice");
    
    // Add event listeners on blocks
    const events = field => {
        field.textContent = `${_playerChoice}`;
        gameBoards.setField(field.getAttribute("id"), _playerChoice);

        let randIndex = Math.floor((Math.random()) * 8);
        gameBoards.setField(randIndex, _computerChoice);
        let randField = document.getElementById(`${randIndex}`);
        randField.textContent = _computerChoice;
        // console.log(gameBoards.board);
    }
    
    choices.forEach(choice => choice.addEventListener("click", () => {
        if (choice.textContent === "X") {
            _playerChoice = "X";
            _computerChoice = "O";
        } else {
            _playerChoice = "O";
            _computerChoice = "X";
        }
        choiceContainer.classList.add("invisible");
        restartBtn.classList.remove("invisible");


        blocks.forEach(block => {
            block.addEventListener("click", (e) => {
                if (block.textContent !== "") return;
                events(block)
            });
        });
        
    }));
    return { _playerChoice, choiceContainer, _computerChoice, events}
})()

// Board
const gameBoards = (() => {
    let board = ["", "", "",
                 "", "", "",
                 "", "", ""];
    const setField = (index, sign) => {
        board[index] = sign;
    }
    return { setField, board };
})()

restartBtn.addEventListener("click", () => {
    window.location.reload();
    player.choiceContainer.classList.remove("invisible");
    restartBtn.classList.add("invisible");
})

// Computer
const computer = (block) => {
    
}

// PSEUDOCODE
//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.








/*-------------------------------- Constants --------------------------------*/

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

/*---------------------------- Variables (state) ----------------------------*/
let board;
let turn;
let winner;
let tie;


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll(".sqr")
const messageEl = document.querySelector("#message")
const resetBtnEl = document.querySelector("#reset")

/*-------------------------------- Functions --------------------------------*/


const placePiece = (index) => {
    board[index] = turn;
}

const updateBoard = () =>{
    board.forEach((element, index) => {
        if(element === "X" ) {
            squareEls[index].textContent = "X"
        } else if (element === "O" ){
            squareEls[index].textContent = "O"
        }else{
            squareEls[index].textContent = ""
        }
    })
}

const updateMessage = () => {
    if (!winner && !tie) {
        if (turn === 'X') {
            messageEl.textContent = "It's X's turn";
        }else{ messageEl.textContent = "It's 0's turn";
        }
    }else if(!winner & tie) {
        messageEl.textContent = "It's a tie"
    } else {
        if (turn === "X") {
            messageEl.textContent = "X wins"
        }else{
            messageEl.textContent = "O wins"
        }
    }
}

const checkForWinner = () => {
    if (
        (board[0] !== '' && board[0] === board[1] && board[0] === board [2]) ||
        (board[3] !== '' && board[3] === board[4] && board[3] === board[5]) ||
        (board[6] !== '' && board[6] === board[7] && board[6] === board[8]) ||
        (board[0] !== '' && board[0] === board[3] && board[0] === board[6]) ||
        (board[1] !== '' && board[1] === board[4] && board[1] === board[7]) ||
        (board[2] !== '' && board[2] === board[5] && board[2] === board[8]) ||
        (board[0] !== '' && board[0] === board[4] && board[0] === board[8]) ||
        (board[2] !== '' && board[2] === board[4] && board[2] === board[6])
    ) {
        winner = true;
    }
}
    
const switchPlayerTurn = () => {
    if (winner) {
        return
    }
    if (turn === 'X') {
        turn = 'O'
    } else {
        turn = 'X'
    }
}
const checkForTie = () => {
    if (winner){
        return;
    }
    if (!board.includes('')){
        tie = true;
    }
}

const render = () => {
    updateBoard()
    updateMessage()
}


const handleClick = (event) => {
    const squareIndex = event.target.id;
    const squareIsFull = board[squareIndex] !== ""
    if (squareIsFull || winner) {
        return;
    }
    placePiece(squareIndex)
    checkForWinner()
    checkForTie()
    switchPlayerTurn()
    render()
}

const init = () => {
    board = ["", "", "", "", "", "", "", "", ""]
    turn = "X"
    winner = false
    tie = false
    render()
}
init()
/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach((square) => {
    square.addEventListener('click', handleClick)
})

resetBtnEl.addEventListener('click', init)
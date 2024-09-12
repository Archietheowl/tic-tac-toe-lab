
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
let board = ["X", "X", "X", "", "", "", "", "", ""]

let turn = "X"
let winner = false
let tie = false


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll(".sqr")
const messageEl = document.querySelector("#message")


/*-------------------------------- Functions --------------------------------*/


const updateBoard = () =>{
    board.forEach((element, index) => {
        if(element === "X"){
            squareEls[index].textContent = "X"
        }
        else if(element === "O"){
            squareEls[index].textContent ="O"
        }else{
            squareEls[index].textContent = ""
        }
    })}

const updateMessage = () => {
    if((winner === false) && (tie === false)){
        messageEl.textContent = turn;
    } else if ((winner === false) && (tie === true)) { 
        messageEl.textContent = "This game was a tie!";
    } else {
        messageEl.textContent = "Congratulations You Are Vicorious. All hail the tick-tack-toe Champion!"
    }
    }
const render = () => {
    updateBoard()
    updateMessage()
}
const init = () => {
    render()
}

init()


const handleClick = (event) => {
    const squareIndex = event.target.id;
    console.log(squareIndex)
    if(winner === true || board[squareIndex] !=="")
        placePiece[squareIndex] === " "
        //checkForWinner()    
    return;
}

const placePiece = (index) =>{
    board[index] = turn;
    console.log(board)
}

const checkForWinner = () => {
    winningCombos.forEach((winningCombo) => {
        console.log(winningCombo[0])
        check1 = board[winningCombo[0]]
        console.log(check1)
        check2 = board[winningCombo[1]]
        console.log(check2)
        check3 = board[winningCombo[2]]
        console.log(check3)
        if (check1 !== "" && check1 === check2 && check1 === check3){
            winner = true
        } else {
            winner = false
        }})}
checkForWinner()
console.log("winner " + winner)
const checkForTie = () => {
    if (winner === true || check1 === "") {
        tie = false
    } else {
        tie = true
        return tie
    }
}
checkForTie()
console.log("tie " + tie)

/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach((square) => {
    square.addEventListener('click', handleClick)
})


// winner === false ? console.log("winner " + winner) : null;
// board.includes("", 0) ? console.log("No Empty Strings Here") : null;

// winningCombos.forEach((winningCombo) => {
//     check1 = board[winningCombo[0]]
//     console.log(check1)
//     check2 = board[winningCombo[1]]
//     console.log(check2)
//     check3 = board[winningCombo[2]]
//     console.log(check3)
//     if (check1 !== "" && check1 === check2 && check1 === check3) {
//         winner = true
//         break;
//     } else {
//         winner = false
//     }
// })}
//JS code goes here!

//remember to Whiteboard and Pseduocode before diving into the actual code!
//add event listeners, when first player goes it will display an x
//second player will display an o
//check to see if there are 3 in a row based on where the player puts the x or o 
//once there is a winner display who won 


//getting DOM elements


//win conditions
//a player wins of they have 3 in a row so winning combinations are :
//[0, 1, 2]
//[0, 4, 8]
//[0, 3, 6]
//[1, 4, 7]
//[2, 5, 8]
//[3, 4, 5]
//[6, 7, 8]
//[6, 4, 2]

//game logic
//Let the players choose a place to put an x or o, starts with x
//once one player goes the next turn goes to alternate player
//if the player has 3 and matches one of the combinations then they
//declared the winner

//what else will you need?

const squares = document.querySelectorAll(".square")
const restart = document.querySelector(".restart")

const boxes = [];
let x_score = document.querySelector("#playerXScore")
let o_score = document.querySelector("#playerXScore")

const player_x = "x"
const player_o = "o"
let gameOver = false
//Play x goes first 
let turn = player_x

const board = Array(squares.length);
//board.fill(null)

const boxClicked = (e) => {
    const id = e.target.id;

    if (boxes[id] !== null && e.target.innerText != player_x && e.target.innerText != player_o){
        boxes[id] = turn;
        e.target.innerText = turn;
        console.log(turn + " went in " + id)
    
        if (checkWin()){
            console.log( `${turn} won!`)
            //restartBtn();
            //return;
        }
        turn = turn === player_o ? player_x : player_o
    }
};

const gameGrid = () => {
    squares.forEach(square => square.addEventListener('click', boxClicked));
}

const winning_combinations = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [6, 4, 2],
];

const checkWin = () => {
    //const id = parseInt((e.target.id).slice);
    if (boxes['square0'] === turn){
        if(boxes['square1'] === turn && boxes['square2']=== turn){
            const winner = document.querySelector('.win')
            console.log(`${turn} won`)
            return true;
        }
        if(boxes['square4'] === turn && boxes['square8'] === turn){
            console.log(`${turn} won`)
            return true;
        }
        if(boxes['square3'] === turn && boxes['square6'] === turn){
            console.log(`${turn} won`)
            return true;
        }
    }
    if (boxes['square8'] === turn){
        if(boxes['square2'] === turn && boxes['square5'] === turn){
            console.log(`${turn} won`)
            return true;
        }
        if(boxes['square6'] === turn && boxes['square7'] === turn){
            console.log(`${turn} won`)
            return true;
        }
    }
    if (boxes['square4'] === turn){
        if(boxes['square1'] === turn && boxes['square7'] === turn){
            console.log(`${turn} won`)
            return true;
        }
        if(boxes['square3'] === turn && boxes['square5'] === turn){
            console.log(`${turn} won`)
            return true;
        }
        if(boxes['square2'] === turn && boxes['square6'] === turn){
            console.log(`${turn} won`)
            return true;
        }
    }
};

const restartBtn = () => { 
    //setTimeout(() => {
        boxes.forEach((box,i) => {
          boxes[i] = null;
        });
        squares.forEach((square) => {
            square.innerText = null;
          });
    //    })
    console.log("reset button pressed")
  };

restart.addEventListener('click', restartBtn);
//restartBtn();
gameGrid();

//Tested code that isn't useful 
// squares.forEach(square => square.addEventListener('click', boxClicked => {
//     switchPlayers()
//     if (square.innerText !== (""))
//         window.alert('Box is not empty');
//     if((square.innerText === ("")) && (turn == player_x))
//         square.innerText = ('x')    
//     if ((square.innerText === ("")) && (turn == player_o))
//         square.innerText = ('o')
// function isBoxEmpty(){
//     if (square.innerText === (""))
//     return
// }

// function switchPlayers(){
//     if (turn === player_x) {
//         turn = player_o;
//     } else {
//         turn = player_x;
//     }
// }

// function marker(box){
//     if (turn === player_x)
//     {
//         box.innerHTML = 'X';
//     }
//     else
//     {
//         box.innerHTML = 'O';
//     }
// }
console.log('Welcome to tic tac toe');

var turnMusic = new Audio('ting.mp3');
var gameOver = new Audio('gameover.mp3');
var boxes = document.getElementsByClassName('box');
var turn = "X";
var isgameOver = false;

//function to change the turn 
function changeTurn(){
    return turn === "X" ? "0" : "X";
}

//function to check win
const checkWin = () => {
    let boxText = document.getElementsByClassName('boxInfo');
    let wins = [
       [0,1,2],
       [3,4,5],
       [6,7,8],
       [0,3,6],
       [1,4,7],
       [2,5,8],
       [0,4,8],
       [2,4,6],
    ]
    wins.forEach( e => {
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== '')){
            document.querySelector('.whosTurn').innerText = boxText[e[0]].innerText + ' Won';
            isgameOver = true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '200px'
        }
    })
} 

//game logic
Array.from(boxes).forEach(element => {
    let boxValue = element.querySelector('.boxInfo');
    element.addEventListener('click' , () => {
        if(boxValue.innerText === ''){
            boxValue.innerText = turn;
            turn = changeTurn();
            turnMusic.play();
            checkWin();
            if(!isgameOver){
                document.getElementsByClassName('whosTurn')[0].innerText = 'Turn for ' + turn;
            }
        }
    })
})


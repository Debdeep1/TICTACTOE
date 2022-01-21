console.log("Welcome")
let music=new Audio("sounds/music.mpeg");

let audioturn=new Audio("sounds/ting.mp3");
let gameover=new Audio("sounds/gameover.mpeg");

let turn="X";
let isgameover = false;

function changeTurn(){
  return turn==="X"?"0":"X"
}

function checkWin(){
  let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            alert("GAME OVER!");
            gameover.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "400px";
            document.querySelector('.imgbox').getElementsByClassName('.popup')[0].style.visibility="visible";



        }
    })
}

var count=0;
//LOGIC

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click', (e)=>{
      if(boxtext.innerText===''){
        boxtext.innerText= turn;
      /*  music.play(); */
        turn=changeTurn();
        audioturn.play();
        checkWin();
        document.getElementsByClassName("info")[0].innerText="Turn for" + turn;
        count++;
        if(count===9){alert("DRAW");}
      }
    })
});

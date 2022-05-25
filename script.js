let turn2 = document.querySelector(".turn2");
let turn1 = document.querySelector(".turn1");
let emo1 = document.querySelector(".emo1");
let emo2 = document.querySelector(".emo2");
var gameStart = document.getElementById("start");
let playerWon = document.getElementById("player_won");
var p1Turn = document.getElementById("p1Turn");
var p2Turn = document.getElementById("p2Turn");
let emoVal1 = document.getElementById("emo1_val");
let emoVal2 = document.getElementById("emo2_val");
let p1_health = document.getElementById("player1_health");
let p2_health = document.getElementById("player2_health");
let p1Win_rate = document.getElementById("p1Win_rate");
let p2Win_rate = document.getElementById("p2Win_rate");
let val1 = 100;
let won = "";
let val2 = 100;
let p1w = 0;
let p2w = 0;
gameStart.addEventListener("click", () => {
  if (turn2.style.display == "block") {
    turn2.style.display = "none";
  }
  p1Turn.style.pointerEvents = "fill";
  turn1.style.display = "block";
  playerWon.style.opacity = "1";
  val1 = 100;
  val2 = 100;
  p1_health.innerHTML = val1;
  p2_health.innerHTML = val2;
  won = "";
  won += "Game On!";
  playerWon.innerHTML = won;
});

p1Turn.addEventListener("click", () => {
  turn1.style.display = "none";
  turn2.style.display = "block";
  emo2.classList.remove("anime2");
  emo1.classList.add("anime1");
  let rand1 = Math.floor(Math.random() * 20 + 1);
  emoVal1.innerHTML = rand1;
  setTimeout(() => {
    emo1.classList.remove("anime1");
    val1 = val1 - rand1;
    if (val1 <= 0) {
      val1 = 0;
      won = "";
      won += "Game Over!";
      playerWon.innerHTML = won;
      p1w++;
      checkWinner(p1w);
      p1Win_rate.innerHTML = p1w;
      p1Turn.style.pointerEvents = "none";
      p2Turn.style.pointerEvents = "none";
    }
    p2_health.innerHTML = val1;
  }, 1000);
  p1Turn.style.pointerEvents = "none";
  p2Turn.style.pointerEvents = "fill";
});

p2Turn.addEventListener("click", () => {
  turn2.style.display = "none";
  turn1.style.display = "block";
  emo1.classList.remove("anime1");
  emo2.classList.add("anime2");
  let rand2 = Math.floor(Math.random() * 20 + 1);
  emoVal2.innerHTML = rand2;
  setTimeout(() => {
    emo2.classList.remove("anime2");
    val2 = val2 - rand2;
    if (val2 <= 0) {
      val2 = 0;
      won = "";
      won += "Game Over!";
      playerWon.innerHTML = won;
      p2w++;
      checkWinner(p2w);
      p2Win_rate.innerHTML = p2w;
      p1Turn.style.pointerEvents = "none";
      p2Turn.style.pointerEvents = "none";
    }
    p1_health.innerHTML = val2;
  }, 1000);
  p2Turn.style.pointerEvents = "none";
  p1Turn.style.pointerEvents = "fill";
});


function checkWinner(){
if(p1w >= 2){
    won = "";
    p1w = 0;
    p2w = 0;
    p1Win_rate.innerHTML = p1w;
    p2Win_rate.innerHTML = p2w;
    won += "Player One Won!"
    playerWon.innerHTML = won;
}
if(p2w >= 2){
  won = "";
  p1w = 0;
  p2w = 0;
  p1Win_rate.innerHTML = p1w;
  p2Win_rate.innerHTML = p2w;
  won += "Player Two Won!";
  playerWon.innerHTML = won;
}
}

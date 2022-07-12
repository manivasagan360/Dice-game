// function roll_dice() {
//     var rand_num= Math.floor(Math.random()*6)+1;
//      return rand_num
//  }
var player1=Math.floor(Math.random()*6)+1;
var player2=Math.floor(Math.random()*6)+1;

var player1img="images/dice"+player1+".png";
var player2img="images/dice"+player2+".png";
// document.querySelectorAll("img")[0].setAttribute("src",player1img);
// document.querySelectorAll("img")[1].setAttribute("src",player2img);
document.getElementsByClassName("img1")[0].src = player1img;
document.getElementsByClassName("img2")[0].src = player2img;

if (player1>player2) {
    document.querySelector("h1").innerHTML="player 1 Wins";
    
} else if (player2>player1){
    
    document.querySelector("h1").innerHTML="player 2 Wins";
}else{
    document.querySelector("h1").innerHTML="Its a draw";
}
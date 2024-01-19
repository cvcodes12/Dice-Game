var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
document.getElementsByClassName("img1")[0].setAttribute("src","./images/dice"+randomNumber1+".png");
document.getElementsByClassName("img2")[0].setAttribute("src","./images/dice"+randomNumber2+".png");
if(randomNumber1>randomNumber2)
{
    var result="Player 1 wins"
}
else if(randomNumber1<randomNumber2)
{
    var result = "Player 2 wins"
}
else
    var result= "Draw"
document.querySelector("h1").innerHTML=result;
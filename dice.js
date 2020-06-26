var random1=Math.random();
random1=random1*6;
var result1=Math.floor(random1)+1;
var name="dice"+result1+".png";
document.querySelector("table .dice td img").setAttribute("src",name);
var random2=Math.random();
random2=random2*6;
var result2=Math.floor(random2)+1;
var name1="dice"+result2+".png";
document.querySelector("table .dice").lastElementChild.lastElementChild.setAttribute("src",name1);
if(result1<result2)
document.querySelector("h1").innerHTML="Player 2 wins!";
else if(result1>result2)
document.querySelector("h1").innerHTML="Player 1 wins!";
else
document.querySelector("h1").innerHTML="It is a draw!";

function refresh()
{
    window.location.reload();
}